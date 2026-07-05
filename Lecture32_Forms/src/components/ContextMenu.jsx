import React from 'react'

export default function ({menuPosition, setMenuPosition, setExpenses, setExpense, expenses, rowId, setEditingRowId}) {
  if(!menuPosition.left){
    return
  }
  return (
    <div className='context-menu' style={menuPosition}>
        <div onClick={() => {
          // console.log("edit")
          const {title, category, amount} = expenses.find((expense) => expense.id === rowId)
          // console.log(foundExpense)
          setExpense({title, category, amount})
          setEditingRowId(rowId)
          setMenuPosition({})
        }}>Edit</div>

        <div onClick={() => {
          setExpenses((prevState) => prevState.filter(expense => expense.id !== rowId))
          setMenuPosition({})
        }}>Delete</div>
    </div>
  )
}
