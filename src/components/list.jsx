import { useSelector } from "react-redux"
import { FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

const List = () => {

  const data = useSelector(state => state.todos)
  console.log(data);

  return (
    <ul className="mt-[20px] mx-[303px] space-y-2 ">
      {data?.map((el) => (
        <li key={el.id} className="bg-gray-600 font-medium px-[30px] py-[8px] rounded-md flex items-center justify-between">
          <p className="text-lg">{el.task}</p>

          <div className="space-x-2">
            <button className="bg-green-600 p-[6px] rounded-sm"><FaRegPenToSquare /></button>
            <button className="bg-red-600 p-[6px] rounded-sm"><FaTrash /></button>

          </div>
        </li>
      ))}
    </ul>
  )
}

export default List