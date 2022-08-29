import MainNewsPost from "components/Post/MainNewsPost";
import PrimaryNewsPost from "components/Post/PrimaryNewsPost";
import ItemRestNews from "components/Post/ItemRestNews";
import { useEffect, useState } from "react";
import { getPostService } from "services/PostService";
import './News.scss'
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";

function News() {
    const [newsList, setNewsList] = useState([]);
    const dispatch = useDispatch();
    const newsListPost = async () => {
        dispatch(fetchDataStart());
        let res = await getPostService(1, 16, 'PT');
        if (res && res.errCode === 0) {

            setNewsList(res.data.rows);
        }
        dispatch(fetchDataFinished());
    }

    useEffect(() => {
        newsListPost();


    }, [])

    // const firstNewsPost = newsList.length >= 1 ? newsList.slice(0, 1) : [];
    const restNews = newsList.slice(0, newsList.length);
    // console.log(firstNewsPost)
    // console.log("imge", firstNewsPost[0].image)


    return (

        <div className="container_News">

            <div className="banner_News">
                <div className="main_News">
                    <MainNewsPost />
                    {/* <div className='gallery-display-area'>
                        <div className='gallery-wrap'>

                            <div className='img'>
                                <img className="imgItem" src='https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
                            </div>
                            <div className='img'>
                                <img className="imgItem" src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
                            </div>
                            <div className='img'>
                                <img className="imgItem" src='https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                            </div>
                            <div className='img'>
                                <img className="imgItem" src='https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                            </div>
                            <div className='img'>
                                <img className="imgItem" src='https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="primary_News">
                    <PrimaryNewsPost />
                </div>
            </div>


            <div>

                {
                    restNews.map((item) => {
                        return (
                            <ItemRestNews
                                key={item.id}
                                id={item.id}

                                image={item.image}
                                title={item.title}
                            />

                        )
                    })
                }
            </div>

        </div>
    )
}

export default News;