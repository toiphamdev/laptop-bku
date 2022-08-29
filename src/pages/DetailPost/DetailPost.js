import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchDataFinished, fetchDataStart } from "redux/actions";
import { getPostByIdService } from "services/PostService";
import './DetailPost.scss'

function DetailPost() {
    const dataURL = useLocation().pathname;
    let id = useParams(dataURL).id;
    const [currentPost, setCurrentPost] = useState({});
    useEffect(() => {
        getPostById();
    }, [id]);
    const dispatch = useDispatch();
    const getPostById = async () => {
        dispatch(fetchDataStart());
        let res = await getPostByIdService(id);
        if (res && res.errCode === 0) {
            setCurrentPost(res.data)
        }
        dispatch(fetchDataFinished());
    }
    return (
        <div className="detail-post-wrapper">
            <h3>{currentPost.title}</h3>
            <div className="" dangerouslySetInnerHTML={{ __html: currentPost.descriptionHTML }}>

            </div>
        </div>
    );
}

export default DetailPost;