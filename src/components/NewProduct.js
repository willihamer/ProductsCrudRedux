import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showAlertAction, hideAlertAction } from '../actions/alertsActions';
import { createNewProductAction } from '../actions/productsActions'

export default function NewProduct({ history }) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // use the dispatch to create a function
    const dispatch = useDispatch();

    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const alert = useSelector(state => state.alerts.alert);

    // calling the action of ProductsAction
    const addProduct = (product) => dispatch(createNewProductAction(product));

    const submitNewProduct = e => {
        e.preventDefault();

        // check form
        if (name.trim() === '' || price <= 0) {
            const answerAlert = {
                message: 'Both fields are required',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlertAction(answerAlert));
            return;
        }

        dispatch(hideAlertAction());

        // add Product
        addProduct({
            name,
            price
        });

        history.push('/');
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add new Product
                        </h2>
                        {alert ? <p className={alert.classes}>{alert.message}</p> : null}
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

                        {loading ? <p>...loading</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">An error occurs</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
