import React, { useState } from 'react'
import './AddNewProductForm.css'
import Input from '../shared/Input/Input'
import { Container } from 'react-bootstrap'
import Button from '../shared/Button/Button'
import { useNavigate } from 'react-router-dom'

const AddNewProductForm = () => {
  let navigate = useNavigate()
  const [newItemData, setNewItemData] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('http://localhost:5000/add_new_item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItemData),
    })
      .then((res) => res.json())
      .then((data) => navigate('/'))
  }
  const handleChange = (e) => {
    const target = e.target

    setNewItemData({ ...newItemData, [target.name]: target.value })
  }

  return (
    <div>
      <Container>
        <div className="addNewProductFormMainDiv">
          <div className="addNewProductFormInnerDiv">
            <h2 className="addNewItemTitle">Add New Item</h2>
            <form className="addNewProductForm" onSubmit={handleSubmit}>
              <Input
                isFloatingLabelInput={true}
                label="Title"
                name="title"
                value=""
                type="text"
                placeholder="Title"
                onChange={handleChange}
              />
              <Input
                isFloatingLabelInput={true}
                label="Image Source"
                name="image"
                value=""
                type="text"
                placeholder="Image Source"
                onChange={handleChange}
              />
              <Input
                isFloatingLabelInput={true}
                label="Description"
                name="description"
                value=""
                type="text"
                placeholder="Description"
                onChange={handleChange}
              />
              <Input
                isFloatingLabelInput={true}
                label="Price"
                name="price"
                value=""
                type="number"
                placeholder="Price"
                onChange={handleChange}
              />
              <Button
                btnClass="btn-primary addNewBtn"
                name="Add New"
                type="submit"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AddNewProductForm
