import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { default as axios } from '../utils/axios';
import { refreshToken } from './UserService';

const getInforCustomByToken = async (token) => {
    try {
        const res = await axios.get(`/api/get-ensurrance-info?token=${token}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
const getAllEnsurranceService = async (page, size) => {
    try {
        const res = await axios.get(`/api/get-all-ensurrance?page=${page}&size=${size}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};

const createEnsurranceService = async (accessToken, data) => {
    try {

        const decode = jwtDecode(accessToken);
        let res;
        const date = new Date();
        if (decode.exp > date.getTime() / 1000 - 50400) {

            res = await axios.post(`/api/create-ensurrance`, { ...data }, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            if (res && res.errCode === 0) {
                toast.success('Cập nhật thành công!');
            } else {
                toast.error('Cập nhật  thất bại!');
            }

        } else {
            const auth = await refreshToken(decode.id);
            if (auth && auth.errCode === 0) {
                res = await axios.post(`/api/create-ensurrance`, { ...data }, {
                    headers: {
                        Authorization: 'Bearer ' + accessToken
                    }
                });
                if (res && res.errCode === 0) {
                    toast.success('Cập nhật thành công!');
                } else {
                    toast.error('Cập nhật  thất bại!');
                }
            } else {
                toast.warn('Thời gian đăng nhập hết hạn mời bạn đăng nhập lại!');
            }

        }
        return res;
    } catch (error) {
        console.log(error);
    }
};
const deleteEnsurranceService = async (accessToken, id) => {
    try {
        const decode = jwtDecode(accessToken);
        let res;
        const date = new Date();
        if (decode.exp > date.getTime() / 1000 - 50400) {

            res = await axios.delete(`/api/delete-ensurrance?id=${id}`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });

        } else {
            const auth = await refreshToken(decode.id);
            if (auth && auth.errCode === 0) {
                res = await axios.delete(`/api/delete-ensurrance?id=${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + accessToken
                    }
                });
            }

        }
        return res;


    } catch (error) {
        console.log(error);
    }
}
export { deleteEnsurranceService, createEnsurranceService, getInforCustomByToken, getAllEnsurranceService };
