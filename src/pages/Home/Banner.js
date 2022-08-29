import { useEffect, useState } from "react"
import { getSearchResultByNameService } from "services/ProductService";
import { formatCash } from "utils/customizeString";
import CardItem from "components/CardItem";
import _ from "lodash";
import './Banner.scss'
import { Link } from "react-router-dom";

const Banner = (props) => {
    const [currenBrand, setCurrenBrand] = useState(props.initState);
    const [listProduct, setListProduct] = useState([]);
    const handleBrand = (item) => {
        setCurrenBrand(item);
    }
    useEffect(() => {
        getListProduct(currenBrand, 1, 4);

    }, [currenBrand])
    const getListProduct = async (data, page, size) => {
        const res = await getSearchResultByNameService(data, page, size);
        if (res && res.errCode === 0) {
            setListProduct(res.data.rows)
        }
        return res;
    }
    return (
        <div className="container-product">
            <div className="nav-product">

                <div className="title-product">
                    <h2 className="title-productText">{props.title}</h2>
                </div>
                <div className="container-itemProduct">

                    {!_.isEmpty(props.brand) && props.brand.map((item, index) => {
                        return <span key={index} onClick={() => handleBrand(item.value)} className="item-product">{item.title}</span>
                    })}
                </div>

            </div>
            {/* <h1 className="listNow">DANH SÁCH SẢN PHẨM HIỆN CÓ</h1> */}
            <div className="list-product">
                {
                    !_.isEmpty(listProduct) && listProduct.map(function (item) {
                        const price = !_.isEmpty(item.configData) ? formatCash(item.configData[0].price) : null;
                        return (
                            <CardItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={price}
                                image={item.image1}
                                memory={!_.isEmpty(item.configData) ? item.configData[0].memory : null}
                                CPUType={!_.isEmpty(item.configData) ? item.configData[0].CPUType : null}
                                ramMemory={!_.isEmpty(item.configData) ? item.configData[0].ramMemory : null}
                                sizeScreen={!_.isEmpty(item.configData) ? item.configData[0].sizeScreen : null}
                                discount={!_.isEmpty(item.configData) ? item.configData[0].discount : null}

                            />
                        )
                    })
                }
            </div>

            <div className="container-button">

                <Link to={`/search?q=${props.initState}`} className="item-button">Xem Thêm</Link>
            </div>
        </div>)
}
export default Banner;