import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { handleUserLogout } from "redux/actions";
import { adminMenu } from "system/menu";
import './SystemHeader.scss'

function SystemHeader() {
    let userInfo = useSelector(state => state.user.userInfo);
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const handleLogout = async () => {
        await dispatch(handleUserLogout(userInfo.id));
        navigate('../login')
    }
    return (
        <div className="headerSystem">

            <div className="managerSystem">
                {userInfo.roleId === 'R1' && adminMenu.map((item) => {
                    return <NavLink className="managerSystemTile" to={item.link} key={item.title}>{item.title}</NavLink>
                })}
            </div>
            <button className="logOutSystem" onClick={handleLogout}>Đăng xuất</button>
            <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" className="userSystem"></img>
        </div>
    );
}

export default SystemHeader;