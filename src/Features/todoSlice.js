import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id: 1,
        text : "Hello world"
    }]
}

export const todoSlice =  createSlice({
  name : "todo",
  initialState,
  reducers:{
addtodo : (state  , action) => {
        const todo = {
          id : nanoid(),
          text: action.payload  
        }
        state.todos.push(todo)
   },
 removetodo : (state , action) => {
 state.todos = state.todos.filter((todo) => 
   todo.id !== action.payload
 )
 }, 
 updatetodo : (state , action) => {
  state.todos = state.todos.map ((todo) => 
    todo.id == action.payload.id ?{...todo , text: action.payload.text} : todo
)
}
  }
})


export const {addtodo , removetodo , updatetodo}  = todoSlice.actions

export default todoSlice.reducer