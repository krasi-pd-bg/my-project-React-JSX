import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCurrentOrder, useUpdateOrder } from '../../api/orders-api';

export default function EditOrder() {
    const navigate = useNavigate();
    const { orderId } = useParams();
    const { order } = useGetCurrentOrder(orderId);
    const { updateOrder } = useUpdateOrder();
    


    //const [order, setOrder] = useState({});

    // useEffect(() => {
    //     ordersApi.getCurrentOrder(orderId)
    //         .then((data) => setOrder(data))
    // }, [orderId]);

    const formAction = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const orderData = Object.fromEntries(formData);

        //await ordersApi.updateOrder(orderData, orderId);
        await updateOrder(orderData, orderId);

        navigate(`/order-list/${orderId}`);
    }
    return (
        <>
            <div className="w3-row-padding" id="about" style={{ marginTop: '100px' }}>
                <div className="table-wrapper">
                    <h1>Edit your order</h1>
                    <div className="w3-center w3-padding-24" id="contact">
                        <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-12">Contact Us</span>
                    </div>
                    <div className="w3-center w3-padding-24" id="contact">
                        <span><h3>Request your details and the type of service you need and we will contact you soon as possible</h3></span>
                    </div>

                    <form className="w3-container" onSubmit={formAction}>
                        <div className="w3-section">
                            <label htmlFor="name">name</label>
                            <input className="w3-input w3-border w3-hover-border-black"
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={order.name}
                            />
                        </div>
                        <div className="w3-section">
                            <label htmlFor="email">email</label>
                            <input className="w3-input w3-border w3-hover-border-black"
                                type="text"
                                name="email"
                                id="email"
                                defaultValue={order.email}
                            />
                        </div>

                        <div className="w3-section">
                            <label htmlFor="phoneNumber">phone number</label>
                            <input className="w3-input w3-border w3-hover-border-black"
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                defaultValue={order.phoneNumber}
                            />
                        </div>
                        <div className="w3-section">
                            <label htmlFor="city">city</label>
                            <input className="w3-input w3-border w3-hover-border-black"
                                type="text"
                                name="city"
                                id="city"
                                defaultValue={order.city}
                            />
                        </div>
                        <div className="w3-section">
                            <label htmlFor="address">address</label>
                            <input className="w3-input w3-border w3-hover-border-black"
                                type="text"
                                name="address"
                                id="address"
                                defaultValue={order.address}
                            />
                        </div>
                        <div className="w3-section">
                            <label htmlFor="subject">type of service</label>
                            <input className="w3-input w3-border w3-hover-border-black"
                                type="text"
                                name="subject"
                                id="subject"
                                defaultValue={order.subject} />


                        </div>
                        <div className="w3-section">
                            <label htmlFor="message">message</label>
                            <textarea className="w3-input w3-border w3-hover-border-black"
                                name="message"
                                id="message"
                                defaultValue={order.message}
                            />
                        </div>
                        <button type="submit" className="w3-button w3-block w3-black btn">Send</button>
                    </form>
                </div >
            </div >
        </>
    )
}