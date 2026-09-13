import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/SearchSlice';

const SearchBar = () => {

    const [text, SetText] = useState('')

    const dispatch = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        dispatch(setQuery(text));
        SetText('');
    }

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}
        className='flex bg-(--c1) gap-5 py-10 px-14'>

            <input
            required
            value={text}
            onChange={(e)=>{
                SetText(e.target.value);
            }}
            className='w-full border-2 px-6 py-3 text-xl rounded outline-none'
            type='text'
            placeholder='Search anything...'></input>

            <button className='active:scale-95 border-2 cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default SearchBar