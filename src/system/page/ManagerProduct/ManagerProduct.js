import { deleteProductService, getAllProduct } from "services/ProductService";
import { useEffect, useState } from 'react';
import Pagination from '@atlaskit/pagination';
import './ManagerProduct.scss'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";
const handleChangeProduct = () => {

}

const handleConfigProduct = () => {

}
const handleCreateProduct = () => {

}
const createPageArr = (pages) => {
    let pageArr = [];
    for (let i = 1; i <= pages; i++) {
        pageArr.push(i);
    }
    return pageArr;
}

function ManagerProduct() {
    const accessToken = useSelector(state => state.user.accessToken);
    const handleDeleteProduct = async (id) => {
        const res = await deleteProductService(accessToken, id);
        if (res && res.errCode === 0) {
            getProduct(currentPages, 5);
        }



    }

    const [currentListproduct, setListProduct] = useState([]);
    const [currentPages, setCurrentPages] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const dispatch = useDispatch();
    const getProduct = async (page, size) => {
        dispatch(fetchDataStart());
        const res = await getAllProduct(page, size);
        console.log("res", res)
        if (res && res.errCode === 0) {
            setListProduct([...res.data.rows]);
            setTotalPages(Math.ceil(res.data.count / size));

        }
        dispatch(fetchDataFinished());

    }
    useEffect(() => {
        getProduct(currentPages, 5);
    }, [currentPages]);

    return (
        <div className="containerManager">


            <div className='table_data'>
                <h3 className='title_table'>BẢNG DỮ LIỆU QUẢN LÍ SẢN PHẨM</h3>

                <table>
                    <thead>
                        <tr>
                            <th className='title'>TIÊU ĐỀ</th>
                            <th className='action'>THAO TÁC</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentListproduct.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td className='title_postMain'>{item.name}

                                        </td>

                                        <td className='container_tools'>
                                            <button className="del" onClick={() => handleDeleteProduct(item.id)}>Xoá</button>

                                            <Link to={`/system/config-product?id=${item.id}`}><button className="config" onClick={() => handleConfigProduct(item)}>Cấu hình</button></Link>
                                            <Link to={`/system/update-product?id=${item.id}&type=update`}>  <button className="fix" onClick={() => handleChangeProduct(item)}>Sửa</button></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <Link className="link-create" to={`/system/update-product?type=create`}> <button className="create" onClick={() => handleCreateProduct()}>Tạo</button></Link>
                <div className='Pagination_direction'>

                    <Pagination
                        pages={[...createPageArr(totalPages)]}
                        max={totalPages >= 10 ? 8 : totalPages}
                        value={currentPages}
                        onChange={(e, page) => setCurrentPages(page)}
                        style={{ fontSize: '16px' }}
                    />
                </div>

            </div>
        </div>);
}

export default ManagerProduct;