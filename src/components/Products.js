import React, { Fragment, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productsActions'
import Product from './Product';

export default function Products() {

    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();
        // eslint-disable-next-line
    }, []);

    const products = useSelector(state => state.products.products);
    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">Product List</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">We got an error</p> : null}
            {loading ? <p className="text-center">Loading</p> : null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? 'You do not have products' : (
                        products.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}
