import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
export default function Login(){
    const navigate = useNavigate();
    const [users, setUsers] = useState({
        memberId : '',
        password : ''
    });
    const {memberId, password} = users;
    const loginUrl = 'http://localhost:8585/jwt/login';
    const setUserInfoToCookie =  (authorizataion) => {
        const expiresHours = 5;
        const expirationDate = new Date(new Date().getTime() + expiresHours * 60 * 60 * 1000);
        const decodeJwt = jwt_decode(authorizataion);
        Cookies.set("jwt", authorizataion, {expires : expirationDate});
        Cookies.set("memberId", decodeJwt.userName, {expires : expirationDate});

    }
    const login = async () => {
        try {
            const response = await axios.post(loginUrl,
                {
                memberId: users.memberId,
                password: users.password
                }
            );
            if(response.status === 200){
                console.log(response.headers['authorization']);
                const authorization = response.headers['authorization'];
                setUserInfoToCookie(authorization);
                console.log(Cookies.get("jwt"));
                console.log(Cookies.get("memberId"));
            }
        } catch (e) {
            alert('로그인 실패')
        }
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        setUsers({
            ...users,
        [name] : value
        });
    }
    return (
        <div>
            <p>로그인</p>
            <input
                name="memberId"
                value={memberId}
                onChange={onChange}
                placeholder="아이디"
            />
            <input
                name="password"
                value={password}
                onChange={onChange}
                placeholder="비밀번호"
                type="password"
            />
            <button onClick={login}>로그인</button>
        </div>
    );
}