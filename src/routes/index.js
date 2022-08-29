import Home from '../pages/Home/index.js';
import Flowwing from '../pages/Software/Software.js';
import Tools from '../pages/Tools/index.js';
import Product from '../pages/Product/index.js';
import Search from 'pages/Search/Search.js';
import SystemPage from 'system/page/SytemPage.js';
import Login from 'system/page/Login.js';
import ProductInfor from 'pages/ProductInfor/index.js';
import Ensurrance from 'pages/Ensurrance/Ensurrance.js';
import ManagerPost from 'system/page/ManagerPost.js';
import Software from '../pages/Software/Software.js';
import News from 'pages/News/News.js';
import DetailPost from 'pages/DetailPost/DetailPost.js';
import Contact from 'pages/Contact/Contact.js';
import Device from 'pages/Device/Decive.js';
import ManagerProduct from 'system/page/ManagerProduct/ManagerProduct.js';
import ConfigProduct from 'system/page/ConfigProduct/ConfigProduct.js';
import UpdateProduct from 'system/page/UpdateProduct/UpdateProduct.js';
import UpdateConfig from 'system/page/UpdateConfig/UpdateConfig.js';
import ManagerEnsurrance from 'system/page/ManagerEnsurrance/ManagerEnsurrance.js';
import UpdateEnsurrance from 'system/page/UpdateEnsurrance/UpdateEnsurrance.js';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/Tools', component: Tools, layout: null },
  // { path: '/Following', component: Flowwing },
  { path: '/software', component: Software },
  { path: '/news', component: News },
  { path: '/post/:id', component: DetailPost },
  { path: '/ensurrance', component: Ensurrance },
  { path: '/product/:id', component: ProductInfor },
  { path: '/product', component: Product },
  { path: '/contact', component: Contact },
  { path: '/device', component: Device }
];
const privateRoutes = [
  { path: '/', component: SystemPage },
  { path: '/login', component: Login, layout: null },
  { path: '/manager-post', component: ManagerPost },
  { path: '/manager-product', component: ManagerProduct },
  { path: '/config-product', component: ConfigProduct },
  { path: '/update-product', component: UpdateProduct },
  { path: '/update-config', component: UpdateConfig },
  { path: '/manager-ensurrance', component: ManagerEnsurrance },
  { path: '/update-ensurrance', component: UpdateEnsurrance },


];
export { publicRoutes, privateRoutes };
