import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/CollectionSlice';

const CollectionPage = () => {
  const dispatch = useDispatch();

  const clear = ()=>{
    dispatch(clearCollection())
  }
  const collection = useSelector((state)=>state.collection.items)
  return (
    <div className='px-10 py-6 overflow-auto'>

      {collection.length>0?<div className='flex justify-between mb-6'>
        <h2 className='text-2xl font-medium'>
          Your Collection
        </h2>
        <button 
        onClick={()=>{
          clear();
        }}
        className='active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 text-lg font-medium rounded'>Clear Collection</button>
      </div>:<h2 className='text-2xl font-medium'>
           Collection is empty
        </h2>}

      

      <div className='flex w-full justify-start flex-wrap gap-3  '>
      {collection.map((item,idx)=>{
        return <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      })}
    </div>
    </div>
  )
}

export default CollectionPage