import Form from "./components/form"
import List from "./components/list"


function App() {


  return (
    <div className="flexo flex-col items-center pt-[10px]">
      <h1 className="text-4xl font-semibold mb-[10px] text-center">Todo</h1>
      <Form />
      <List />
    </div>
  )
}

export default App
