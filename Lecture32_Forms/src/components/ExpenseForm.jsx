import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

export const ExpenseForm = ({expense, setExpense, setExpenses, editingRowId, setEditingRowId}) => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  

  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      {required: true, message: 'Please enter title.'}, 
      {minLength: 2, message:'Title should be at least 2 characters long.'}],
    category: [
      {required: true, message: 'Please enter a category.'}],
    amount: [
      {required: true, message: 'Please enter an amount.'},
      {pattern: /^[1-9]\d*(\.\d+)?$/, message: 'Please enter a valid number.'}]
  }

  const validate = ((formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if(rule.required && !value){
          errorsData[key] = rule.message
          return true
        }

        if(rule.minLength && value.length < 2){
          errorsData[key] = rule.message
          return true
        }

        if(rule.pattern && !rule.pattern.test(value)){
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

    if(editingRowId){
      setExpenses((prevState) => {
        return (
          prevState.map((prevExpense) => {
            if(prevExpense.id === editingRowId){
              return {...expense,id:editingRowId}
            }
            return prevExpense
          })
        )
      })
       setExpense(
      {
        title: '',
        category: '',
        amount: ''
      })
      setEditingRowId('')
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
        <button className="add-btn">{editingRowId ? 'Save' : 'Add'}</button>
    </form>
  )
}
