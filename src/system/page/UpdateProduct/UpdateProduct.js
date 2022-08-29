import { update } from 'lodash';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductByIdService, updateProductService } from 'services/ProductService';
import './UpdateProduct.scss'
// import { convertBase64 } from 'utils/CommonUtil';
import { convertBase64 } from 'utils/CommonUtil';
// import { getProductByIdService } from 'services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductService } from 'services/ProductService';
import { fetchDataFinished, fetchDataStart } from 'redux/actions';

const handleOnChangInput = () => {

}
function UpdateProduct() {
    const [CPUCache, setCPUCache] = useState("");
    const [CPUSpead, setCPUSpead] = useState("");
    const [CPUType, setCPUType] = useState("");
    const [barteryInfo, setBarteryInfo] = useState("");
    const [brandData, setBrandData] = useState("");
    const [brandId, setBrandId] = useState("");
    const [busRam, setBusRam] = useState("");
    const [charger, setCharger] = useState("");

    const [graphicsCard, setGraphicsCard] = useState("");
    const [graphicsMemory, setGraphicsMemory] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [memory, setMemory] = useState("");
    const [image4, setImage4] = useState("");
    const [name, setName] = useState("");
    const [numberOfDrives, setNumberOfDrives] = useState("");
    const [operatingSystem, setOperatingSystem] = useState("");
    const [prototypeComunication, setPrototypeComunication] = useState("");
    const [ramMemory, setRamMemory] = useState("");
    const [ramType, setRamType] = useState("");
    const [screenTechnology, setScreenTechnology] = useState("");
    const [sizeScreen, setSizeScreen] = useState("");
    const [touchScreen, setTouchScreen] = useState("");
    const [turboMaxSpeed, setTurboMaxSpeed] = useState("");
    const [useTime, setUseTime] = useState("");
    const [weight, setWeight] = useState("");
    const [priViewImg1, setpriViewImg1] = useState('');
    const [priViewImg2, setpriViewImg2] = useState('');
    const [priViewImg3, setpriViewImg3] = useState('');
    const [priViewImg4, setpriViewImg4] = useState('');


    const search = useLocation().search;

    const id = new URLSearchParams(search).get('id') ? new URLSearchParams(search).get('id') : null;
    const type = new URLSearchParams(search).get('type')



    const accessToken = useSelector(state => state.user.accessToken);
    const dispatch = useDispatch();
    const getProductById = async (id) => {
        dispatch(fetchDataStart());
        const res = await getProductByIdService(id);
        console.log(res);
        if (res && res.errCode === 0) {
            setBrandId(res.data.brandId);
            setImage1(res.data.image1);
            setpriViewImg1(res.data.image1);
            setImage2(res.data.image2);
            setpriViewImg2(res.data.image2);
            setImage3(res.data.image3);
            setpriViewImg3(res.data.image3);
            setImage4(res.data.image4);
            setpriViewImg4(res.data.image4);
            setName(res.data.name);

        }
        dispatch(fetchDataFinished());
    }
    useEffect(() => {
        if (type === "update") {

            getProductById(id)
        }

    }, [id]);
    const handleOnChangInput = async (e, type) => {
        switch (type) {

            case "IMG1":
                {
                    const data = e.target.files;
                    const file = data[0];
                    if (file) {
                        let base64 = await convertBase64(file);
                        let objURL = URL.createObjectURL(file);
                        setImage1(base64);
                        setpriViewImg1(objURL)
                    }
                    break;
                }
            case "IMG2":
                {
                    const data = e.target.files;
                    const file = data[0];
                    if (file) {
                        let base64 = await convertBase64(file);
                        let objURL = URL.createObjectURL(file);
                        setImage2(base64);
                        setpriViewImg2(objURL)
                    }
                    break;
                }
            case "IMG3":
                {
                    const data = e.target.files;
                    const file = data[0];
                    if (file) {
                        let base64 = await convertBase64(file);
                        let objURL = URL.createObjectURL(file);
                        setImage3(base64);
                        setpriViewImg3(objURL)
                    }
                    break;
                }
            case "IMG4":
                {
                    const data = e.target.files;
                    const file = data[0];
                    if (file) {
                        let base64 = await convertBase64(file);
                        let objURL = URL.createObjectURL(file);
                        setImage4(base64);
                        setpriViewImg4(objURL)
                    }
                    break;
                }
            case "name":
                {
                    setName(e.target.value);
                    break;
                }

            case "brandId":
                {
                    setBrandId(e.target.value);
                    break;
                }

            default:
                {
                    break;
                }
        }
    }

    const handleUpdateProduct = async () => {
        dispatch(fetchDataStart());
        await updateProductService(accessToken, {
            brandId: brandId,
            id: id,
            name: name,
            priViewImg1: priViewImg1,
            priViewImg2: priViewImg2,
            priViewImg3: priViewImg3,
            priViewImg4: priViewImg4,
            image1: image1,
            image2: image2,
            image3: image3,
            image4: image4,




        })
        dispatch(fetchDataFinished());
    }


    const handleCreateProduct = async () => {

        let res = await createNewProductService(accessToken, {
            brandId: brandId,
            name: name,
            priViewImg1: priViewImg1,
            priViewImg2: priViewImg2,
            priViewImg3: priViewImg3,
            priViewImg4: priViewImg4,
            image1: image1,
            image2: image2,
            image3: image3,
            image4: image4,




        });
        if (res && res.errCode === 0) {
            setBrandId('');
            setImage1('');
            setpriViewImg1('');
            setImage2('');
            setpriViewImg2('');
            setImage3('');
            setpriViewImg3('');
            setImage4('');
            setpriViewImg4('');
            setName('');
        }
    }
    return (<div className="containerUpdateProduct">

        <h2 className="titleUpdateProduct">THÊM SẢN PHẨM</h2>
        <div className='listTitle'>
            <div className='ItemDetailWrap'>
                <label className='item' >Ảnh Sản Phẩm 1</label>
                <input type="file" onChange={(e) => handleOnChangInput(e, "IMG1")}></input>
                {priViewImg1 && <img className='priviewimg' src={priViewImg1} />}
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Ảnh Sản Phẩm 2</label>
                <input type="file" onChange={(e) => handleOnChangInput(e, "IMG2")}></input>
                {priViewImg2 && <img className='priviewimg' src={priViewImg2} />}
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Ảnh Sản Phẩm 3</label>
                <input type="file" onChange={(e) => handleOnChangInput(e, "IMG3")}></input>
                {priViewImg3 && <img className='priviewimg' src={priViewImg3} />}
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Ảnh Sản Phẩm 4</label>
                <input type="file" onChange={(e) => handleOnChangInput(e, "IMG4")}></input>
                {priViewImg4 && <img className='priviewimg' src={priViewImg4} />}
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Tên Sản Phẩm</label>
                <textarea onChange={(e) => handleOnChangInput(e, "name")} value={name}></textarea>
            </div>

            <div className='ItemDetailWrap'>


                <div className='create'>

                    {
                        type === "create" ?

                            <button className='createProduct' onClick={() => handleCreateProduct()} >Tạo</button> :
                            <button className='createProduct' onClick={() => handleUpdateProduct()}>Lưu Thay Đổi</button>
                    }
                </div>

            </div>

        </div>

    </div>);
}

export default UpdateProduct;