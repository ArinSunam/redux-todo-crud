import { useDispatch } from "react-redux"
import { addToDo } from '../features/todo/todoSlice'
import { useState } from "react";


const Form = () => {

  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  console.log('input', input)
  const trimmedInp = input.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trimmedInp) {

      dispatch(addToDo(trimmedInp))
      setInput('')
    }
  }


  return (
    <form onSubmit={handleSubmit} className="flex justify-center" >
      <input type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);

        }
        }
        placeholder="Write tasks..."
        className="py-[8px] px-[20px] text-black outline-none  rounded-l-lg" />
      <button type="submit" className="py-[8px] px-[12px] bg-blue-800 rounded-r-lg pointer-cursor">Add</button>

    </form>
  )
}

export default Form
