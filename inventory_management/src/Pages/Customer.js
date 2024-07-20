import axios from "axios";
import { useState } from "react";

const Customer = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [address, setAddress] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/customer", {
                firstname: firstname,
                lastname: lastname,
                mobilenumber: mobilenumber,
                address: address
            });
            setList([...list, response.data]);
            setFirstname("");
            setLastname("");
            setMobilenumber("");
            setAddress("");
        } catch (error) {
            console.error("There was an error making the request:", error);
        }
    }

    return (
        <div className="layout-container">
            <div className="layout-container__wrapper">
                <h3>Customer Details</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-wrap">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="mbno">Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            name="mbno"
                            value={mobilenumber}
                            onChange={(e) => setMobilenumber(e.target.value)}
                            className="form-input"
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
                            required
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

export default Customer;
