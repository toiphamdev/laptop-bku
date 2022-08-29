import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchResult, handleUserLogin } from "redux/actions";
import { login } from "services/UserService";
import './Login.scss'

function Login() {
    let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOnChangeInput = (e, type) => {
        switch (type) {
            case 'EMAIL':
                setEmail(e.target.value);
                break;
            case 'PASSWORD':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };
    const handelLogin = async (email, password) => {
        dispatch(handleUserLogin(email, password));
    };
    let navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            navigate(`../`);
        }
    }, [isLoggedIn])
    return (
        <div className="container_loggin">
            <div className="main_loggin">
                <h2 className="login_title">LOGIN</h2>
                <div className="login">

                    <div className="loggin_email">
                        <label className="loggin_email-item" >Email </label>
                        <input className="loggin_input-item" placeholder="Nhập email " value={email} onChange={(e) => handleOnChangeInput(e, 'EMAIL')} />
                    </div>
                    <div className="loggin_password">
                        <label className="loggin_password-item" >Password </label>
                        <input className="loggin_input-item" placeholder="Nhập mật khẩu" value={password} onChange={(e) => handleOnChangeInput(e, 'PASSWORD')} />
                    </div>

                </div>
                <div className="loggin_button">

                    <button className="loggin_button-item" onClick={() => handelLogin(email, password)}>Đăng Nhập</button>
                </div>
            </div>
        </div>
    );
}

export default Login;