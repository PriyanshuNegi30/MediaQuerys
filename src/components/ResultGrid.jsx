import {useEffect } from 'react'
import {fetchPhotos,fetchVideos,fetchGIF} from '../API/MediaApi'
import {setLoading,setError,setResult} from '../redux/features/SearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
  const dispatch = useDispatch();
  const {query,activeTab,result,loading,error} = useSelector((store)=>store.search);

  const getData = async ()=>{

    try {

      dispatch(setLoading());

      let data = [];
      if(activeTab == 'photos'){
        let response = await fetchPhotos(query);
        data = response.results.map((item)=>({
          id:item.id,
          type:'photo',
          title:item.alt_description,
          thumbnail:item.urls.small,
          src:item.urls.full,
          url:item.links.html
        }));
      }

      if(activeTab =='videos'){
        let response = await fetchVideos(query);

        data = response.videos.map((item)=>({
          id:item.id,
          type:'video',
          title:item.user.name || 'video',
          thumbnail:item.image,
          src:item.video_files[0].link,
          url:item.url
        }));

      }

      if(activeTab =='GIF'){
        
        let respsonse = await fetchGIF(query);
        console.log(respsonse.data)
        data = respsonse.data.map((item)=>({
          id:item.id,
          type:'gif',
          title:item.username || 'gif',
          thumbnail:item.images.fixed_width_small.url,
          src:item.images.original.url,
          url:item.url
        }));
      }

      dispatch(setResult(data));

    }catch(error){
      dispatch(setError(error.message));
    }
  }

  useEffect(()=>{

    if(!query){
      return;
    }

    getData();
  },[query,activeTab,dispatch]);

  if(error){
    return <h1>error</h1> 
  }

  if(loading){
    return <h1>Loading</h1>
  }

  return (
    <div  className='flex w-full justify-center flex-wrap gap-3 overflow-auto '>
      {result.map((item,idx)=>{

        return <div key={idx}>
          <ResultCard item={item}/>
        </div>
      })}
    </div>
  )
}

export default ResultGrid