import React, {useEffect} from "react";

function User({user, onRemove, onToggle}){
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        console.log(user);
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
            console.log(user);
        };
    }, [user]);
    return(
      <div>
          <b
              style={{
              cursor: 'pointer',
              color: user.active ? 'green' : 'red'
          }} onClick={() => onToggle(user.id)}>{user.userName}
          </b>
          <span>({user.email})</span>
          <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
}
function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            <div>
                {users.map(user =>
                    // 리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야함
                    // key 값은 각 원소들마다 가지고 있는 고유값으로 설정
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
                )}
                <br/>
            </div>
            {/*<div>*/}
            {/*    {users.map((user, index) =>*/}
            {/*        // 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용*/}
            {/*        <User user={user} key={index} />*/}
            {/*    )}*/}
            {/*    <br/>*/}
        </div>
    );
}

export default UserList;