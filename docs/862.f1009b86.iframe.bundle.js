"use strict";(self.webpackChunk_gwiyeomgo_react_toolkit=self.webpackChunk_gwiyeomgo_react_toolkit||[]).push([[862],{"./src/lib/Buttton/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/styles.module.css"),classnames_bind__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/bind.js"),classnames_bind__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__),_Loading_loading__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/Loading/loading.tsx"),classnames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");let cx=classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z),Button=props=>{let{onClick,children,color,type,loading=!1,icon,disabled,isSearchButton,...rest}=props,[innerLoading,setInnerLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(loading);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setInnerLoading(loading)},[loading]);let iconNode=innerLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Loading_loading__WEBPACK_IMPORTED_MODULE_3__.g,{}):icon,childClass=cx({"child-space":iconNode}),buttonClass=cx("btn",type,color,{"icon-container":iconNode});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button",{role:"button",className:classnames__WEBPACK_IMPORTED_MODULE_4___default()(buttonClass,{[_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.searchButton]:isSearchButton}),onClick:e=>{if(innerLoading){e.preventDefault();return}null==onClick||onClick(e)},disabled:disabled,...rest,children:[iconNode,null!=children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:childClass,children:children})]})}},"./src/lib/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var react=__webpack_require__("./node_modules/react/index.js");function lazy(importFn){return(0,react.lazy)(async()=>({default:(await importFn()).ReactComponent}))}let icons={Cross:lazy(async()=>__webpack_require__.e(449).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/cross.svg"))),Download:lazy(async()=>__webpack_require__.e(565).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/download.svg"))),Degrees360:lazy(async()=>__webpack_require__.e(975).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/360-degrees.svg"))),MenuBurger:lazy(async()=>__webpack_require__.e(229).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/menu-burger.svg"))),Star:lazy(async()=>__webpack_require__.e(963).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/star.svg"))),Search:lazy(async()=>__webpack_require__.e(645).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/search.svg"))),Heart:lazy(async()=>__webpack_require__.e(361).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/heart.svg"))),Minus:lazy(async()=>__webpack_require__.e(891).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/minus.svg"))),Plus:lazy(async()=>__webpack_require__.e(961).then(__webpack_require__.bind(__webpack_require__,"./src/lib/Icon/assets/plus.svg")))};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Icon=_ref=>{let{icon,className,rotate,width,height,color,...rest}=_ref,SvgIcon=(0,react.useMemo)(()=>icons[icon],[icon]);return SvgIcon?(0,jsx_runtime.jsx)("div",{className:className,"aria-label":icon,role:"img",style:{width:width,height:height,fill:color,display:"flex",justifyContent:"center",alignItems:"center",transform:rotate?"rotate(".concat(rotate,"deg)"):void 0},...rest,children:(0,jsx_runtime.jsx)(react.Suspense,{fallback:null,children:(0,jsx_runtime.jsx)(SvgIcon,{})})}):null};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"Cross"'},{value:'"Download"'},{value:'"Degrees360"'},{value:'"MenuBurger"'},{value:'"Star"'},{value:'"Search"'},{value:'"Heart"'},{value:'"Minus"'},{value:'"Plus"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rotate:{defaultValue:null,description:"",name:"rotate",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/lib/Icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/Input/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/styles.module.css"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let InputRoot=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(_templateObject||(_templateObject=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 50px;\n  line-height: 1.1em;\n  letter-spacing: 0.00938em;\n  color: black;\n  box-sizing: border-box;\n  cursor: text;\n  align-items: left;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]))),Label=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.label(_templateObject2||(_templateObject2=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  white-space: nowrap;\n  overflow: hidden; /* 내용이 넘칠 경우 숨김 */\n  text-overflow: ellipsis; /* 넘친 부분에 대해 ...으로 표시 */\n"]))),InputComponent=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.input(_templateObject3||(_templateObject3=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  width: 100%;\n  font-size: 1rem;\n  padding: ",";\n  padding-inline-end: ",";\n"])),props=>props.padding,props=>props.paddinginlineend),ClearButton=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.button(_templateObject4||(_templateObject4=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  position: relative;\n  padding: 10px;\n  background-color: lightgrey;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  color: white;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n"]))),Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,ref)=>{let{onChange,label,labelPosition="outer",labelStyle,value,typeSearch=!1,readOnly,...inputProps}=props,valid="inner"===labelPosition,inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setInputValue(null==value?"":String(value))},[value]);let clearInputValue=()=>{inputRef.current&&(setInputValue(""),inputRef.current.value="")};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({focus,blur:()=>{var _inputRef$current;null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.blur()},clear:clearInputValue,setSelectionRange:(start,end,direction)=>{var _inputRef$current2;null===(_inputRef$current2=inputRef.current)||void 0===_inputRef$current2||_inputRef$current2.setSelectionRange(start,end,direction)},select:()=>{var _inputRef$current3;null===(_inputRef$current3=inputRef.current)||void 0===_inputRef$current3||_inputRef$current3.select()},input:inputRef.current})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(InputRoot,{children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Label,{style:{...labelStyle},className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.defaultLabel,{[_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.innerLabel]:valid},{[_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.backgroundWhite]:valid}),children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.inputRoot,{[_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.searchInputRoot]:typeSearch}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(InputComponent,{role:"input",disabled:readOnly,value:inputValue,ref:inputRef,onChange:e=>{setInputValue(e.target.value),null==onChange||onChange(e)},className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.defaultInput,{[_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.expandInput]:valid,[_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.Z.searchInput]:typeSearch}),type:"text",padding:typeSearch?"18px":"10px",paddinginlineend:typeSearch?"12px":"10px",...inputProps}),!readOnly&&inputValue.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ClearButton,{onClick:clearInputValue,children:"X"})]})]})});Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((text: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValueType"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"outer"'},{value:'"inner"'}]}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"CSSProperties"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},typeSearch:{defaultValue:null,description:"",name:"typeSearch",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Input/input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/lib/Input/input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/Loading/loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Loading});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let rotation=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.F4)(_templateObject||(_templateObject=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),load=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.F4)(_templateObject2||(_templateObject2=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  0%,\n  100% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n"]))),DefaultSpan=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span(_templateObject3||(_templateObject3=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  padding: 10px;\n  width: ","px;\n  height: ","px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: inline-block;\n  ","\n"])),_ref=>{let{size}=_ref;return size},_ref2=>{let{size}=_ref2;return size},_ref3=>{let{type,speed,color,colorPalette}=_ref3;return"line"===type?(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(_templateObject4||(_templateObject4=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n          background-color: grey;\n          box-shadow:\n            rgba(0, 0, 0, 0.07) 0px 1px 2px,\n            rgba(0, 0, 0, 0.07) 0px 2px 4px,\n            rgba(0, 0, 0, 0.07) 0px 4px 8px,\n            rgba(0, 0, 0, 0.07) 0px 8px 16px,\n            rgba(0, 0, 0, 0.07) 0px 16px 32px,\n            rgba(0, 0, 0, 0.07) 0px 32px 64px;\n          &:nth-child(1) {\n            animation-delay: 0s;\n            background-color: ",";\n          }\n\n          &:nth-child(2) {\n            animation-delay: 0.5s;\n            background-color: ",";\n          }\n\n          &:nth-child(3) {\n            animation-delay: 1s;\n            background-color: ",";\n          }\n          animation: "," ","s linear infinite;\n        "])),colorPalette&&colorPalette[1],colorPalette&&colorPalette[2],colorPalette&&colorPalette[3],load,speed):(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(_templateObject5||(_templateObject5=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n          border: 3px solid ",";\n          border-bottom-color: transparent;\n          animation: "," ","s linear infinite;\n        "])),color||"#fff",rotation,speed)}),defaultColors=["#ffc2e1","#ffb4be","#ff97bb","#ff7cb4"],Loading=props=>{let{type="default",size=10,color,speed=2,colorPalette=defaultColors,...rest}=props;return"default"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DefaultSpan,{...rest,speed:speed,color:color,type:type,size:size}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DefaultSpan,{...rest,colorPalette:colorPalette,speed:speed,type:type,size:size}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DefaultSpan,{...rest,colorPalette:colorPalette,speed:speed,type:type,size:size}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DefaultSpan,{...rest,colorPalette:colorPalette,speed:speed,type:type,size:size})]})};try{Loading.displayName="Loading",Loading.__docgenInfo={description:"",displayName:"Loading",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"line"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number"}},colorPalette:{defaultValue:null,description:"",name:"colorPalette",required:!1,type:{name:"string[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Loading/loading.tsx#Loading"]={docgenInfo:Loading.__docgenInfo,name:"Loading",path:"src/lib/Loading/loading.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/Messages/message.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Message});var _templateObject,_templateObject2,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(_templateObject||(_templateObject=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  margin: 10px 30px;\n  padding: 10px;\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 10px;\n  background-color: #ffffff;\n  border-radius: 10px;\n  width: max-content; /* 수정: min-content 대신 max-content 사용 */\n  max-width: 300px; /* 추가: 부모 요소 크기를 넘지 않도록 최대 너비 설정 */\n  box-shadow:\n    rgba(0, 0, 0, 0.12) 0px 1px 3px,\n    rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  outline: none;\n"]))),Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span(_templateObject2||(_templateObject2=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  color: #000000;\n  margin: 0 5px;\n  text-align: left;\n  font-size: 16px;\n  width: 100%;\n  word-wrap: break-word; /* 추가 */\n  max-width: 200px; /* 추가 */\n"]))),Message=_ref=>{let{children,className,style}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{className:className,style:style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text,{children:children})})};try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Messages/message.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"src/lib/Messages/message.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/Messages/messageGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>MessageGroup});var _templateObject,_templateObject2,_templateObject3,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),message=__webpack_require__("./src/lib/Messages/message.tsx");let useNotificationTimer=(list,delay)=>{let[notifications,setNotifications]=(0,react.useState)([]),timerRef=(0,react.useRef)(null);return(0,react.useEffect)(()=>(timerRef.current&&clearInterval(timerRef.current),timerRef.current=setInterval(()=>{setNotifications(prevList=>{if(!(prevList.length<list.length))return clearInterval(timerRef.current),[];{let index=prevList.length;return[...prevList,list[index]]}})},delay),()=>{timerRef.current&&(clearInterval(timerRef.current),setNotifications([]))}),[list,delay,setNotifications]),notifications};var searchInput=__webpack_require__("./src/lib/SearchInput/searchInput.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fcfcfc;\n  width: 300px;\n  padding: 20px;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n"]))),Content=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */\n  overflow-y: auto; /* 콘텐츠가 넘치면 스크롤바 추가 */\n"]))),Footer=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  width: '100%';\n  flex: 0 0 auto; /* 높이를 고정시키고, 늘어나거나 줄어들지 않도록 설정 */\n"]))),MessageGroup=_ref=>{let{boxMinHeight,delay,list,addMessage}=_ref,[statusList,setStatusList]=(0,react.useState)(list),notifications=statusList?useNotificationTimer(statusList,delay):[];return(0,jsx_runtime.jsxs)(Container,{style:{minHeight:boxMinHeight||"50vh"},children:[(0,jsx_runtime.jsx)(Content,{children:notifications.map(notification=>(0,jsx_runtime.jsx)(message.v,{className:notification.classNames,id:notification.id,style:notification.style,children:(0,jsx_runtime.jsx)("span",{children:notification.message})},notification.id))}),addMessage&&(0,jsx_runtime.jsx)(Footer,{children:(0,jsx_runtime.jsx)(searchInput.M,{delay:delay,onClickSearch:message=>{let newItem={id:statusList?statusList.length+1:1,message:message};setStatusList(prevList=>[...prevList||[],newItem])}})})]})};try{MessageGroup.displayName="MessageGroup",MessageGroup.__docgenInfo={description:"",displayName:"MessageGroup",props:{list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"ListItem[]"}},delay:{defaultValue:null,description:"",name:"delay",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},addMessage:{defaultValue:null,description:"",name:"addMessage",required:!1,type:{name:"boolean"}},boxMinHeight:{defaultValue:null,description:"",name:"boxMinHeight",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Messages/messageGroup.tsx#MessageGroup"]={docgenInfo:MessageGroup.__docgenInfo,name:"MessageGroup",path:"src/lib/Messages/messageGroup.tsx#MessageGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/SearchInput/searchInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>SearchInput});var _templateObject,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_Buttton_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/Buttton/button.tsx"),_Input_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/Input/input.tsx"),_Util_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/Util/hooks/useDebounce.tsx"),_Icon_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/Icon/icon.tsx"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles_module_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/styles.module.css"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");let Container=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div(_templateObject||(_templateObject=(0,_Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)([""]))),SearchInput=props=>{let{buttonStyle,inputStyle}=props,[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),debouncedResult=(0,_Util_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__.N)(value,props.delay),ref=react__WEBPACK_IMPORTED_MODULE_4__.createRef();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Container,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_5__.Z.search,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Input_input__WEBPACK_IMPORTED_MODULE_1__.I,{ref:ref,typeSearch:!0,style:{...inputStyle},value:value,onChange:event=>{setValue(event.target.value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Buttton_button__WEBPACK_IMPORTED_MODULE_0__.z,{color:"primary",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon_icon__WEBPACK_IMPORTED_MODULE_3__.J,{icon:"Search",width:"20px",height:"20px",color:"white"}),onClick:()=>{var _props$onClickSearch,_ref$current;null===(_props$onClickSearch=props.onClickSearch)||void 0===_props$onClickSearch||_props$onClickSearch.call(props,debouncedResult),setValue(""),null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.clear()},isSearchButton:!0,style:{...buttonStyle}})]})};try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:"",displayName:"SearchInput",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},buttonStyle:{defaultValue:null,description:"",name:"buttonStyle",required:!1,type:{name:"CSSProperties"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:"CSSProperties"}},onClickSearch:{defaultValue:null,description:"",name:"onClickSearch",required:!1,type:{name:"((text: string) => void)"}},delay:{defaultValue:null,description:"",name:"delay",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/SearchInput/searchInput.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/lib/SearchInput/searchInput.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/Util/hooks/useDebounce.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useDebounce});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useDebounce(value,delay){let[debounceValue,setDebounceValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let timeoutId=setTimeout(()=>{setDebounceValue(value)},delay);return()=>{clearTimeout(timeoutId)}},[value,delay]),debounceValue}try{useDebounce.displayName="useDebounce",useDebounce.__docgenInfo={description:"value나 delay가 변경시  useEffect가 실행 -> 딜레이가 새로 설정됨\n또 값이 변경되어 useEffect이 호출될때 이전에 예약된 타임아웃을 취소하여 실행되지 않도록함  = clearTimeout\nsetTimeout은 비동기적으로 동작하며 일정 시간이 지난 후에 어떤 동작을 수행하거나 대기 시간을 설정(timeoutId = 실행이 예약된 타임아웃을 식별)\n\n\n//https://dev.to/manishkc104/debounce-input-in-react-3726\n//https://rkgml981105.medium.com/debounce-onchange-input-event-with-react-9c274118b98c",displayName:"useDebounce",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Util/hooks/useDebounce.tsx#useDebounce"]={docgenInfo:useDebounce.__docgenInfo,name:"useDebounce",path:"src/lib/Util/hooks/useDebounce.tsx#useDebounce"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/styles.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={selected:"styles_selected__G1NE3",badgeAboveChildren:"styles_badgeAboveChildren__zUTJ0",badge:"styles_badge__xbdGE",inputRoot:"styles_inputRoot__Y9q3y",defaultInput:"styles_defaultInput__nenXm",innerLabel:"styles_innerLabel__1Oc3o",defaultLabel:"styles_defaultLabel__jfDHF",expandInput:"styles_expandInput__d0pZ5",btn:"styles_btn__249Fp",primary:"styles_primary__YtPEi",success:"styles_success__PcG1K",danger:"styles_danger__GSoGL",warning:"styles_warning__QNJrJ",outline:"styles_outline__eCtQg","icon-container":"styles_icon-container__W3WbO","child-space":"styles_child-space__BlMfr",avatar:"styles_avatar__Vftca",search:"styles_search__2ZphF",searchButton:"styles_searchButton__hidCY",searchInputRoot:"styles_searchInputRoot__fjMNS",searchInput:"styles_searchInput__j+HYR",timerItem:"styles_timerItem__KCvSb",timerValue:"styles_timerValue__lvDhX",timerLabel:"styles_timerLabel__1k2tC",header:"styles_header__AHkbM",username:"styles_username__ypccv"}}}]);