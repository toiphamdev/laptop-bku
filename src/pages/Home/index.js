import { useEffect, useState } from 'react';

import { getHomeProduct } from 'services/ProductService';
import CardItem from 'components/CardItem';
import Banner from './Banner';

import './Home.scss';
import Advertisement from './Advertisement';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import Skeleton from 'react-loading-skeleton'
import HotDeal from 'pages/HotDeal/HotDeal';
function Home() {

  // function formatCash(str) {
  //   return str.split('').reverse().reduce((prev, next, index) => {
  //     return ((index % 3) ? next : (next + ',')) + prev
  //   })
  // }

  return (



    <div className='container_Home'>

      <ScrollToTop smooth component={<p style={{ color: "blue", }}>TOP</p>} top="500" />
      <Advertisement />
      {/* <div className="listProductHome"> */}
      <h2 className='suggestions'>Một số gợi ý dưới đây có thể giúp bạn tìm sản phẩm nhanh hơn...</h2>
      <div className="home_title">
        <ul className='listTitle'>
          <li className='itemTitle'><Link to='/search?q=dell'><img src="https://muamaytinhcu.info/wp-content/uploads/2020/04/may-tinh-dell-2020-bao-hanh-tai-nha-FDdPrE.jpg" alt="" className='itemImage' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=thinkpad'><img src="data:image/png;base64,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" alt="" className='itemImage' /></Link></li>
          <li className='itemTitle itemTitleHp'><Link to='/search?q=hp'><img src="https://www.actis.co.in/wp-content/uploads/2016/06/hp-logo-grey-300x171.png" alt="" className='itemImage' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=lenovo'><img src="data:image/png;base64,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" alt="" className='itemImage' /></Link></li>

          <li className='itemTitle itemTilePrimary'><Link to='/search?q=huawei'><img src="data:image/png;base64,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" alt="" className='itemImage itemImagePrimary' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=macbook'><img src="https://cdn.mos.cms.futurecdn.net/FA67cmKcZCKHcVy8CDRuuY.jpg" alt="" className='itemImage' /></Link></li>
          <li className='itemTitle'><Link to='/search?q=asus'><img src="data:image/jpeg;base64,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" alt="" className='itemImage' /></Link></li>

        </ul>
      </div>
      <h2 className='title-product-main'>DANH MỤC SẢN PHẨM</h2>

      <div className="products">
        <HotDeal />
        <Banner
          initState='DELL'
          title='LAPTOP DELL'
          brand={[{ title: 'Dell Latitude', value: 'dell latitude' },
          { title: 'Dell Precision', value: 'dell precision' }, { title: 'Dell XPS', value: 'dell xps' }, { title: 'Dell Inspiron', value: 'dell inspiron t' }]}
        />

        <Banner
          initState='THINKPAD'
          title='LAPTOP THINKPAD'
          brand={[{ title: 'Thinkpad T Series', value: 'thinkpad t' },
          { title: 'Thinkpad X Series', value: 'thinkpad x' }, { title: 'Thinkpad P Series', value: 'thinkpad p' }]}
        />
        {/* <Banner
          initState='HP'
          title='LAPTOP HP'
          brand={["dell latitude", "dell vostro", "dell inprion"]}
        />
        <Banner
          initState='MACBOOK'
          title='LAPTOP MACBOOK'
          brand={["dell latitude", "dell vostro", "dell inprion"]}
        /> */}


      </div>
      {/* </div> */}

      <img className='introduceService' src="https://laptopxaydung.com/assets/images/banner-footer.png"></img>
    </div>
  );

}


export default Home;
