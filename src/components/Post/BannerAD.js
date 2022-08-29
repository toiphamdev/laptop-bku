import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPostService } from 'services/PostService';
import './BannerAD.scss'
function BannerAD() {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        newsListPost();
    }, []);
    const newsListPost = async () => {
        let res = await getPostService(1, 3, "AD");
        if (res && res.errCode === 0) {

            setNewsList(res.data.rows);
        }


    }
    let navigate = useNavigate();
    const handleDetailPost = (id) => {
        navigate(`../post/${id}`);
    }
    return (
        <div className='banner-right-wrapper'>
            {newsList.map((item) => {
                return (

                    <div key={item.id} onClick={() => handleDetailPost(item.id)} className="containerBannerAD">
                        <img className="banner-img" src={item.image} />
                    </div>
                )
            })}
        </div>
    );
}

export default BannerAD;