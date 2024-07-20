import axios from "axios";
import { useEffect, useState } from "react";

const PurchaseOrder = () => {
    const [supplier, setSupplier] = useState("");
    const [billingaddress, setBillingadderess] = useState("");
    const [shippingaddress, setShoppingAddress] = useState("");
    const [shippingmethod, setShippingmethod] = useState("");
    const [preferredshippingdate, setPreferedshippingdate] = useState("");
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const response = await axios.get("http://localhost:3000/supplier");
                setList1(response.data); // Assuming response.data is an array of suppliers
            } catch (error) {
                console.error(error);
            }
        };
        fetchSupplier();
    }, []);

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await axios.get("http://localhost:3000/address");
                setList2(response.data); // Assuming response.data is an array of addresses
            } catch (error) {
                console.error(error);
            }
        };
        fetchAddress();
    }, []);

    return (
        <div className="layout-container">
            <div className="layout-container__wrapper">
                <h3>Order Details</h3>
                <hr />
                <form>
                    <div className="flexbox">
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="supplier">Supplier</label>
                            <select 
                                className="form-select" 
                                name="supplier" 
                                value={supplier}
                                onChange={(e) => setSupplier(e.target.value)}
                                required>
                                <option value="">Select Supplier</option>
                                {list1.map((supplier, index) => (
                                    <option key={index} value={supplier.name}>
                                        {supplier.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="billingaddress">Billing Address</label>
                            <select 
                                className="form-select" 
                                name="billingaddress" 
                                value={billingaddress}
                                onChange={(e) => setBillingadderess(e.target.value)}
                                required>
                                <option value="">Select Address</option>
                                {list2.map((address, index) => (
                                    <option key={index} value={address}>
                                        {address}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="shippingaddress">Shipping Address</label>
                            <select 
                                className="form-select" 
                                name="shippingaddress" 
                                value={shippingaddress}
                                onChange={(e) => setShoppingAddress(e.target.value)}
                                required>
                                <option value="">Select Address</option>
                                {list2.map((address, index) => (
                                    <option key={index} value={address}>
                                        {address}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="shippingmethod">Shipping Method</label>
                            <select 
                                className="form-select" 
                                name="shippingmethod" 
                                value={shippingmethod}
                                onChange={(e) => setShippingmethod(e.target.value)}
                                required>
                                <option value="">Select Shipping Method</option>
                                <option value="Standard">Standard</option>
                                <option value="Express">Express</option>
                                <option value="Overnight">Overnight</option>
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pr-5">
                            <label htmlFor="preferredshippingdate">Preferred Shipping Date</label>
                            <input
                                type="date"
                                className="form-input"
                                name="preferredshippingdate"
                                value={preferredshippingdate}
                                onChange={(e) => setPreferedshippingdate(e.target.value)}
                                placeholder="Enter date"
                                required
                            />
                        </div>
                        <div className="flexbox flexbox-reverse flexbox-justify-center ">
                            <button className="btn" type="submit">
                                <span>Create Purchase Order</span>
                            </button>
                            <button className="btn mr-5" type="reset">
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PurchaseOrder;
