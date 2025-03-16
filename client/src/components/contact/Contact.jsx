import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import * as ordersApi from "../../api/orders-api";



export default function Contact() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        address: '',
        subject: '',
        message: '',
        createdAt: new Date().toString()
    });

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    /*useEffect(() => {
        (async () => {
            //const response = await fetch('http://localhost:3030/jsonstore/orders');
            //const profile = await response.json();


            // setUsername(profile.username);
        })();
    }, [])
    */

    const formSubmitHandler = async (e) => {
        e.preventDefault();

       await ordersApi.createOrder((formValues));
       navigate('/order-list/latest');
        
    };

    const changeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value,


        }));
        
    };

    return (
        <>
            <div className="w3-center w3-padding-24" id="contact">
                <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-12">Contact Us</span>
            </div>
            <div className="w3-center w3-padding-24" id="contact">
                <span><h3>Request your details and the type of service you need and we will contact you soon as possible</h3></span>
            </div>

            <form className="w3-container" action="/action_page.php" target="_blank" onSubmit={formSubmitHandler}>
                <div className="w3-section">
                    <label htmlFor="name">name</label>
                    <input className="w3-input w3-border w3-hover-border-black"
                        type="text"
                        ref={inputRef}
                        name="name"
                        id="name"
                        placeholder="Jane Doe"
                        value={formValues.name}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="w3-section">
                    <label htmlFor="email">email</label>
                    <input className="w3-input w3-border w3-hover-border-black"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email@example.com"
                        value={formValues.email}
                        onChange={changeHandler}
                        required
                    />
                </div>

                <div className="w3-section">
                    <label htmlFor="phoneNumber">phone number</label>
                    <input className="w3-input w3-border w3-hover-border-black"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+359 876 100 200"
                        value={formValues.phoneNumber}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="w3-section">
                    <label htmlFor="city">city</label>
                    <select className="w3-input w3-border w3-hover-border-black"
                        type="text"
                        name="city"
                        id="city"
                        value={formValues.city}
                        onChange={changeHandler}
                        required
                    >
                        <option value="">select your city</option>
                        <option value="plovdiv">Plovdiv</option>
                        <option value="sofia">Sofia</option>
                        <option value="varna">Varna</option>
                        <option value="burgas">Burgas</option>

                    </select>
                </div>
                <div className="w3-section">
                    <label htmlFor="address">address</label>
                    <input className="w3-input w3-border w3-hover-border-black"
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Vasil Levski 112"
                        value={formValues.address}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="w3-section">
                    <label htmlFor="subject">type of service</label>
                    <select className="w3-input w3-border w3-hover-border-black"
                        type="text"
                        name="subject"
                        id="subject"
                        value={formValues.subject}
                        onChange={changeHandler}
                        required
                    >
                        <option value="">choose your type</option>
                        <option value="electro">Electro</option>
                        <option value="plumber">Plumber</option>
                        <option value="crew">Complete repair</option>

                    </select>

                </div>
                <div className="w3-section">
                    <label htmlFor="message">message</label>
                    <textarea className="w3-input w3-border w3-hover-border-black"
                        name="message"
                        id="message"
                        value={formValues.message}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <button type="submit" className="w3-button w3-block w3-black btn">Send</button>
            </form>


        </>
    )
}