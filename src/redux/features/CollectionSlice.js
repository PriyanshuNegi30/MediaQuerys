import { createSlice } from "@reduxjs/toolkit";
import { toast} from "react-toastify"
import { Zoom } from "react-toastify/unstyled";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || [],
}

const Collectionslice = createSlice({
    name:'collection',
    initialState,
    reducers:{

        addCollection:(state,action)=>{
            const alreadyExists = state.items.find(
                items => items.id === action.payload.id
            )

            if(!alreadyExists){
                state.items.push(action.payload);
                localStorage.setItem('collection',JSON.stringify(state.items));
            }
        },
        removeCollection:(state,action)=>{
            state.items = state.items.filter((item)=>{
                return item.id !== action.payload.id
            })
            localStorage.setItem('collection',JSON.stringify(state.items));
        },
        clearCollection:(state,action)=>{
            state.items = []
            localStorage.removeItem('collection');
        },
        addtoast:()=>{
            toast.success('Addeed to collection ✅',{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar:false,
                closeOnclick: false,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme: "dark",
                transition: Zoom
            });
        },
        removetoast:()=>{
            toast.success('Remove from collection ✅',{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar:false,
                closeOnclick: false,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme: "dark",
                transition: Zoom
            });
        }
    }
})

export const {
    addCollection,
    removeCollection,
    clearCollection,
    addtoast,
    removetoast
} = Collectionslice.actions;

export default Collectionslice.reducer;