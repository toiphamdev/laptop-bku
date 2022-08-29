import MainNewsPost from "components/Post/MainNewsPost";
import PrimaryNewsPost from "components/Post/PrimaryNewsPost";
import ItemRestNews from "components/Post/ItemRestNews";
import { useEffect, useState } from "react";
import { getPostService } from "services/PostService";
import '../News/News.scss'
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";

function Software() {
  const [newsList, setNewsList] = useState([]);
  const dispatch = useDispatch();
  const newsListPost = async () => {
    dispatch(fetchDataStart());
    let res = await getPostService(1, 12, 'SW');
    if (res && res.errCode === 0) {

      setNewsList(res.data.rows);
    }
    dispatch(fetchDataFinished());
  }

  useEffect(() => {
    newsListPost();


  }, [])

  const restNews = newsList.slice(1, newsList.length);
  // console.log(firstNewsPost)
  // console.log("imge", firstNewsPost[0].image)


  return (

    <div className="container_News">
      <div className="banner_News">
        <div className="main_News">
          <MainNewsPost />
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

export default Software;