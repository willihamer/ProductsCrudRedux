import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editProductAction } from '../actions/productsActions';


export default function EditProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: ''
    });

    const distpatch = useDispatch();
    const history = useHistory();
    const productEdit = useSelector(state => state.products.productEdit);

    useEffect(() => {
        setProduct(productEdit);
    }, [productEdit]);

    const onChangeForm = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const { name, price } = product;

    const submitEditProduct = e => {
        e.preventDefault();

        distpatch(editProductAction(product));

        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>
                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" className="form-control" placeholder="Potato" name="name" value={name} onChange={onChangeForm} />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input type="number" className="form-control" placeholder="12" name="price" value={price} onChange={onChangeForm} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
