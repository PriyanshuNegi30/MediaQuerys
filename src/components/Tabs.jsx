import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/SearchSlice';

const Tabs = () => {
    const tabs = ['photos','videos','GIF'];
    const dispatch = useDispatch();
    const activetab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-10 p-10'>
        {tabs.map((val,idx)=>{

            return(
             <button 
             className={`${(activetab === val?'bg-blue-700':'bg-gray-900')} bg-emerald-600 cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
             key={idx}
             onClick={()=>{
                dispatch(setActiveTabs(val));
            }}>{val}
             </button>
            )
        })}
    </div>
  )
}

export default Tabs