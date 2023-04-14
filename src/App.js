import {useReducer, useState, useEffect} from "react";
import ShowItems from './Components/ShowItems'
import InputItems from "./Components/InputItems"
import ConnectToDataBase from "./Components/Database";


function App() {

  const [idd, setId] = useState(0)
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [ms, setMs] = useState('')
  const [time, setTime] = useState(new Date())
  function reducer(data, action){
    if (action.type === "add"){
      if (action.message !== ''&& action.author !==''){
        setId(e=>e+ 1)
        return[
          ...data, {id:idd , message: action.message, author: action.author, time: time.toLocaleString()}
        ]


      }
      else{
        return data;

      }

    }
    if (action.type ==="del"){
      setId(e=>e+ 1)
      return [
          ...data.filter(i=>i.id !== action.item.id)
      ]
    }
    if(action.type === "newitem"){
      return [
          ...data.map(i=>{
            if (i.id === action.obj.id){
              return action.obj;
            }
            else return i;
          })
      ]
    }
  }

  const [data, dispatch] = useReducer(reducer, [{message: "wqewqewq", author: "Аян"}]);



  function Add(e){
    let text = e.target.value;
    setText(text)

  }
  function AddAuthor(e){
    let authora = e.target.value
    setAuthor(authora)
  }
  function hundleAdd(e) {
    e.preventDefault();
    dispatch({type: "add", message: text, author: author})
    setText('')
    setAuthor('')
  }
  function Del(ditem){
    console.log(ditem)
    dispatch({type: "del", item: ditem})
  }
function hundleChange(myobj){
  dispatch({
    type: "newitem",
    obj: myobj
  })
}
  return (
    <div className="App">
      <InputItems  methodAdd={Add} methodHundleAdd = {hundleAdd} valueText = {text} valueAuthor = {author} hangeAuthot = {AddAuthor}/>
      <ShowItems dataData = {data} dataDel = {Del} hchandge = {hundleChange}/>
    </div>
  );
}

export default App;
