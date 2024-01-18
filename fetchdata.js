import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserData from './component/userdata'
import './fetchdata.css';
const API = "https://sheetdb.io/api/v1/m5j5r75cvulsv";

function Fetchdata() {

    const [users, setUsers] = useState([])

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>COLLEGE</th>
                <th>BRANCH</th>
                <th>OPENING RANK</th>
                <th>CLOSING RANK</th>
                <th>QUOTA</th>
                <th>CATEGORY</th>
                <th>TYPE</th>
                <th>SEAT</th>
 
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </>
}
export default Fetchdata;