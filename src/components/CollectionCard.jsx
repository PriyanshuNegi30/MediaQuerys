import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removetoast } from '../redux/features/CollectionSlice';

const CollectionCard = ({item}) => {
    const dispatch = useDispatch();

    const removefromCollection = (item)=>{
        dispatch(removeCollection(item));
        dispatch(removetoast());
    }

  return (
    <div className='w-[18vw] h-60 relative bg-white rounded-xl overflow-hidden '>
        <a target='_blank' className='h-full' href={item.url}>
            {item.type == 'photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt=''></img>:''}
            {item.type == 'video'?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}
            {item.type == 'gif'?<img className='h-full w-full object-cover object-center' src={item.src} alt=''></img>:''}
        </a>
        <div id='bottom' className=' flex justify-center items-center gap-5 text-white  w-full py-6 px-4 absolute bottom-0'>
            <h4 className='text-xs font-semibold h-12 overflow-hidden capitalize'>{item.title}</h4>
            <button
            onClick={()=>{
              removefromCollection(item)
            }}
             className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-2 font-medium cursor-pointer' 
             >remove</button>
        </div>
    </div>
  )
}

export default CollectionCard