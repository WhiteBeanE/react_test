// 리액트 컴포넌트를 만들 떄 리액트를 불러와주어야 함
import React from "react";

function Hello({color = "blue", name = "WhiteBean", isSpecial = false}) {
    color = isSpecial ? color : "black";

    return  <div style={{color}}>
                {isSpecial && <b>*</b>}ㅎㅇㅎㅇ {name}
            </div>
}

// Hello 라는 컴포넌트를 내보내겠다는 의미
export default Hello;