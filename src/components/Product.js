import React from 'react'
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEditAction } from '../actions/productsActions'
import Swal from 'sweetalert2';

export default function Product({ product }) {
    const { name, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductAction(id));
            }
        });
    }

    const redirect = product => {
        dispatch(getProductEditAction(product));
        history.push(`/products/edit/${product.id}`);
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="actions">
                <button type='button' onClick={() => redirect(product)} className="btn btn-primary mr-2">Edit</button>
                <button
                    type='button'
                    className="btn btn-danger"
                    onClick={() => confirmDelete(id)}
                >Delete</button>
            </td>
        </tr>
    )
}
