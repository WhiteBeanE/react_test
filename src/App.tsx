import React, {ChangeEvent, useRef, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from "./javaScript/Hello";
import Wrapper from "./javaScript/Wrapper";
import Counter from "./javaScript/Counter";
import InputSample from "./javaScript/InputSample";
import UserList from "./javaScript/UserList";
import CreateUser from "./javaScript/CreateUser";

function App() {
    // const name = 'WhiteBean';
    // const style = {
    //     backgroundColor : 'blue',
    //     color : 'red',
    //     fontsize : 30,
    //     padding : 10
    // }
    const [inputs, setInputs] = useState({
        userName: '',
        email: ''
    });
    const { userName, email } = inputs;
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("asasdasd");
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const users = [
        {
            id : 1,
            userName : 'White',
            mail : 'white1834@gmail.com'
        },
        {
            id : 2,
            userName : 'Bean',
            mail : 'Bean0805@naver.com'
        },
        {
            id : 3,
            userName : 'bsm',
            mail : 'bsm0104@naver.com'
        }
    ];
    const nextId = useRef(4);
    const onCreate = () => {
        setInputs({
            userName: '',
            email: ''
        });
        nextId.current += 1;
      // console.log(nextId);
    };
    return(
        <>
            <CreateUser
                userName={userName}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} />
            {/*<button onClick={onCreate}>useRef</button>*/}
            {/* 주석 주석 주석 */}
            {/*<UserList users = {users}/>*/}
            {/*<InputSample />*/}
            {/*<Counter/>*/}
            {/*<Wrapper>*/}
            {/*    <Hello name="react"/>*/}
            {/*</Wrapper>*/}
            {/*<Hello name="react"/>*/}
            {/*<Hello name="react" color="red" isSpecial={true}/>*/}
            {/*<Hello isSpecial/>*/}
            {/*<div style={style}>{name}</div>*/}
            {/*<div className={"cssClass"}>className</div>*/}
        </>
    );
}

export default App;
