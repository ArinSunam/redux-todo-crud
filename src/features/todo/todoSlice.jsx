import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
  todos: [{ id: 1, task: 'Code a todo list' }]
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newTask = {
        id: nanoid(),
        task: action.payload
      }
      console.log('state', state);
      state.todos.push(newTask)
      
    }
  }
})

export const { addToDo } = todoSlice.actions
export default todoSlice.reducer