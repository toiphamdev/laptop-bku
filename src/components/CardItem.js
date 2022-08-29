import { useNavigate } from 'react-router-dom';
import './CardItem.scss'
function CardItem(props) {
    let navigate = useNavigate();

    const handleChangePage = () => {
        navigate(`../product/${props.id}`);
    }
    console.log(props)

    return (
        <div className="card-wrapper" onClick={handleChangePage}>
            <img src={props.image} placeholder="Laptop" className="card-img" />
            <h3 className="card-name">{props.name}</h3>
            <span className="card-price">{props.price ? `${props.price} VNĐ` : 'Đang cập nhật'}</span>
            <div className="containerDetailConfig">
                <span className="itemDetailConfig">{props.CPUType ? `${props.CPUType} ` : 'Đang cập nhật'}/ </span>
                <span className="itemDetailConfig">{props.ramMemory ? `${props.ramMemory} ` : 'Đang cập nhật'}/ </span>
                <span className="itemDetailConfig">{props.memory ? `${props.memory} ` : 'Đang cập nhật'}/ </span>
                <span className="itemDetailConfig"> {props.sizeScreen ? `${props.sizeScreen} ` : 'Đang cập nhật'}</span>
            </div>
            {props.discount > 0 && <button className='discount'>Giảm  {props.discount && `${props.discount}% `}</button>}


        </div>
    )
}

export default CardItem;