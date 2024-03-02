import { File } from './singleUplaod';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import React from 'react';
import styles from '../styles.module.css';

export const IMAGE_MAX_SIZE = 1 * 1024 * 1024; //1MB
export const FILE_MAX_SIZE = 10 * 1024 * 1024; //10MB

interface FileUploadProps {
  selectFile: (file: File) => void;
  placeholder?: string;
}

export interface FileUploadInputRef {
  clear: () => void;
  changeAccept: (str: string) => void;
  onSuccess: () => void;
  onError: (reason: any) => void;
}

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
        selectFile(null);
        setFileName('');
      }
    };
    const onSuccess = () => {
      // input 의 색상 변경
      console.log('upload 완료');
    };
    const onError = () => {
      console.log('error');
    };
    const changeFile = (file: globalThis.File) => {
      selectFile(file);
      setFileName(file.name);
    };
    const uploadFail = (maxSize: number, type: string) => {
      alert(` ${type} Maximum upload size:${maxSize / (1024 * 1024)}MB`);
      selectFile(null);
      setFileName('');
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
          type="file"
          id="file"
          accept={accept}
          ref={inputRef}
          onChange={(event) => {
            const file = event.target.files && event.target.files[0];
            if (file) {
              const maxSize = file.type.startsWith('image/')
                ? IMAGE_MAX_SIZE
                : FILE_MAX_SIZE;
              file.size > maxSize
                ? uploadFail(maxSize, file.type)
                : changeFile(file);
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
