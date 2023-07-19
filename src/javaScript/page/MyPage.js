import {useNavigate} from "react-router-dom";

export default function MyPage(){
    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/");
    }
    return (
        <div>
            <p>마이페이지 입니다.</p>
            <br/>
            <button onClick={goToMain}>메인</button>
        </div>
    );
}