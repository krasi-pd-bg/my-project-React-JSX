import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Latest from "./Latest.jsx";

import ordersApi from "../../api/orders-api.js";

export default function OrderLatest3() {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ordersApi.getAll();
            setLatest(result.reverse().slice(0, 3));

        })();

    }, []);
    console.log(latest)

    return (
        <>
            <div className="w3-row-padding" id="about" style={{ marginTop: '100px' }}>
                <div className="table-wrapper">
                    <h3>Latest 3 orders</h3>
                    
                        <button><Link to={"/order-list"} style={{textDecoration: 'none'}}>Back to All orders list</ Link></button>
                        {latest.length > 0
                            ? latest.map(order => <Latest key={order._id} {...order} />)
                            : <h3>There are no waiting orders</h3>
                        }
                    

                </div>
            </div>

        </>
    )
}