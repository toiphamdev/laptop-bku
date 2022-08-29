import { update } from 'lodash';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { createConfigProductService, getConfigBytIdService, getProductByIdService, updateConfigService } from 'services/ProductService';

// import { convertBase64 } from 'utils/CommonUtil';
import { convertBase64 } from 'utils/CommonUtil';
// import { getProductByIdService } from 'services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { createNewProductService } from 'services/ProductService';
import { fetchDataFinished, fetchDataStart } from 'redux/actions';


function UpdateConfig() {
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

    const [memory, setMemory] = useState("");
    const [discount, setDiscount] = useState(0);
    const [price, setPrice] = useState(0);




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

    const [typeId, setTypeId] = useState('');


    const search = useLocation().search;

    const id = new URLSearchParams(search).get('id') ? new URLSearchParams(search).get('id') : null;
    const productId = new URLSearchParams(search).get('productId');
    const type = new URLSearchParams(search).get('type');



    const dispatch = useDispatch();
    const getConfigById = async (id) => {
        dispatch(fetchDataStart());
        const res = await getConfigBytIdService(id);
        if (res && res.errCode === 0) {
            setCPUCache(res.data.CPUCache);
            setCPUSpead(res.data.CPUSpead);
            setCPUType(res.data.CPUType);
            setBarteryInfo(res.data.barteryInfo);
            setBrandData(res.data.brandData);
            setBrandId(res.data.brandId);
            setBusRam(res.data.busRam);
            setCharger(res.data.charger);
            setGraphicsCard(res.data.graphicsCard);
            setGraphicsMemory(res.data.graphicsMemory);
            setDiscount(res.data.discount);
            setPrice(res.data.price);
            setMemory(res.data.memory);
            setNumberOfDrives(res.data.numberOfDrives);
            setOperatingSystem(res.data.operatingSystem);
            setPrototypeComunication(res.data.prototypeComunication);
            setRamType(res.data.ramType);
            setScreenTechnology(res.data.screenTechnology);
            setSizeScreen(res.data.sizeScreen);
            setTouchScreen(res.data.touchScreen);
            setTurboMaxSpeed(res.data.turboMaxSpeed);
            setUseTime(res.data.useTime);
            setWeight(res.data.weight);
            setRamMemory(res.data.ramMemory);



        }
        dispatch(fetchDataFinished());
    }
    useEffect(() => {
        if (type === "update") {

            getConfigById(id)
        }

    }, [id]);
    const handleOnChangInput = async (e, type) => {
        dispatch(fetchDataStart());
        switch (type) {



            case "CPUType":
                {
                    setCPUType(e.target.value);
                    break;
                }
            case "CPUSpead":
                {
                    setCPUSpead(e.target.value);
                    break;
                }
            case "TurboMaxSpeed":
                {
                    setTurboMaxSpeed(e.target.value);
                    break;
                }
            case "CPUCache":
                {
                    setCPUCache(e.target.value);
                    break;
                }
            case "RamMemory":
                {
                    setRamMemory(e.target.value);
                    break;
                }
            case "RamType":
                {
                    setRamType(e.target.value);
                    break;
                }
            case "Price":
                {
                    setPrice(e.target.value);
                    break;
                }
            case "Discount":
                {
                    setDiscount(e.target.value);
                    break;
                }
            case "BusRam":
                {
                    setBusRam(e.target.value);
                    break;
                }
            case "NumberOfDrives":
                {
                    setNumberOfDrives(e.target.value);
                    break;
                }
            case "Memory":
                {
                    setMemory(e.target.value);
                    break;
                }
            case "graphicsCard":
                {
                    setGraphicsCard(e.target.value);
                    break;
                }
            case "graphicsMemory":
                {
                    setGraphicsMemory(e.target.value);
                    break;
                }
            case "SizeScreen":
                {
                    setSizeScreen(e.target.value);
                    break;
                }
            case "touchScreen":
                {
                    setTouchScreen(e.target.value);
                    break;
                }
            case "ScreenTechnology":
                {
                    setScreenTechnology(e.target.value);
                    break;
                }
            case "BarteryInfo":
                {
                    setBarteryInfo(e.target.value);
                    break;
                }
            case "UseTime":
                {
                    setUseTime(e.target.value);
                    break;
                }
            case "Charger":
                {
                    setCharger(e.target.value);
                    break;
                }
            case "OperatingSystem":
                {
                    setOperatingSystem(e.target.value);
                    break;
                }
            case "Weight":
                {
                    setWeight(e.target.value);
                    break;
                }
            case "prototypeComunication":
                {
                    setPrototypeComunication(e.target.value);
                    break;
                }

            default:
                {
                    setTypeId(e.target.value);
                    break;
                }
        }
        dispatch(fetchDataFinished());
    }

    const handleUpdateConfigProduct = async () => {
        dispatch(fetchDataStart());
        await updateConfigService(accessToken, {

            id: id,
            CPUType: CPUType,
            CPUSpead: CPUSpead,
            turboMaxSpeed: turboMaxSpeed,
            CPUCache: CPUCache,
            ramMemory: ramMemory,
            ramType: ramType,
            busRam: busRam,
            numberOfDrives: numberOfDrives,
            memory: memory,
            graphicsCard: graphicsCard,
            price: price,
            discount: discount,
            graphicsMemory: graphicsMemory,
            sizeScreen: sizeScreen,
            touchScreen: touchScreen,
            screenTechnology: screenTechnology,
            barteryInfo: barteryInfo,
            useTime: useTime,
            charger: charger,
            operatingSystem: operatingSystem,
            weight: weight,
            prototypeComunication: prototypeComunication,
            productId: productId,
            brandData: brandData,
            brandId: brandId,


        })
        dispatch(fetchDataFinished());
    }
    const accessToken = useSelector(state => state.user.accessToken);
    const handleCreateConfigProduct = async () => {

        let res = await createConfigProductService(accessToken, {
            CPUType: CPUType,
            CPUSpead: CPUSpead,
            turboMaxSpeed: turboMaxSpeed,
            CPUCache: CPUCache,
            ramMemory: ramMemory,
            ramType: ramType,
            busRam: busRam,
            numberOfDrives: numberOfDrives,
            memory: memory,
            graphicsCard: graphicsCard,
            price: price,
            discount: discount,
            graphicsMemory: graphicsMemory,
            sizeScreen: sizeScreen,
            touchScreen: touchScreen,
            screenTechnology: screenTechnology,
            barteryInfo: barteryInfo,
            useTime: useTime,
            charger: charger,
            operatingSystem: operatingSystem,
            weight: weight,
            prototypeComunication: prototypeComunication,
            productId: productId,
            brandData: brandData,
            brandId: brandId,






        });
        if (res && res.errCode === 0) {
            setCPUCache('');
            setCPUSpead('');
            setCPUType('');
            setBarteryInfo('');
            setBrandData('');
            setBrandId('');
            setBusRam('');
            setCharger('');
            setGraphicsCard('');
            setGraphicsMemory('');
            setDiscount("");
            setPrice("");
            setMemory('');
            setRamMemory('')
            setNumberOfDrives('');
            setOperatingSystem('');
            setPrototypeComunication('');
            setRamType('');
            setScreenTechnology('');
            setSizeScreen('');
            setTouchScreen('');
            setTurboMaxSpeed('');
            setUseTime('');
            setWeight('');
        }
    }
    return (<div className="containerUpdateProduct">

        <h2 className="titleUpdateProduct">THÊM CAU HINH</h2>
        <div className='listTitle'>

            <div className='ItemDetailWrap'>
                <label className='item' >Giảm giá (%)</label>
                <textarea onChange={(e) => handleOnChangInput(e, "Discount")} value={discount}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Giá</label>
                <textarea onChange={(e) => handleOnChangInput(e, "Price")} value={price}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Loại CPU</label>
                <textarea onChange={(e) => handleOnChangInput(e, "CPUType")} value={CPUType}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Tốc độ CPU</label>
                <textarea onChange={(e) => handleOnChangInput(e, "CPUSpead")} value={CPUSpead}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Tốc độ tối đa Turbo</label>
                <textarea onChange={(e) => handleOnChangInput(e, "TurboMaxSpeed")} value={turboMaxSpeed}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Bộ nhớ đêm Cpu</label>
                <textarea onChange={(e) => handleOnChangInput(e, "CPUCache")} value={CPUCache}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Bộ nhớ ram</label>
                <textarea onChange={(e) => handleOnChangInput(e, "RamMemory")} value={ramMemory}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Loại ram</label>
                <textarea onChange={(e) => handleOnChangInput(e, "RamType")} value={ramType}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Bus ram</label>
                <textarea onChange={(e) => handleOnChangInput(e, "BusRam")} value={busRam} ></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Số lượng ổ cứng</label>
                <textarea onChange={(e) => handleOnChangInput(e, "NumberOfDrives")} value={numberOfDrives}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Dung lượng</label>
                <textarea onChange={(e) => handleOnChangInput(e, "Memory")} value={memory}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Card đô họa</label>
                <textarea onChange={(e) => handleOnChangInput(e, "graphicsCard")} value={graphicsCard}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Bộ nhớ đồ họa</label>
                <textarea onChange={(e) => handleOnChangInput(e, "graphicsMemory")} value={graphicsMemory}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Kích thước màn hình</label>
                <textarea onChange={(e) => handleOnChangInput(e, "SizeScreen")} value={sizeScreen}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Màn hình cảm ứng</label>
                <textarea onChange={(e) => handleOnChangInput(e, "touchScreen")} value={touchScreen}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Công nghệ màn hình</label>
                <textarea onChange={(e) => handleOnChangInput(e, "ScreenTechnology")} value={screenTechnology}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Thông tin pin</label>
                <textarea onChange={(e) => handleOnChangInput(e, "BarteryInfo")} value={barteryInfo}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Thời gian sử dụng</label>
                <textarea onChange={(e) => handleOnChangInput(e, "UseTime")} value={useTime}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >BỘ sạc</label>
                <textarea onChange={(e) => handleOnChangInput(e, "Charger")} value={charger}></textarea>
            </div>

            <div className='ItemDetailWrap'>
                <label className='item' >Hệ điều hành</label>
                <textarea onChange={(e) => handleOnChangInput(e, "OperatingSystem")} value={operatingSystem}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Trọng lượng</label>
                <textarea onChange={(e) => handleOnChangInput(e, "Weight")} value={weight}></textarea>
            </div>
            <div className='ItemDetailWrap'>
                <label className='item' >Cổng giao tiếp</label>
                <textarea onChange={(e) => handleOnChangInput(e, "prototypeComunication")} value={prototypeComunication}></textarea>

            </div>
            <div className='ItemDetailWrap'>


                <div className='create'>

                    {
                        type === "create" ?

                            <button className='createProduct' onClick={() => handleCreateConfigProduct()} >Tạo</button> :
                            <button className='createProduct' onClick={() => handleUpdateConfigProduct()}>Lưu Thay Đổi</button>
                    }
                </div>

            </div>

        </div>

    </div>);
}

export default UpdateConfig;