import React from "react";

function User({user}){
    return(
      <div>
          <b>{user.userName}</b> <span>({user.mail})</span>
      </div>
    );
}
function UserList({users}) {
    // const users = [
    //     {
    //         id : 1,
    //         userName : 'White',
    //         mail : 'white1834@gmail.com'
    //     },
    //     {
    //         id : 2,
    //         userName : 'Bean',
    //         mail : 'Bean0805@naver.com'
    //     },
    //     {
    //         id : 3,
    //         userName : 'bsm',
    //         mail : 'bsm0104@naver.com'
    //     }
    // ];
    return (
        <div>
            <div>
                {users.map(user =>
                    // 리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야함
                    // key 값은 각 원소들마다 가지고 있는 고유값으로 설정
                    <User user={user} key={user.id} />
                )}
                <br/>
            </div>
            {/*<div>*/}
            {/*    {users.map((user, index) =>*/}
            {/*        // 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용*/}
            {/*        <User user={user} key={index} />*/}
            {/*    )}*/}
            {/*    <br/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <User user={users[0]}/>*/}
            {/*    <User user={users[1]}/>*/}
            {/*    <User user={users[2]}/>*/}
            {/*    <br/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <b>{users[0].userName}</b> <span>({users[0].mail})</span>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <b>{users[1].userName}</b> <span>({users[1].mail})</span>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <b>{users[2].userName}</b> <span>({users[2].mail})</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default UserList;