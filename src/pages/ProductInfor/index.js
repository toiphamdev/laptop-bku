import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getProductByIdService } from "services/ProductService";
import { formatCash } from "utils/customizeString";
import _ from "lodash";
import './ProductInfor.scss'
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";
import Modal from "react-modal/lib/components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const customStyles = {

  opacity: "0.8",


  content: {
    // top: '50%',
    // inset: 'unset',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // contentLabel: {
    //   color: 'red'
    // },
    // backgroundColor: "red",
    // marginTop: '300px',
    // overFlowY: "scrolls",
    width: "50%",

    overflow: "hidden",
    margin: "60px auto -25px",
    border: "none",

    boxShadow: "rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset",


  },

};
function ProductInfor() {
  const dataURL = useLocation().pathname;
  let id = useParams(dataURL).id;
  const [currentId, setCurrentId] = useState('');
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentConfig, setCurrentConfig] = useState({});
  const [currentImage, setCurrentImage] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log("currentProduct", currentProduct)
  useEffect(() => {
    setCurrentId(id)
  }, [id]);
  useEffect(() => {
    if (currentId) {
      getProductById(currentId);
    }
  }, [currentId])

  const dispatch = useDispatch();

  const getProductById = async (currentId) => {
    dispatch(fetchDataStart());
    let res = await getProductByIdService(currentId);
    if (res && res.errCode === 0) {
      setCurrentProduct(res.data);
      setCurrentConfig(res.data.configData[0]);
      setCurrentImage(res.data.image1)

    }
    dispatch(fetchDataFinished());
  }
  const handleOnclickConfig = (config) => {
    setCurrentConfig(config);
  }
  const openModal = () => {
    setIsOpen(true);
  }


  const closeModal = () => {
    setIsOpen(false);
  }
  const a = ">>";
  return <div className='containerProduct'>
    <h2 className='introduce_Product'>TH??NG TIN CHI TI???T S???N PH???M</h2>

    <div className="wrapTitleLaptop">
      <h2 className="titleLaptop">{currentProduct.brandId} {currentProduct.name}/ {currentConfig && currentConfig.CPUType}/ Ram {currentConfig && currentConfig.ramMemory}/ {currentConfig && currentConfig.memory}/{currentConfig && currentConfig.sizeScreen}</h2>
      <hr></hr>
    </div>


    <div className='container_itemProduct'>

      <div className='image_Infor'>
        <img src={currentImage} className='image_Infor-item'></img>
        <div className="list-image">
          <img src={currentProduct.image1} onClick={() => setCurrentImage(currentProduct.image1)} className='list-image-item' />
          <img src={currentProduct.image2} onClick={() => setCurrentImage(currentProduct.image2)} className='list-image-item' />
          <img src={currentProduct.image3} onClick={() => setCurrentImage(currentProduct.image3)} className='list-image-item' />
          <img src={currentProduct.image4} onClick={() => setCurrentImage(currentProduct.image4)} className='list-image-item' />
        </div>
      </div>
      <ul className='container_InforDetail'>

        <span className='inforPrice itemInfor '>{!_.isEmpty(currentConfig) ? `${formatCash(currentConfig.price)} VN??` : '??ang c???p nh???t'}</span>


        <h2 className='cpuInfor itemInfor'> {!_.isEmpty(currentConfig) ? `${currentConfig.CPUType} ${currentConfig.CPUSpead} ${currentConfig.turboMaxSpeed}` : '??ang c???p nh???t'} <br /> </h2>
        <h2 className='ramInfor itemInfor'> {!_.isEmpty(currentConfig) ? `${currentConfig.ramMemory} ${currentConfig.ramType}` : '??ang c???p nh???t'}</h2>
        <h2 className='memory itemInfor'>{!_.isEmpty(currentConfig) ? currentConfig.memory : '??ang c???p nh???t'}</h2>
        <h2 className='graphicsCard itemInfor'>{!_.isEmpty(currentConfig) ? currentConfig.graphicsCard : '??ang c???p nh???t'}</h2>
        <h2 className='sizeScreen itemInfor'>{!_.isEmpty(currentConfig) ? `${currentConfig.sizeScreen} ${currentConfig.touchScreen}` : '??ang c???p nh???t'}</h2>
        <h2 className='operatingSystem itemInfor'>{!_.isEmpty(currentConfig) ? currentConfig.operatingSystem : '??ang c???p nh???t'}</h2>

        <h3 className="detailConfig" onClick={() => setIsOpen(true)}>Xem c???u h??nh chi ti???t {a} </h3>
        {/* <p className='descriptionInfor itemInfor'>{currentProduct.description}</p> */}

        <div className="ContactBuyProduct">
          <Link className="buy" to='/contact'>
            <button className="buy-btn">
              MUA NGAY
            </button>
          </Link>
          <Link className="installment" to='/contact'>
            <button className="installment-btn">
              TR??? G??P
            </button>
          </Link>



        </div>
        <h2 className="chooseConfig">C???U H??NH T??Y CH???N</h2>
        <div className="container_config">

          {currentProduct.configData && currentProduct.configData.map(config => {
            return (

              <button key={config.id} onClick={() => handleOnclickConfig(config)} className="item_config">
                <span >{`${config.CPUType}/${config.ramMemory}/${config.memory}/${config.sizeScreen}`}</span>
                <br />
                <span>{config.price} VND</span>
              </button>
            )
          })}
        </div>
      </ul>

    </div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"



    >
      <div className="containerModal">

        <span onClick={closeModal} className="closeTabIcon">
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
        {/* </button> */}
        <div className="containerContent" >
          {/* <div className="line"></div> */}
          <h3 className="Content-Title">CPU</h3>
          <div>
            <span className="contentLabel">Lo???i CPU : </span>
            <span className="contentLabel">{currentConfig && currentConfig.CPUType}</span>
          </div>
          <div>
            <span className="contentLabel">T???c ????? CPU : </span>
            <span className="contentLabel">{currentConfig && currentConfig.CPUSpead}</span>
          </div>
          <div>
            <span className="contentLabel">T???c ????? t???i ??a Turbo : </span>
            <span className="contentLabel">{currentConfig && currentConfig.turboMaxSpeed}</span>
          </div>
          <div>
            <span className="contentLabel">B??? nh??? ?????m CPU : </span>
            <span>{currentConfig && currentConfig.CPUCache}</span>
          </div>
        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">RAM</h3>
          <div>
            <span className="contentLabel">B??? nh??? RAM : </span>
            <span className="contentLabel">{currentConfig && currentConfig.ramMemory}</span>
          </div>
          <div>
            <span className="contentLabel">Lo???i RAM : </span>
            <span>{currentConfig && currentConfig.ramType}</span>
          </div>
          <div>
            <span className="contentLabel">BUS RAM : </span>
            <span>{currentConfig && currentConfig.busRam}</span>
          </div>
        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">??? c???ng</h3>
          <div>
            <span className="contentLabel">S???? l??????ng ???? c????ng : </span>
            <span>{currentConfig && currentConfig.numberOfDrives}</span>
          </div>
          <div>
            <span className="contentLabel">Dung l?????ng : </span>
            <span>{currentConfig && currentConfig.memory}</span>
          </div>

        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">??? c???ng SSD</h3>
          <div>
            <span className="contentLabel">Dung l?????ng</span>
            <span>{currentConfig && currentConfig.memory}</span>
          </div>
        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">Card ????? h???a</h3>
          <div>
            <span className="contentLabel">Card ????? h???a : </span>
            <span>{currentConfig && currentConfig.graphicsCard}</span>
          </div>
          <div>

            <span className="contentLabel">B??? nh??? ????? h???a : </span>
            <span>{currentConfig && currentConfig.graphicsMemory}</span>
          </div>

        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">M??n h??nh</h3>
          <div>
            <span className="contentLabel">K??ch th?????c m??n h??nh : </span>
            <span>{currentConfig && currentConfig.sizeScreen}</span>
          </div>
          <div>

            <span className="contentLabel">M??n h??nh c???m ???ng : </span>
            <span>{currentConfig && currentConfig.touchScreen}</span>
          </div>
          <div>

            <span className="contentLabel">C??ng ngh??? m??n h??nh : </span>
            <span>{currentConfig && currentConfig.screenTechnology}</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="containerContent">
          <h3 className="Content-Title">PIN/Battery</h3>
          <div>
            <span className="contentLabel">Th??ng tin Pin : </span>
            <span>{currentConfig && currentConfig.barteryInfo}</span>
          </div>
          <div>

            <span className="contentLabel">Th???i gian s??? d???ng th?????ng : </span>
            <span>{currentConfig && currentConfig.useTime}</span>
          </div>
          <div>

            <span className="contentLabel">B??? s???c : </span>
            <span>{currentConfig && currentConfig.charger}</span>
          </div>
        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">H??? ??i???u h??nh</h3>
          <div>
            <span className="contentLabel">H??? ??i???u h??nh : </span>
            <span className="contentLabel">{currentConfig && currentConfig.operatingSystem}</span>
          </div>

        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">Tr???ng l?????ng</h3>
          <div>
            <span className="contentLabel">Tr???ng l?????ng(kg) : </span>
            <span className="contentLabel">{currentConfig && currentConfig.weight}</span>
          </div>

        </div>
        <div className="containerContent">
          <div className="line"></div>
          <h3 className="Content-Title">Kh??c</h3>
          <div>
            <span className="contentLabel">C???ng giao ti???p : </span>
            <span className="contentLabel">{currentConfig && currentConfig.prototypeComunication}</span>
          </div>

        </div>
      </div>

    </Modal>
  </div>
}


export default ProductInfor;

