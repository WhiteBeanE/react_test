import {useEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

export default function(SpecificComponent, option){
    const jwtCheck = async () => {
        let response = null;
        try {
            response = await axios.get("http://localhost:8585/jwt/user", {
                headers: {
                    Authorization: Cookies.get("jwt")
                }
            });
            console.log('status : ' + response.status)
            return response.status;
        } catch (e) {
        }
    }
    function AuthenticationCheck(props) {
        useEffect(() => {
            const checkJwt = async () => {
                const isJwtValid = await jwtCheck() === 200 ? true : false;
                console.log(isJwtValid);
                if (!isJwtValid) {
                    if (option) {
                        alert('로그인 안했는데 인증페이지?');
                    }
                }
            };
            checkJwt();
        }, []);
        return <SpecificComponent/>
    }
    return AuthenticationCheck;
}