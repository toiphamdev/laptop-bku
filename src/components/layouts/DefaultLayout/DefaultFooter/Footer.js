import './Footer.scss';


function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className='footer-img'>
                    <img src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/298116682_773615100457908_5939565983243269881_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=qDdxSiCTvgwAX-Mj6vr&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-P7nojhkbxymCBelUnEr8Cs8ZbXjLNt821iW_YGK-Iag&oe=6301DB59" className="footer-imgItem"></img>
                    {/* <img src="footerlogomain.png" className="footer-imgItem"></img> */}

                </div>
                <div className="footer-column">
                    <h2 className="footer-title"> CHÍNH SÁCH CHUNG</h2>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#" className="footer-link">Chính sách bảo mật thông tin</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Chính sách bảo hành</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Dịch vụ</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Chính sách giao hàng</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2 className="footer-title">GIỚI THIỆU</h2>
                    <ul className="footer-list">
                        <li className="footer-item"><a a href="#" className="footer-link">Hình thức thanh toán</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Cam kết chất lượng sản PHẨM</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Tuyển dụng</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Kiểm tra bảo hành</a></li>

                    </ul>
                </div>
                <div className="footer-column">
                    <h2 className="footer-title">LIÊN HỆ</h2>
                    <ul className="footer-list">
                        <li className="footer-item"><a a href="#" className="footer-link">Gọi mua hàng</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Gọi khiếu nại, góp ý</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Gọi bảo hành</a></li>
                        <li className="footer-item"><a a href="#" className="footer-link">Hỗ trợ kĩ thuật</a></li>
                    </ul>

                </div>
                {/* <div className="footer-column">
            <h2 className="footer-title">HỆ THỐNG CHÍNH SÁCH</h2>
           <ul className="footer-list">
           <li className="footer-item"><a className="footer-link">Khu Vực Miền Nam</a></li>
                <li className="footer-item"><a className="footer-link">Khu Vực Miền Nam</a></li>
                <li className="footer-item"><a className="footer-link">Khu Vực Miền Nam</a></li>
            </ul>
        </div>
         */}


            </div>
            <div className="container_title-lastHeader">

                <h5 className="title_footer-last">Laptop BKU hân hạnh đồng hành cùng bạn!</h5>
            </div>
        </>
    )
}
export default Footer;