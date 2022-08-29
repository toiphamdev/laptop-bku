import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBrand, getAllUser, refreshToken } from "services/UserService";
import { toast } from 'react-toastify';

function SystemPage() {
    let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    let userInfo = useSelector(state => state.user.userInfo);
    let navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate(`../login`);
        }
    }, [isLoggedIn]);
    const getUsers = async () => {
        let res = await getAllUser();
    }
    const refreshUserToken = async () => {
        let res = await refreshToken(userInfo.id);
        if (res) {
            toast.success('xong')
        }
    }

    return (
        <>
            <button onClick={getUsers} >getUser</button>
            <button onClick={refreshUserToken} >refreshToken</button>
        </>
    );
}

export default SystemPage;