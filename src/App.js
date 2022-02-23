import React, { useState } from 'react'
import AddForm from './component/form/AddForm'
import EditForm from './component/form/EditForm'
import TableView from './component/form/TableView'
import './index.css'

const App = () => {
  const usersData = [
    // { 
    //     id: 1,
    //     name: 'xyz',
    //     category: 'A',
    //     description: 'Hello D1',
    //     expiryDate: '2022/07/12',
    //     costPrice: '123',
    //     sellPrice: '345',
    //     discount: '10',
    //     discountedSellPrice: '1',
    //     GST: '32',
    //     finalprice: '234'
    // },
    // { 
    //     id: 2, 
    //     name: 'Shabbir',
    //     Category: 'A',
    //     Description: 'Hello D1',
    //     expiryDate: '2022/07/12',
    //     costPrice: '123',
    //     sellPrice: '345',
    //     discount: '10',
    //     discountedSellPrice: '1',
    //     GST: '32',
    //     finalprice: '234'
    // },
    // { 
    //     id: 3, 
    //     name: 'Umrali',
    //     Category: 'A',
    //     Description: 'Hello D1',
    //     expiryDate: '2022/07/12',
    //     costPrice: '123',
    //     sellPrice: '345',
    //     discount: '10',
    //     discountedSellPrice: '1',
    //     GST: '32',
    //     finalprice: '234'
    // }
  ]
  const [users, setUsers] = useState(usersData)
  const [edit, setEdit] = useState(false)
  const initialEditForm = {
    id: null,
    name: '',
    category: '',
    description: '',
    expiryDate: '',
    costPrice: '',
    sellPrice: '',
    discount: '',
    discountedSellPrice: '',
    GST: '',
    finalprice: ''
  }
  const [currentUser, setCurrentUser] = useState(initialEditForm)
  

  // Adding a user
  const addUser = (data, finalPrice) => {
    data.id = users.length + 1
    data.finalprice = finalPrice
    setUsers([...users, data])
    console.log("Add User Function is working", users)
  }
  // Deleting a user
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))    
  }

  // Updating a users
  const editRow  = (user) => {
    setEdit(true)

    setCurrentUser({
      id: user.id,
      name: user.name,
      category: user.category,
      description: user.description,
      expiryDate: user.expiryDate,
      costPrice: user.costPrice,
      sellPrice: user.sellPrice,
      discount: user.discount,
      discountedSellPrice: user.discountedSellPrice,
      GST: user.GST,
      finalprice: user.finalprice
    })
  }

  const updateUser = (id, updatedUser) => {
    setEdit(false)
    setUsers(users.map((user) => (user.id === id ?  updatedUser : user)))
  }

  return (
    <div className="container">
      {/* Add Form */}      
      { edit ? (<h4>Edit Form</h4>) : (<h4>Add Form</h4>) }
      <div className="add_form">
        {edit ? (<EditForm  updateUser={updateUser} currentUser={currentUser} />) : (<AddForm addUser={addUser} />)}
      </div>
      <hr />
      {/* User Table */}
      <div className="user_table">
        <TableView editRow={editRow} deleteUser={deleteUser} users={users} />
      </div>
    </div>
  )
}

export default App