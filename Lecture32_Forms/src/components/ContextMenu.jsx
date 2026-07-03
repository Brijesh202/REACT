import React from 'react'

export default function ({menuPosition, setMenuPosition, setExpenses, rowId}) {
  if(!menuPosition.left){
    return
  }
  return (
    <div className='context-menu' style={menuPosition}>
        <div onClick={() => {
          console.log("edit")
          setMenuPosition({})
        }}>Edit</div>
        <div onClick={() => {
          setExpenses((prevState) => prevState.filter(expense => expense.id !== rowId))
          setMenuPosition({})
        }}>Delete</div>
    </div>
  )
}
