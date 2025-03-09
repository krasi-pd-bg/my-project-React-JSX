import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ordersApi from "../../api/orders-api.js";

export default function CurrentOrder() {
    const [order, setOrder] = useState({});
    const { orderId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await ordersApi.getCurrentOrder(orderId);
            setOrder(result);

        })();

    });

    return (
        <>
            <div className="w3-row-padding" id="about" style={{ marginTop: '100px' }}>
                <div className="table-wrapper">
                    <h3>Current order</h3>
                    <h5>Order #{order._id}</h5>
                    <ul>
                        <li>
                            name: {order.name}
                        </li>
                        <li>
                            email: {order.email}
                        </li>
                        <li>
                            phone: {order.phoneNumber}
                        </li>
                        <li>
                            city: {order.city}
                        </li>
                        <li>
                            address: {order.address}
                        </li>
                        <li>
                            type of service: {order.subject}
                        </li>
                        <li>
                            message: {order.message}
                        </li>
                        <li>
                            created at: {order.createdAt}
                        </li>
                    </ul>
                </div >
            </div >
        </>
    )
}