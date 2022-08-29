import { default as axios } from '../utils/axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

import { refreshToken } from './UserService';
const getAllProduct = async (page, size) => {
  try {
    const res = await axios.get(`/api/get-product?page=${page}&size=${size}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getSearchResultService = async (data, page, size) => {
  try {
    const res = await axios.get(`/api/search-product?q=${data}&page=${+page}&size=${+size}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const getSearchResultByNameService = async (data, page, size) => {
  try {
    const res = await axios.get(`/api/get-product-by-name?q=${data}&page=${+page}&size=${+size}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getProductByIdService = async (id) => {
  try {
    const res = await axios.get(`/api/get-product-by-id?id=${id}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const createNewProductService = async (accessToken, data) => {
  try {

    const decode = jwtDecode(accessToken);
    let res;
    const date = new Date();
    if (decode.exp > date.getTime() / 1000 - 50400) {
      res = await axios.post(`/api/create-new-product`, { ...data }, {
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

const getConfigDiscountService = async (limit) => {
  try {
    const res = await axios.get(`/api/get-config-discount?limit=${limit}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const getConfigByProductIdService = async (id) => {
  try {
    const res = await axios.get(`/api/get-config-by-product-id?productId=${id}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const createConfigProductService =
  async (accessToken, data) => {
    try {

      const decode = jwtDecode(accessToken);
      let res;
      const date = new Date();
      if (decode.exp > date.getTime() / 1000 - 50400) {

        res = await axios.post(`/api/create-config`, { ...data }, {
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
          res = await axios.post(`/api/create-config`, { ...data }, {
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
const getConfigBytIdService = async (id) => {
  try {
    const res = await axios.get(`/api/get-config-by-id?id=${id}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const updateProductService =
  async (accessToken, data) => {
    try {

      const decode = jwtDecode(accessToken);
      let res;
      const date = new Date();
      if (decode.exp > date.getTime() / 1000 - 50400) {

        res = await axios.put(`/api/update-product`, { ...data }, {
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
          res = await axios.put(`/api/update-product`, { ...data }, {
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
const updateConfigService =
  async (accessToken, data) => {
    try {

      const decode = jwtDecode(accessToken);
      let res;
      const date = new Date();
      if (decode.exp > date.getTime() / 1000 - 50400) {

        res = await axios.put(`/api/update-config`, { ...data }, {
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
          res = await axios.put(`/api/update-config`, { ...data }, {
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
const deleteProductService = async (accessToken, id) => {
  try {
    const decode = jwtDecode(accessToken);
    let res;
    const date = new Date();
    if (decode.exp > date.getTime() / 1000 - 50400) {

      res = await axios.delete(`/api/delete-product?id=${id}`, {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });

    } else {
      const auth = await refreshToken(decode.id);
      if (auth && auth.errCode === 0) {
        res = await axios.delete(`/api/delete-product?id=${id}`, {
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
const deleteConfigService = async (accessToken, id) => {
  try {
    const decode = jwtDecode(accessToken);
    let res;
    const date = new Date();
    if (decode.exp > date.getTime() / 1000 - 50400) {

      res = await axios.delete(`/api/delete-config?id=${id}`, {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });

    } else {
      const auth = await refreshToken(decode.id);
      if (auth && auth.errCode === 0) {
        res = await axios.delete(`/api/delete-config?id=${id}`, {
          headers: {
            Authorization: 'Bearer ' + accessToken
          }
        });
      }

    }
    return res;

    return res;
  } catch (error) {
    console.log(error);
  }
}

export { deleteProductService, deleteConfigService, updateConfigService, updateProductService, getConfigBytIdService, createConfigProductService, getAllProduct, getSearchResultService, getProductByIdService, getSearchResultByNameService, createNewProductService, getConfigDiscountService, getConfigByProductIdService };
