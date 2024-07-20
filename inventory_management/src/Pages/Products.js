const Products = () =>{
    
    return(
        <div className="layout-container">
            <div className="layout-container__wrapper">
                <form>
                    <div className="form-wrap">
                        <label htmlFor="first name">Photo</label>
                        <input
                            type="file"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="first name">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="first name">Product ID</label>
                        <input
                            type="text"
                            placeholder="Enter Product ID"
                            name="first Product ID"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="first name">Price</label>
                        <input
                            type="number"
                            placeholder="Enter Price"
                            name="price"
                            className="form-input"
                            min="0"
                            required
                        />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="quantity">quantity</label>
                        <input
                            type="text"
                            placeholder="Enter quantity"
                            name="quantity"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="flexbox flexbox-reverse flexbox-justify-center ">
                        <button className="btn" type="submit">
                            <span>Add Product</span>
                        </button>
                        <button className="btn mr-5" type="reset">
                            <span>Cancel</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Products;