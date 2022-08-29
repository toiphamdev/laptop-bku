import { useNavigate } from 'react-router-dom';
import './ItemRestNews.scss'
function ItemRestNews(props) {
    const navigate = useNavigate();
    const redirectDetailPage = (id) => {
        navigate(`../post/${id}`);
    }
    return (<div className="container_ListItemNews">
        <div className="container_itemNews" onClick={() => redirectDetailPage(props.id)}>

            <img className="img_itemNews" src={props.image}></img>
            <h2 className="title_itemNews">{props.title}</h2>
        </div>
    </div>



    );
}

export default ItemRestNews;