import axios from "axios";
import { useState } from "react";

const Suppliers = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mobilenumber, setMobilenumber] = useState(0);
    const [address, setAddress] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/supplier", {
                firstname: firstname,
                lastname: lastname,
                mobilenumber: mobilenumber,
                address: address
            });
            setList([...list, response.data]);
            setFirstname("");
            setLastname("");
            setMobilenumber(0);
            setAddress("");
        } catch (error) {
            console.error("There was an error making the request:", error);
        }
    }

    return (
        <div className="layout-container">
            <div className="layout-container__wrapper">
                <h3>Supplier Details</h3>
                <hr />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-wrap">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            name="firstname"
                            className="form-input"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastname"
                            className="form-input"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="mbno">Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            name="mbno"
                            className="form-input"
                            value={mobilenumber}
                            onChange={(e) => setMobilenumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="address">Address</label>
                        <textarea
                            name="address"
                            className="form-textarea"
                            placeholder="Enter Address"
                            rows="4"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flexbox flexbox-reverse flexbox-justify-center">
                        <button className="btn" type="submit">
                            <span>add</span>
                        </button>
                        <button className="btn mr-5" type="reset">
                            <span>Clear</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Suppliers;
