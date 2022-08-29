
import { useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import Footer from '../DefaultLayout/DefaultFooter/Footer';
import SystemHeader from './SystemHeader/SystemHeader';
function SystemLayout({ children, ...props }) {
    const isLoading = useSelector(state => state.app.isLoading);
    return (
        <div>
            <SystemHeader />
            <div className='loading'>
                {isLoading && <PuffLoader loading color='blue' />}
            </div>
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}
export default SystemLayout;
