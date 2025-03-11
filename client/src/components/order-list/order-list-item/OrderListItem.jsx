import { Link } from "react-router-dom";

export default function OrderListItem({
    _id,
    name,
    email,
    phoneNumber,
    city,
    address,
    subject,
    message,
    createdAt

}) {
    return (
        <>
            <div className="w3-row-padding" id="about" style={{ padding: '10px' }}>
                <div className="table-wrapper">
                
                    <h5>Order #{_id}</h5>
                    <ul>
                        <li>
                            {name}
                        </li>
                        <li>
                            {email}
                        </li>
                        <li>
                            {phoneNumber}
                        </li>
                        <li>
                            {city}
                        </li>
                        <li>
                            {address}
                        </li>
                        <li>
                            {subject}
                        </li>
                        <li>
                            {message}
                        </li>
                        <li>
                            {createdAt}
                        </li>
                        <button>
                            <Link to={`/order-list/${_id}`} >Details</ Link>
                        </button>
                    </ul>
                </div >
            </div>
        </>
    )
}