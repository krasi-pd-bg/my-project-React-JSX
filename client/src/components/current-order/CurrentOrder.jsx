//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router";
import { useNavigate } from "react-router-dom"
import { useDeleteOrder, useGetCurrentOrder } from "../../api/orders-api.js";

export default function CurrentOrder() {
    const navigate = useNavigate();
    const { orderId } = useParams();
    const { order } = useGetCurrentOrder(orderId);
    const { deleteOrder } = useDeleteOrder();

    
    //const [order, setOrder] = useState({});
    // useEffect(() => {
    //     (async () => {
    //         const result = await ordersApi.getCurrentOrder(orderId);
    //         setOrder(result);
    //     })();
    // }, [orderId]);


    const deleteOrderHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete your order #${order._id}?`);

        if (!hasConfirm) {
            return;
        }

        //await ordersApi.deleteOrder(order._id);
        await deleteOrder(orderId);

        navigate('/');
    };

    return (
        <>
            <div className="w3-row-padding" id="about" style={{ marginTop: '100px' }}>
                <div className="table-wrapper">
                    <h3>`Current order - {order.name}'s request'`</h3>
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
                <div className="buttons">
                    <button>
                        <Link to={`/order-list/${order._id}/edit`} style={{textDecoration: 'none'}}>Edit</Link>
                    </button>
                    <button
                        onClick={deleteOrderHandler}
                    >
                        Delete
                    </button>
                    <button>
                        <Link to={`/order-list`} style={{textDecoration: 'none'}}>Back</Link>
                    </button>
                </div>
            </div >
        </>
    )
}