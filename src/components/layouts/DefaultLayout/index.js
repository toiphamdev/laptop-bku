import Header from './Header';
import './DefaultLayout.scss'
import Footer from './DefaultFooter/Footer';
import { useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
function DefaultLayout({ children, ...props }) {
  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <div>
      <Header />
      <div className='loading'>
        {isLoading && <PuffLoader loading color='blue' />}
      </div>
      <div className="container">{children}</div>
      <Footer />

    </div>
  );
}
export default DefaultLayout;
