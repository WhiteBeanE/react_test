import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
export default function Login(){
    const navigate = useNavigate();
    const [users, setUsers] = useState({
        memberId : '',
        password : ''
    });
    const {memberId, password} = users;
    const goToMain = () => {
      navigate("/");
    };
    const loginUrl = 'http://localhost:8585/jwt/login';
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
            <button onClick={goToMain}>메인페이지</button>
            <input
                name="memberId"
                value={memberId}
                onChange={onChange}
                placeholder="아이디"/>
            <input
                name="password"
                value={password}
                onChange={onChange}
                placeholder="비밀번호"/>
            <button onClick={login}>로그인</button>
        </div>
    );
}