import { useEffect } from 'react';
import { getNewPostService } from 'services/PostService';
import { useState } from 'react';
import './PrimaryNewsPost.scss'
import { useNavigate } from 'react-router-dom';
function PrimaryNewsPost() {
    const [newsList, setNewsList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        newsListPost();
    }, []);
    const newsListPost = async () => {
        let res = await getNewPostService(1, 4);
        if (res && res.errCode === 0) {

            setNewsList(res.data.rows);
        }

    }
    const redirectDetailPage = (id) => {
        navigate(`../post/${id}`);
    }
    console.log(newsList);
    return (
        <div className='container_primaryNews'>
            {/* <div className='title_News'>
                <h2 className='title_NewsItem'>TIN NỔI BẬT</h2>
            </div>
            <hr></hr> */}
            {newsList.map((item) => {
                return (

                    <div key={item.id} className="containerFourtNews" onClick={() => redirectDetailPage(item.id)}>
                        <div className="fourNewsBanner">
                            <img className="fourNewsBanner_img" src={item.image} />
                            <h2 className="fourNewsBanner_title">{item.title}</h2>

                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default PrimaryNewsPost;