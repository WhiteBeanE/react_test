import {useNavigate, useNavigatei} from "react-router-dom";

export default function Main(){
    const navigate = useNavigate();

    const goToMyPage = () => {
        navigate("/mypage");
    }
    const goToLogin = () => {
        navigate("/login");
    }
    return (
      <div>
          <p>메인 페이지 입니다</p>
          <br/>
          <button onClick={goToMyPage}>마이페이지</button>
          <br/>
          <button onClick={goToLogin}>로그인</button>
      </div>
    );
}