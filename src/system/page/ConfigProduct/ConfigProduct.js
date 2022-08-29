import { useEffect, useState } from "react";
import { getConfigByProductIdService } from "services/ProductService";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './ConfigProduct.scss'
import { useDispatch, useSelector } from "react-redux";
import { deleteConfigService } from "services/ProductService";
import { fetchDataFinished, fetchDataStart } from "redux/actions";

// 
function ConfigProduct() {
    const [configProduct, setConfigProduct] = useState([])
    const dispatch = useDispatch();
    const getConfigByProductId = async (id) => {
        dispatch(fetchDataStart());
        const res = await getConfigByProductIdService(id);

        if (res.errCode == 0) {
            setConfigProduct(res.data)
        }
        dispatch(fetchDataFinished());


    }
    const search = useLocation().search;

    const id = new URLSearchParams(search).get('id');
    // const type = new URLSearchParams(search).get('type')
    useEffect(() => {
        getConfigByProductId(id);
    }, [id])
    console.log("configProduct", configProduct)
    const accessToken = useSelector(state => state.user.accessToken);
    const handleDeleteConfig = async (configId) => {
        const res = await deleteConfigService(accessToken, configId);
        if (res && res.errCode === 0) {
            getConfigByProductId(id);
        }



    }
    return (<div className="containerConfigProduct">
        <Link to={`/system/update-config?productId=${id}&type=create`}>Tạo</Link>
        {configProduct.map((item, index) => {
            return (<div>

                <ul key={item.id}>
                    <li>Cấu hình {index}</li>
                    <li>Bộ nhớ Ram: {item.ramMemory}</li>
                    <li>Bộ nhớ ổ cứng: {item.memory}</li>
                    <li>Màn hình: {item.screenTechnology}</li>
                    <li>Màn hình cảm ứng: {item.touchScreen}</li>
                    <li>Giảm giá: {item.discount}</li>
                </ul>
                <button onClick={() => handleDeleteConfig(item.id)}>Xóa</button>
                <Link to={`/system/update-config?productId=${id}&type=update&id=${item.id}`}>Sửa</Link>

            </div>)
        })}
    </div>);
}

export default ConfigProduct;