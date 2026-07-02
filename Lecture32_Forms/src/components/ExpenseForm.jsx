import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

export const ExpenseForm = ({setExpenses}) => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: ''
  })

  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      {required: true, message: 'Please enter title.'}, 
      {minLength: 5, message:'Title should be at least 5 characters long.'}],
    category: [
      {required: true, message: 'Please enter a category.'}],
    amount: [
      {required: true, message: 'Please enter an amount.'}]
  }

  const validate = ((formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if(rule.required && !value){
          errorsData[key] = rule.message
          return true
        }

        if(rule.minLength && value.length<5){
          errorsData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorsData)

    return errorsData
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult = validate(expense)
    if(Object.keys(validateResult).length){
      return
    }

    // const expense = {title,category,amount,id: crypto.randomUUID()}

    setExpenses((prevState) => [...prevState, {...expense, id: crypto.randomUUID()}])
    setExpense(
      {
        title: '',
        category: '',
        amount: ''
      }
    )
  }




  // const getFormData = (form) => {
  //   const formData = new FormData(form)   
  //   const data = {} 
  //   for(const [key, value] of formData.entries()){
  //     data[key] = value;
  //   }
  //   return data;
  // }



  const handleChange = (e) => {
    // console.log(e.target)
    const {name, value} = e.target
    setExpense((prevState) => ({...prevState, [name]:  value}))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <Input 
          id='title' 
          label='Title' 
          name='title' 
          value={expense.title} 
          onChange={handleChange} 
          error={errors.title}
        />

        <Select
          id='category' 
          label='Category' 
          name='category' 
          value={expense.category} 
          onChange={handleChange} 
          options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
          defaultOption='Select Category'
          error={errors.category}
        />

        <Input 
          id='amount' 
          label='Amount' 
          name='amount' 
          value={expense.amount} 
          onChange={handleChange} 
          error={errors.amount}
        />
        <button className="add-btn">Add</button>
    </form>
  )
}
