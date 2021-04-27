import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductAction } from '../actions/productsActions'

export default function NewProduct() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // use the dispatch to create a function
    const dispatch = useDispatch();

    // calling the action of ProductsAction
    const addProduct = (product) => dispatch(createNewProductAction(product));

    const submitNewProduct = e => {
        e.preventDefault();

        // check form
        if (name.trim() === '' || price <= 0) {
            return;
        }

        // check for errors

        // add Product
        addProduct({
            name,
            price
        });
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add new Product
                        </h2>

                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" className="form-control" placeholder="Potato" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input type="number" className="form-control" placeholder="12" name="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
