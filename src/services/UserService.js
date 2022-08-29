
import { default as axios } from '../utils/axios';


const login = async (data) => {
    try {
        const res = await axios.post(`/api/login`, { ...data }, { withCredentials: true, });

        return res;
    } catch (error) {
        console.log(error);
    }
};
const logout = async (id) => {
    try {
        const res = await axios.post(`/api/logout`, { id: id });

        return res;
    } catch (error) {
        console.log(error);
    }
};
const getAllUser = async () => {
    try {
        const res = await axios.get(`/api/get-all-user`, {
            withCredentials: true
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};
const getAllCode = async (type) => {
    try {
        const res = await axios.get(`/api/get-all-code?type=${type}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const refreshToken = async (id) => {
    try {
        const res = await axios.get(`/api/refresh-token?id=${id}`, {
            withCredentials: true
        });
        return res;
    } catch (error) {
        console.log(error)
    }
}

export { login, getAllUser, getAllCode, refreshToken, logout };