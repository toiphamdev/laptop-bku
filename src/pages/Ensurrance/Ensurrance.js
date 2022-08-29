import _ from "lodash";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";
import { getInforCustomByToken } from "services/EnsurranceService";
import './Ensurrance.scss'

function Ensurrance() {
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [result, setResult] = useState({});
    const [isShowResult, setIsShowResult] = useState(false);
    const handleOnClickCheckBtn = async (token) => {
        if (token) {
            dispatch(fetchDataStart());
            let res = await getInforCustomByToken(token);
            if (res && res.errCode === 0) {

                setResult(res.data);
                setToken('');
                setIsShowResult(true);
            }
            dispatch(fetchDataFinished());
        }
    }
    const handleOnChangeInput = (e) => {
        setToken(e.target.value)
    }
    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            // handleOnClickSearchBtn();
            handleOnClickCheckBtn(token);

        }
    }
    return (
        <div className="wrap_ensurrance">


            <div className="container_ensurrance">
                <h2 className="title_ensurrance">KIỂM TRA BẢO HÀNH SẢN PHẨM</h2>
                <div className="search_ensurrance">
                    <input value={token} onChange={e => handleOnChangeInput(e)} className="input_ensurrance" placeholder="Nhập Serial tại đây" onKeyPress={enterPressed.bind(this)} />
                    <button onClick={() => handleOnClickCheckBtn(token)} className="btn_ensurrance">Kiểm tra</button>
                </div>
                {
                    isShowResult &&
                    <>
                        {
                            !_.isEmpty(result) ?
                                <div className="result_ensurrance">
                                    <ul className="result_ensurrance-list">
                                        <li className="result_ensurrance-item">Tên khách hàng: {result.name}</li>
                                        <li className="result_ensurrance-item">Địa chỉ email: {result.email}</li>
                                        <li className="result_ensurrance-item">Số điện thoại : {result.phoneNumber}</li>
                                        <li className="result_ensurrance-item">Ngày mua: {result.purchaseDate}</li>
                                        <li className="result_ensurrance-item">Thời hạn bảo hành: {result.warrantyPeriod}</li>
                                        <li className="result_ensurrance-item">Ngày hết hạn: {result.expiredTime}</li>
                                        <li className="result_ensurrance-item">Sản phẩm đã mua: {result.purchasedProduct}</li>

                                    </ul>
                                </div> :
                                <div className="result_ensurrance">
                                    <h3>Mã không tồn tại</h3>
                                </div>
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default Ensurrance;