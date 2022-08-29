import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { default as axios } from '../utils/axios';
import { refreshToken } from './UserService';
const createNewPost = async (accessToken, data) => {
    try {

        const decode = jwtDecode(accessToken);
        let res;
        const date = new Date();
        if (decode.exp > date.getTime() / 1000 - 50400) {

            res = await axios.post(`/api/create-new-post`, { ...data }, {
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
                res = await axios.post(`/api/create-new-post`, { ...data }, {
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
const updatePost = async (accessToken, data) => {
    try {
        const decode = jwtDecode(accessToken);
        let res;
        const date = new Date();
        if (decode.exp > date.getTime() / 1000 - 50400) {

            res = await axios.put(`/api/update-post`, { ...data }, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            if (res && res.errCode === 0) {
                toast.success('Cập nhật thành công!');
            } else {
                toast.error('Cập nhật thất bại!');
            }

        } else {
            const auth = await refreshToken(decode.id);
            if (auth && auth.errCode === 0) {
                res = await axios.put(`/api/update-post`, { ...data }, {
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
const getAllPostService = async (page, size) => {
    try {
        const res = await axios.get(`/api/get-all-post?page=${page}&size=${size}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
const getPostService = async (page, size, type) => {
    try {
        const res = await axios.get(`/api/get-post?page=${page}&size=${size}&typeId=${type}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
const getNewPostService = async (page, size) => {
    try {
        const res = await axios.get(`/api/get-post?page=${page}&size=${size}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
const getPostByIdService = async (id) => {
    try {
        const res = await axios.get(`/api/get-post-by-id?id=${id}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
const deletePostService = async (accessToken, id) => {
    try {
        const decode = jwtDecode(accessToken);
        let res;
        const date = new Date();
        if (decode.exp > date.getTime() / 1000 - 50400) {

            res = await axios.delete(`/api/delete-post?id=${id}`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });

        } else {
            const auth = await refreshToken(decode.id);
            if (auth && auth.errCode === 0) {
                res = await axios.delete(`/api/delete-post?id=${id}`, {
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

export { createNewPost, getAllPostService, updatePost, deletePostService, getPostService, getNewPostService, getPostByIdService }