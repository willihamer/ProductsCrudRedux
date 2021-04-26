import React from 'react'

export default function NewProduct() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add new Product
                        </h2>

                        <form>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" className="form-control" placeholder="Potato" name="name"/>
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input type="number" className="form-control" placeholder="12" name="price"/>
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
