const SalesOrder=()=>{
    return(
        <div className="layout-container">
            <div className="layout-container__wrapper">
                <h3>Order details</h3>
                <hr/>
                <form>
                    <div className="flexbox">
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Warehouse</label>
                            <select className="form-select" name="type" required>
                            <option value="">Select Warehouse</option>
                            <option value="1">Credit</option>
                            <option value="2">Debit</option>
                            </select>
                        </div>
                        <div className="column">
                            <div className="form-wrap">
                                <label htmlFor="first name">Sales Order</label>
                                <input
                                    type="text"
                                    placeholder="Enter Sales Order"
                                    name="Sales order"
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div className="form-wrap flexbox-child__fb50 pl-5">
                                <label htmlFor="type">Responsible Sales Preson</label>
                                <select className="form-select" name="type" required>
                                <option value="">Select Responsible Sales Preson</option>
                                <option value="1">Credit</option>
                                <option value="2">Debit</option>
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className="form-wrap flexbox-child__fb50 pl-5">
                                <label htmlFor="type">Customer</label>
                                <select className="form-select" name="type" required>
                                <option value="">Select Customer</option>
                                <option value="1">Credit</option>
                                <option value="2">Debit</option>
                                </select>
                            </div>
                            <div className="form-wrap">
                                <label htmlFor="Contact Preson">Contact Preson</label>
                                <input
                                    type="text"
                                    placeholder="Enter Contact Preson"
                                    name="Contact Preson"
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Shipping Address</label>
                            <select className="form-select" name="type" required>
                            <option value="">Select Shipping Address</option>
                            <option value="1">Credit</option>
                            <option value="2">Debit</option>
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Billing Address</label>
                            <select className="form-select" name="type" required>
                            <option value="">Select Billing Address</option>
                            <option value="1">Credit</option>
                            <option value="2">Debit</option>
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pl-5">
                            <label htmlFor="type">Shipping Method</label>
                            <select className="form-select" name="type" required>
                            <option value="">Select Shipping Method</option>
                            <option value="1">Credit</option>
                            <option value="2">Debit</option>
                            </select>
                        </div>
                        <div className="form-wrap flexbox-child__fb50 pr-5">
                            <label htmlFor="date">Preffered Shipping Date</label>
                            <input
                            type="date"
                            className="form-input"
                            name="date"
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
    )
}
export default SalesOrder;