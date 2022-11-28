import { useDispatch, useSelector} from "react-redux"
import {useState} from "react"
import { AddData } from "../redux/dataMap"
export default function InputMenu (){
const {data} = useSelector((state)=> state.dataMap)
const [Value, setValue]= useState('')
const dispatch = useDispatch();
const handleClick = ()=>{
FetchData(Value)
}
async function FetchData(item){
        fetch(`https://discover.search.hereapi.com/v1/discover?at=40.7307999,-73.9973085&limit=2&q=${item}&apiKey=k2pDqKQ6Seg9hbun5hLy5sdZKAYXxBfjIi_BkxXclGY`)
        .then((response) => {
          return response.json();
        })
        .then((recurso) => {
          dispatch(AddData(recurso))
          console.log(data)
          return recurso
        })
    }

return(
  <>
  <input type='text' onChange={(e)=>{setValue(e.target.value)}}></input>
  <button onClick={handleClick}>Send</button>
  <p>{data}</p>
  </>
)
}