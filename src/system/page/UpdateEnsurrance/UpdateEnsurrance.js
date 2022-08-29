import { useEffect, useState } from 'react';
import { createEnsurranceService, getAllEnsurranceService } from 'services/EnsurranceService';
import './UpdateEnsurrance.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFinished, fetchDataStart } from 'redux/actions';

function UpdateEnsurrance
    () {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [purchasedProduct, setPurchasedProduct] = useState("");
    const [token, setToken] = useState("");
    const [expiredTime, setExpiredTime] = useState("");
    const [email, setEmail] = useState("");
    const [warrantyPeriod, setWarrantyPeriod] = useState("");
    const [typeId, setTypeId] = useState('');


    const accessToken = useSelector(state => state.user.accessToken);
    const dispatch = useDispatch();
    const handleCreateConfigEnsurrance = async () => {
        dispatch(fetchDataStart());
        const res = await createEnsurranceService(accessToken, {
            name: name,
            phoneNumber: phoneNumber,
            purchaseDate: purchaseDate,
            purchasedProduct: purchasedProduct,
            token: token,
            expiredTime: expiredTime,
            email: email,
            warrantyPeriod: warrantyPeriod,
        })
        if (res && res.errCode === 0) {

            setName('');
            setPhoneNumber('');
            setPurchaseDate('');
            setPurchasedProduct('');
            setToken('');
            setExpiredTime('');
            setEmail('');
            setWarrantyPeriod('');

        }
        dispatch(fetchDataFinished());
    }
    const handleOnChangInput = async (e, type) => {
        switch (type) {

            case "name":
                {
                    setName(e.target.value);

                    break;
                }

            case "phoneNumber":
                {
                    setPhoneNumber(e.target.value);

                    break;
                }
            case "purchaseDate":
                {
                    setPurchaseDate(e.target.value);

                    break;
                }
            case "purchasedProduct":
                {
                    setPurchasedProduct(e.target.value);

                    break;
                }
            case "token":
                {
                    setToken(e.target.value);

                    break;
                }
            case "expiredTime":
                {
                    setExpiredTime(e.target.value);

                    break;
                }
            case "email":
                {
                    setEmail(e.target.value);

                    break;
                }


            case "warrantyPeriod":
                {
                    setWarrantyPeriod(e.target.value);

                    break;
                }


            default:
                {
                    setTypeId(e.target.value);
                    break;
                }
        }
    }

    return (<div className="containerUpdateEnsurrance">

        <div className='ItemDetailWrap'>
            <label className='item' >Tên người mua</label>
            <textarea onChange={(e) => handleOnChangInput(e, "name")} value={name}></textarea>
        </div>
        <div className='ItemDetailWrap'>
            <label className='item' >Sản phẩm đã mua</label>
            <textarea onChange={(e) => handleOnChangInput(e, "purchasedProduct")} value={purchasedProduct}></textarea>
        </div>
        <div className='ItemDetailWrap'>
            <label className='item' >Số điện thoại</label>
            <textarea onChange={(e) => handleOnChangInput(e, "phoneNumber")} value={phoneNumber}></textarea>
        </div>
        <div className='ItemDetailWrap'>
            <label className='item' >Email</label>
            <textarea onChange={(e) => handleOnChangInput(e, "email")} value={email}></textarea>
        </div>
        <div className='ItemDetailWrap'>
            <label className='item' >Ngày mua</label>
            <textarea onChange={(e) => handleOnChangInput(e, "purchaseDate")} value={purchaseDate}></textarea>
        </div>
        <div className='ItemDetailWrap'>
            <label className='item' >Ngày hết hạn</label>
            <textarea onChange={(e) => handleOnChangInput(e, "expiredTime")} value={expiredTime}></textarea>
        </div>
        <div className='ItemDetailWrap'>
            <label className='item' >Thời gian bảo hành</label>
            <textarea onChange={(e) => handleOnChangInput(e, "warrantyPeriod")} value={warrantyPeriod}></textarea>
        </div>
        <div className='ItemDetailWrap'>
            <label className='item' >Mã máy(serial)</label>
            <textarea onChange={(e) => handleOnChangInput(e, "token")} value={token}></textarea>
        </div>
        <div className='ItemDetailWrap'>


            <div className='create'>

                {


                    <button className='createProduct' onClick={() => handleCreateConfigEnsurrance()} >Tạo</button>

                }
            </div>

        </div>

    </div>);
}

export default UpdateEnsurrance;