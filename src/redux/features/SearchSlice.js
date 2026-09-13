import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTab:'photos',
        result:[],
        loading:false,
        error:null
    },

    reducers:{
        setQuery:(state,action)=>{
            state.query = action.payload;
        },
        setActiveTabs:(state,action)=>{
            state.activeTab = action.payload;
        },
        setResult:(state,action)=>{
            state.loading = false;
            state.result = action.payload;
        },
        setLoading:(state)=>{
            state.loading=true;
            state.error = null;
        },
        setError:(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        clearResult:(state)=>{
            state.result = []
        }
    }
});

export const {setQuery,setActiveTabs,setResult,setLoading,setError,clearResult} = searchSlice.actions

export default searchSlice.reducer;