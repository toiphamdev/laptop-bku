import { useEffect, useState } from "react";
import { getConfigDiscountService } from "services/ProductService";
import _ from "lodash";
import { formatCash } from "../../utils/customizeString"
import CardItem from "components/CardItem";
import { Link } from "react-router-dom";



function HotDeal(props) {
    const [configDiscount, setConfigDiscount] = useState([]);
    const getConfigDiscount = async (limit) => {
        const res = await getConfigDiscountService(limit);
        if (res && res.errCode === 0) {
            setConfigDiscount(res.data);
        }

    }
    useEffect(() => {
        getConfigDiscount(4);

    }, [])
    console.log(configDiscount)
    return (<div className="container-product">


        <div className="list-product">
            {
                !_.isEmpty(configDiscount) && configDiscount.map(function (item) {

                    return (
                        <>
                            {item.configData &&

                                <CardItem
                                    price={item.price}
                                    image={item.configData.image1}
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    memory={!_.isEmpty(item.configData) ? item.memory : null}
                                    CPUType={!_.isEmpty(item.configData) ? item.CPUType : null}
                                    ramMemory={!_.isEmpty(item.configData) ? item.ramMemory : null}
                                    sizeScreen={!_.isEmpty(item.configData) ? item.sizeScreen : null}
                                    discount={!_.isEmpty(item.configData) ? item.discount : null}
                                />
                            }
                        </>


                    )
                })
            }
        </div>

        <div className="container-button">

            {/* <Link to={`/search?q=${props.initState}`} className="item-button">Xem Thêm</Link> */}
        </div>
    </div>);
}

export default HotDeal;