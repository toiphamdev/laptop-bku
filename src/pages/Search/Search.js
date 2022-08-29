import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchResultService } from "services/ProductService";
import CardItem from "components/CardItem";
import Pagination from '@atlaskit/pagination';
import './Search.scss'
import _ from "lodash";
import { useDispatch } from "react-redux";
import { fetchDataFinished, fetchDataStart } from "redux/actions";

function Search() {
  let search = useLocation().search;
  let q = new URLSearchParams(search).get('q');
  const [currentRespone, setCurrentRespone] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setCurrentPage(1)
  }, [q])
  useEffect(() => {
    getCurrentResponse();

  }, [currentPage, q]);

  const dispatch = useDispatch();
  const getCurrentResponse = async () => {
    dispatch(fetchDataStart());
    let pageSize = 20;
    let res = await getSearchResultService(q, currentPage, pageSize);
    if (res && res.errCode === 0) {

      setCurrentRespone([...res.data.rows]);
      setTotalPages(Math.ceil(res.data.count / pageSize));
    };
    dispatch(fetchDataFinished());
  }

  const createPageArr = (pages) => {
    let pageArr = [];
    for (let i = 1; i <= pages; i++) {
      pageArr.push(i);
    }
    return pageArr;
  }

  return (
    <div>
      <div className="products">
        {/* <h2>DANH SÁCH SẢN PHẨM</h2> */}
        {
          currentRespone.map(item => {
            return (
              <CardItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={!_.isEmpty(item.configData) ? item.configData[0].price : null}
                image={item.image1}

              />
            )
          })
        }
      </div>
      {_.isEmpty(currentRespone) && <h3> Không tìm thấy sản phẩm</h3>}
      {
        !_.isEmpty(currentRespone) &&
        <>
          <div className="showPage">
            <span>Trang {currentPage}/{totalPages}</span>
          </div>
          <div className="buttonChangePage">
            <Pagination
              pages={[...createPageArr(totalPages)]}
              max={totalPages >= 10 ? 8 : totalPages}
              value={currentPage}
              onChange={(e, page) => setCurrentPage(page)}
              style={{ fontSize: '16px' }}
            />
          </div>
        </>

      }
    </div>
  );
}
export default Search;