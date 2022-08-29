import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useDispatch } from 'react-redux';
import {
  faMagnifyingGlass,
  faComputer,
  faScrewdriverWrench,

  faNewspaper,
  faPhoneVolume,

  faFolderOpen,
  faLaptopMedical,
  faFileLines

} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ItemHeader from './ItemHeader';
import './Header.scss';
import image from '../../../../access/image/LOGO_OFFICIAL.png';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import { useState } from 'react';
function Header(props) {
  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const handleOnChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  // console.log(searchInput)
  const handleOnClickSearchBtn = () => {
    if (searchInput) {
      navigate(`../search?q=${searchInput}`, { replace: true });
    }
  };
  const handleRedirectHome = () => {
    navigate(`../`);
  }
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      handleOnClickSearchBtn();

    }
  }

  // const keydownHandler = (e) => {
  //   if (e.keyCode === 13) this.showMessage(handleOnChangeInput())
  // }
  // const componentDidMount = () => {
  //   document.addEventListener('keydown', this.keydownHandler);
  // }
  // const componentWillUnmount = () => {
  //   document.removeEventListener('keydown', this.keydownHandler);
  // }
  return (
    <div className="header-wrapper">

      <div className="header-content_left">


        <img onClick={handleRedirectHome} className="header-logo" src={image}>

        </img>
        <div className="header-search">
          <input
            className="search_input"
            value={searchInput}
            onChange={handleOnChangeInput}
            placeholder="Tìm kiếm sản phẩm tại đây"
            onKeyPress={enterPressed.bind(this)}

          />
          <button className="search-button" onClick={handleOnClickSearchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

          </button>
        </div>
      </div>
      <div className="header-content_right">
        <div className='productMain'>

          <ItemHeader to="/product" link="" icon={faComputer} title="SẢN PHẨM" />

          <ul className='listProductRecomment'>
            <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=dell">Dell</Link></li>
            <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=thinkpad">ThinkPad</Link></li>
            <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=macbook">Macbook</Link></li>
            <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=asus">Asus</Link></li>
            <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=acer">Acer</Link></li>
          </ul>
        </div>
        <ItemHeader to="/software" link="" icon={faScrewdriverWrench} title="KHO PHẦN MỀM" />
        <ItemHeader to="/ensurrance" link="" icon={faNewspaper} title="TRA CỨU BẢO HÀNH" />
        <ItemHeader to="/news" link="" icon={faFileLines} title="TIN TỨC" />
        <ItemHeader to="/device" link="" icon={faLaptopMedical} title="DỊCH VỤ" />
        <ItemHeader to="/contact" link="" icon={faPhoneVolume} title="LIÊN HỆ" />
      </div>
    </div >
  );
}


export default Header;
