import React, {useState, useRef} from "react";

function InputSample(index){
    const [inputs, setInputs] = useState({name : '', nickName : ''});
    const {name, nickName} = inputs;
    const nameInput = useRef();

    const onChange = e => {
        const {name, value} = e.target;
        setInputs(
            {...inputs, // 기존의 input 객체를 복사
            [name] : value}
        );
        console.log(e);
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickName: ''
        });
        nameInput.current.focus();
    };
    return (
      <div>
          <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
          <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} />
         {/* <input onChange={onChange} value={text}/>*/}
          <button onClick={onReset}>초기화</button>
          <div>
              <b>값: </b>
              {name} ({nickName})
          </div>
      </div>
    );
}

export default InputSample;
