import {useEffect, useState} from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
export default function(){
    const [waitList, setWaitList] = useState([]);
    const loadWaitList = async () => {
        try {
            const response = await axios.get("http://localhost:8585/clinics/진료대기", {
                headers: {
                    Authorization: Cookies.get("jwt")
                }
            });
            if (response.status === 200) {
                const waitList = response.data;
                console.log(waitList);
                setWaitList(waitList);
            }
        } catch (e) {
            alert('못불러 오겠는데요? error: ' + e);
        }
    }
    useEffect(() => {

        async function fetchData() {
            await loadWaitList(); // You can await here if needed
        }
        fetchData();
    }, []);

    return (
        <div>
            <table id="wait-list">
                <caption>대기자 명단</caption>
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>성명</th>
                    </tr>
                </thead>
                <tbody>
                    {waitList.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.patient}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}