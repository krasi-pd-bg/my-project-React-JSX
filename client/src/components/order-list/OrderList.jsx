import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import * as request from "../../api/requester";

import * as ordersApi from "../../api/orders-api.js";

import OrderListItem from "./order-list-item/OrderListItem.jsx";


export default function OrderList() {
    const [orders, setOrders] = useState([]);
    /* useEffect(() => {
         (async () => {
           //const ordersResult = await requester('GET', 'http://localhost:3030/jsonstore/repairs');
           const ordersResult = await request.get('http://localhost:3030/jsonstore/repairs');
           console.log(ordersResult);
         })();
     })  */

    /*  useEffect(() => {
        ordersApi.getAll()
            .then(result => setOrders(result))           
            
    }, []);   */

    useEffect(() => {
        (async () => {
            const result = await ordersApi.getAll();
            setOrders(result);
        })();
    }, []);

    return (
        <>
            <div className="w3-row-padding" id="about" style={{ marginTop: '100px' }}>
                <h1>Order List</h1>
                {orders.length > 0
                    ? < button >
                        <Link to="/order-list/latest">Latest 3 orders</Link>
                    </button>
                    : null
                }

                {orders.length > 0

                    ?
                    orders.map(order => <OrderListItem key={order._id} {...order} />)
                    : <h3>There are no waiting orders</h3>
                }
            </div >
        </>
    )
}