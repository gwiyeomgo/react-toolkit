import { File } from './singleUplaod';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import React from 'react';
import styles from '../styles.module.css';
import heic2any from 'heic2any';
import imageCompression from 'browser-image-compression';

export const FILE_MAX_SIZE = 10 * 1024 * 1024; //10MB

export type FileUploadProps = {
  selectFile: (p: File | null, s: string) => void;
  placeholder?: string;
};
export type FileUploadInputRef = {
  clear: () => void;
  changeAccept: (str: string) => void;
  onSuccess: () => void;
  onError: (reason: any) => void;
};

/*
 * https://velog.io/@suzzjeon/browser-image-compression-heic2any
 * https://www.npmjs.com/package/browser-image-compression
 */
const handleImageUpload = async (file: globalThis.File) => {
  console.log(`before size ${file.size / 1024 / 1024} MB`);
  if (file) {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      console.log(
        'compressedFile instanceof Blob',
        compressedFile instanceof Blob,
      ); // true
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`,
      ); // smaller than maxSizeMB

      return compressedFile;
    } catch (error) {
      console.error('Image compression error:', error);
    }
    return null;
  }
};

//https://webdir.tistory.com/435
const FileUpload = forwardRef<FileUploadInputRef, FileUploadProps>(
  (props, ref) => {
    const { selectFile, placeholder } = props;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = useState('');
    const [accept, setAccept] = useState('');

    const changeAccept = (str: string) => setAccept(str);

    const clear = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        selectFile(null, '');
        setFileName('');
      }
    };
    const onSuccess = () => {
      //TODO input 의 색상 변경
      console.log('upload 완료');
    };
    const onError = () => {
      console.log('error');
    };
    const changeFile = async (file: globalThis.File) => {
      let src = '';
      if (file.type.startsWith('image/')) {
        src = await fileToObjectURL(file);
      }
      selectFile(file, src);
      setFileName(file.name);
    };

    const imageResize = (imageBlob: globalThis.File) =>
      handleImageUpload(imageBlob) || imageBlob;
    const fileToObjectURL = async (file: globalThis.File): Promise<string> => {
      // 비동기적으로 실행되므로 반환 유형은 Promise<string>
      if (file.type === 'image/heic') {
        const imageBlob = await heic2any({ blob: file });
        if (imageBlob) {
          if (Array.isArray(imageBlob)) {
            //TODO 멀티 부분..나중에 고민하기
            return '';
          } else {
            const newHeicFile = await imageResize(imageBlob as globalThis.File);
            return newHeicFile ? URL.createObjectURL(newHeicFile) : '';
          }
        }
      } else {
        const newFile = await imageResize(file);
        return newFile ? URL.createObjectURL(newFile) : '';
      }
      return '';
    };

    useImperativeHandle(ref, () => ({
      clear,
      onSuccess,
      onError,
      changeAccept,
      input: inputRef.current,
    }));
    //MIME Type https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    /*
    accept 속성의 값으로는 MIME 타입이나 파일 확장자를 사용할 수 있습니다.
    accept=".jpg, .jpeg, .png": JPG, JPEG, PNG 확장자를 가진 이미지 파일
    accept="image/*": 모든 이미지 파일
    accept=".pdf": PDF 파일
    accept=".doc, .docx": Microsoft Word 문서 파일
    accept=".mp3, .wav": 오디오 파일
    * */
    return (
      <div className={styles.upload}>
        <input
          className={styles.name}
          value={fileName}
          placeholder={placeholder}
        />
        <label htmlFor="file">파일찾기</label>
        <input
          //input 타입이 file 인 경우 accept 옵션으로 유효성 검사 및 검증을 수행
          data-testid="Upload"
          type="file"
          id="file"
          accept={accept}
          ref={inputRef}
          onChange={(event) => {
            const file = event.target.files && event.target.files[0];
            if (file) {
              if (file.size > FILE_MAX_SIZE) {
                //https://ko.javascript.info/alert-prompt-confirm
                alert(
                  `${file.type} Maximum upload size:${file.size / (1024 * 1024)}MB`,
                );
                selectFile(null, '');
                setFileName('');
              } else {
                changeFile(file);
              }
            }
          }}
        />
      </div>
    );
  },
);

//forwardRef 사용시
// ESLint: Component definition is missing display name(react/display-name)  발생!
FileUpload.displayName = 'FileUpload';
export { FileUpload };
