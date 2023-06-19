
import { useState } from 'react';
import { setFrom } from '../formSlice';
import { useDispatch } from 'react-redux';
import {DisplayFrom} from '../Components/DisplayFrom'

export const FormData = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState("");

    const handleOnChange = (e) =>{
        const {value} = e.target; // destructure
        console.log(value)
        setData(value)
    }

    const handleOnSubmit = (e) =>{
      e.preventDefault() //prevent from reloading
      dispatch(setFrom(data)) //this from formSlice
    }

  return (
    <div>
        <form action='' onSubmit={handleOnSubmit}>
            <input type="text" name="text" onChange={handleOnChange} placeholder='Type something'/>
            <button >Submit</button>
        </form>
        <DisplayFrom data={data}/>
    </div>
  )
}
