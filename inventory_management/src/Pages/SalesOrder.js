import axios from "axios";
import { useEffect, useState } from "react";

const SalesOrder = () => {
    const [warehouse, setWarehouse] = useState("");
    const [salesorder, setSalesorder] = useState(0);
    const [responsivesalesperson, setResponsivesalesperson] = useState("");
    const [customer, setCustomer] = useState("");
    const [contactperson, setContactperson] = useState("");
    const [billingaddress, setBillingaddress] = useState("");
    const [shippingaddress, setShippingaddress] = useState("");
    const [shippingmethod, setShippingmethod] = useState("");
    const [preferredshippingdate, setPreferredshippingdate] = useState("");
    const [paymentterms, setPaymentterms] = useState("");
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [list1,setList1]=useState([]);
    const [data1,setData1] =useState([]);
    const [data2,setData2] =useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/salesorder", {
                warehouse,
                salesorder,
                responsivesalesperson,
                customer,
                contactperson,
                billingaddress,
                shippingaddress,
                shippingmethod,
                preferredshippingdate,
                paymentterms,
            });
            setList([...list, response.data]);
            setWarehouse("");
            setSalesorder("");
            setResponsivesalesperson("");
            setCustomer("");
            setContactperson("");
            setBillingaddress("");
            setShippingaddress("");
            setShippingmethod("");
            setPreferredshippingdate("");
            setPaymentterms("");
            setError(null);
        } catch (err) {
            setError(`Request failed with status code ${err.response?.status || 'unknown'}`);
        }
    };

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await axios.get("http://localhost:3000/address");
                setData1(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAddress();
    }, []);

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await axios.get("http://localhost:3000/salesperson");
                setData2(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAddress();
    }, []);


    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const response = await axios.get("http://localhost:3000/customer");
                setList1(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSupplier();
    }, []);

    return (
        <div className="layout-container">
            <div className="layout-container__wrapper">
                <h3>Order details</h3>
                <hr />
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="flexbox">
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Warehouse</label>
                            <select 
                                className="form-select" 
                                name="type" 
                                value={warehouse}
                                onChange={(e) => setWarehouse(e.target.value)}
                                required
                            >
                                <option value="">Select Warehouse</option>
                                {
                                    data1&&data1.map((address,i)=>(
                                        <option key={i} value={address.address}>
                                            {address.address}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="column">
                            <div className="form-wrap">
                                <label htmlFor="first name">Sales Order</label>
                                <input
                                    type="Number"
                                    placeholder="Enter Sales Order"
                                    name="Sales order"
                                    value={salesorder}
                                    onChange={(e) => setSalesorder(e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div className="form-wrap flexbox-child__fb50 pl-5">
                                <label htmlFor="type">Responsible Sales Person</label>
                                <select 
                                    className="form-select" 
                                    name="type" 
                                    required
                                    value={responsivesalesperson}
                                    onChange={(e) => setResponsivesalesperson(e.target.value)}
                                >
                                    <option value="">Select Responsible Sales Person</option>
                                    {data2 && data2.map((customer, index) => (
                                    <option key={index} value={customer.name}>
                                        {customer.name}
                                    </option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className="form-wrap flexbox-child__fb50 pl-5">
                                <label htmlFor="type">Customer</label>
                                <select 
                                    className="form-select" 
                                    name="type" 
                                    required
                                    value={customer}
                                    onChange={(e) => setCustomer(e.target.value)}
                                >
                                    <option value="">Select Customer</option>
                                    {list1 && list1.map((customer, index) => (
                                    <option key={index} value={customer.firstname}>
                                        {customer.firstname}
                                    </option>
                                ))}
                                </select>
                            </div>
                            <div className="form-wrap">
                                <label htmlFor="Contact Person">Contact Person</label>
                                <input
                                    type="text"
                                    placeholder="Enter Contact Person"
                                    value={contactperson}
                                    onChange={(e) => setContactperson(e.target.value)}
                                    name="Contact Person"
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Shipping Address</label>
                            <select 
                                className="form-select" 
                                name="type" 
                                required
                                value={shippingaddress}
                                onChange={(e) => setShippingaddress(e.target.value)}
                            >
                                <option value="">Select Shipping Address</option>
                                {
                                    data1&&data1.map((address,i)=>(
                                        <option key={i} value={address.address}>
                                            {address.address}
                                        </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Billing Address</label>
                            <select 
                                className="form-select" 
                                name="type" 
                                required
                                value={billingaddress}
                                onChange={(e) => setBillingaddress(e.target.value)}
                            >
                                <option value="">Select Billing Address</option>
                                {
                                    data1&&data1.map((address,i)=>(
                                        <option key={i} value={address.address}>
                                            {address.address}
                                        </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Shipping Method</label>
                            <select 
                                className="form-select" 
                                name="type" 
                                value={shippingmethod}
                                onChange={(e) => setShippingmethod(e.target.value)}
                                required
                            >
                                <option value="">Select Shipping Method</option>
                                <option value="Standard">Standard</option>
                                <option value="Express">Express</option>
                                <option value="Overnight">Overnight</option>
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pr-5">
                            <label htmlFor="date">Preferred Shipping Date</label>
                            <input
                                type="date"
                                className="form-input"
                                name="date"
                                value={preferredshippingdate}
                                onChange={(e) => setPreferredshippingdate(e.target.value)}
                                placeholder="Enter date"
                            />
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pr-5">
                            <label htmlFor="date">Payment Terms</label>
                            <input
                                type="date"
                                className="form-input"
                                name="date"
                                placeholder="Enter date"
                                value={paymentterms}
                                onChange={(e) => setPaymentterms(e.target.value)}
                            />
                        </div>
                        <div className="flexbox flexbox-reverse flexbox-justify-center ">
                            <button className="btn" type="submit">
                                <span>Create Sales Order</span>
                            </button>
                            <button className="btn mr-5" type="reset">
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SalesOrder;
