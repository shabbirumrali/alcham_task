import React, { useState } from 'react'
import './form.css'

const AddForm = ({ addUser }) => {
    const initialState = {
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
    const [data, setData] = useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })        
    }
    const finalPrice = (data.sellPrice - data.discountedSellPrice) + (data.costPrice*data.GST/100)
  return (
    <>
      <form onSubmit={(e) => {
          e.preventDefault()        
        // console.log("data value in add form", data)
        addUser(data, finalPrice)
        setData(initialState)
      }}>
        <div className="form_container">
            <div className="form_control">
                <label htmlFor="">Name*</label>
                <input type="text" placeholder='Enter your name' name='name' value={data.name} onChange={handleInputChange} required maxlength={30} />
            </div>
            <div className="form_control">
                <label htmlFor="category">Category*</label>
                <select name="category" id="category" value={data.category} onChange={handleInputChange} >                   
                    <option value="">None</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>                      
            </div>
            <div className="form_control">
                <label htmlFor="">Description*</label>
                <textarea placeholder='Enter your Description' name='description' value={data.description} onChange={handleInputChange} required ></textarea>
            </div>
        </div>
        <div className="form_container">
            <div className="form_control">
                <label htmlFor="">Expiry Date*</label>
                <input type="date" placeholder='Enter expiry data' name='expiryDate' value={data.expiryDate} onChange={handleInputChange} required />
            </div>
            <div className="form_control">
                <label htmlFor="">Cost Price*</label>
                <input type="number" placeholder='Enter Cost Price' name='costPrice' min={2} value={data.costPrice} onChange={handleInputChange} required />
            </div>
            <div className="form_control">
                <label htmlFor="">Sell Price*</label>
                <input type="number" placeholder='Enter Sell Price' min={parseInt(data.costPrice) + 1} name='sellPrice' value={data.sellPrice} onChange={handleInputChange} required />
            </div>
        </div>
        <div className="form_container">
            <div className="form_control">
                <label htmlFor="">Discount*</label>
                <input type="number" placeholder='Discount' min={1} name='discount' value={data.discount} onChange={handleInputChange} required />
            </div>
            <div className="form_control">
                <label htmlFor="">Discounted Sell Price*</label>
                <input type="number" placeholder='Enter Cost Price' max={parseInt(data.sellPrice) - 1} name='discountedSellPrice' value={data.discountedSellPrice} onChange={handleInputChange} required />
            </div>
            <div className="form_control">
                <label htmlFor="">GST in %*</label>
                <input type="text" placeholder='GST' name='GST' value={data.GST} onChange={handleInputChange} required />
            </div>
        </div>
        <div className="form_container">
            <div className="form_control">
                <div className='price_tracker'>
                    <span>Real time price tracker</span>
                    <p>GST included: {data.sellPrice*data.GST/100}/- </p>
                    <p>Final product price price {finalPrice}/- </p>
                </div>
            </div>
            <div className="form_control">
                <button type='submit'>Submit</button>
            </div>
            <div className="form_control">
                <button>reset</button>
            </div>
        </div>
    </form>
    </>
    
  )
}

export default AddForm