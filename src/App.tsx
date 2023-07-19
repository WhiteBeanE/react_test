import React, {ChangeEvent, useRef, useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Hello from "./javaScript/Hello";
import Wrapper from "./javaScript/Wrapper";
import Counter from "./javaScript/Counter";
import InputSample from "./javaScript/InputSample";
import UserList from "./javaScript/UserList";
import CreateUser from "./javaScript/CreateUser";
import Main from "./javaScript/page/Main";
import MyPage from "./javaScript/page/MyPage";
import Login from "./javaScript/page/Login";

export default function App(){
    return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Main/>}/>
                  <Route path={"/mypage"} element={<MyPage/>}/>
                  <Route path={"/login"} element={<Login/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    );
}

// function Appp() {
//     const [inputs, setInputs] = useState({
//         userName: '',
//         email: ''
//     });
//     const { userName, email } = inputs;
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setInputs({
//             ...inputs,
//             [name]: value
//         });
//     };
//     const [users, setUsers] = useState([
//         {
//             id : 1,
//             userName : 'White',
//             email : 'white1834@gmail.com',
//             active: true
//         },
//         {
//             id : 2,
//             userName : 'Bean',
//             email : 'Bean0805@naver.com',
//             active: true
//         },
//         {
//             id : 3,
//             userName : 'bsm',
//             email : 'bsm0104@naver.com',
//             active: false
//         }
//
//     ])
//     const nextId = useRef(3);
//     const onCreate = () => {
//         const user = {
//             id : nextId.current += 1,
//             userName,
//             email,
//             active : false
//         };
//         // setUsers([...users, user]);
//         if(userName !== '' && email !== ''){
//             setUsers(users.concat(user));
//             setInputs({
//                 userName: '',
//                 email: ''
//             });
//         }else {
//             console.log('userName or email is Null');
//         }
//     };
//     const onRemove =  (id: number)  => {
//         // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//         // = user.id 가 id 인 것을 제거함
//         setUsers(users.filter(user => user.id != id));
//     };
//     const onToggle = (id : number) => {
//       setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user))
//     };
//     return(
//         <>
//             <CreateUser
//                 userName={userName}
//                 email={email}
//                 onChange={onChange}
//                 onCreate={onCreate}
//             />
//             <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
//         </>
//     );
// }
//
// export default App;
