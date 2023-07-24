import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    // HTML 문서 내에서 id가 'root'인 요소를 찾아서 해당 요소에 React 애플리케이션을 렌더링
    document.getElementById('root') as HTMLElement
);
// 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미
root.render(
    // 이거 주석 처리 안하면 useEffect 한 번만 실행되어야 하는 것 들이 두번 실행됨
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
