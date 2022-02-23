import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './TableView.css'

const TableView = ({users, deleteUser, editRow}) => {
  return (
    <div>
        { users.length > 0 ? (
            <table id="customers">
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Expiry Date </th>
                    <th>Cost Price</th>
                    <th>Sell Price</th>
                    <th>Discount</th>
                    <th>Discounted Sell Price</th>
                    <th>GST</th>
                    <th>Final Price</th>
                    <th> Edit / delete </th>
                </tr>
                    {users.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.category} </td>
                                <td>{data.description}</td>
                                <td>{data.expiryDate} </td>
                                <td>{data.costPrice} </td>
                                <td>{data.sellPrice} </td>
                                <td>{data.discount} </td>
                                <td>{data.discountedSellPrice} </td>
                                <td>{data.GST} </td>
                                <td>{data.finalprice} </td>
                                <td>
                                    <button onClick={() => editRow(data)}>Edit</button>
                                    <button onClick={() => deleteUser(data.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </table>) : (
                <div className='container'>
                    <h4>No Data available</h4>
                </div>
            )}        
    </div>
  )
}

export default TableView