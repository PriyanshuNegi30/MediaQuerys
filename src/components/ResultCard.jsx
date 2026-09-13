import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCollection, addtoast } from "../redux/features/CollectionSlice";

 

const ResultCard = ({item}) => {
  const dispatch = useDispatch();

  const addTocollection = (item)=>{
    dispatch(addCollection(item))
    dispatch(addtoast());
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
              addTocollection(item);
            }}
             className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-2 font-medium cursor-pointer' 
             >Save</button>
        </div>
    </div>
  )
}

export default ResultCard