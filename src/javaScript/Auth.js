import {useEffect, useLayoutEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";

export default function(SpecificComponent, option, authorization = null){
    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/");
    }
    const jwtCheck = async () => {
        try {
            const response = await axios.get("http://localhost:8585/jwt/user", {
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
            console.log('Component has rendered');
        }, []);
        useLayoutEffect(() => {
            const checkJwt = async () => {
                console.log('Component will render soon');
                const isJwtValid = await jwtCheck() === 200 ? true : false;
                console.log(isJwtValid);
                if (!isJwtValid) {
                    if (option) {
                        navigate("/login");
                    }
                }
            };
            checkJwt();
        }, []);
        return <SpecificComponent/>
    }
    return AuthenticationCheck;
}