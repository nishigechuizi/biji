//rgk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getHomeGoodPriceData,getHomeHighScoreData,getHomeDiscountData} from "@/services"

export const fetchHomeDataAction = createAsyncThunk("fetchdata",async (payload,{dispatch})=>{
    // getHomeGoodPriceData().then(res =>{
    //     console.log(res);
    // })
    // const res= await getHomeGoodPriceData()  //两个await是同步  即一个一个按顺序
    // const res1 = await getHomeHighScoreData() 
    // return res 
    getHomeGoodPriceData().then(res=>{
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res =>{
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
})

const homeSlice = createSlice({
    name:"home",
    initialState:{
        goodPriceInfo:{},
        highScoreInfo:{},
        discountInfo:{}
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state,{payload}){
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state,{payload}){
            state.discountInfo = payload
        }
    }
    // extraReducers:{
    //     [fetchHomeDataAction.fulfilled](state,{payload}){
    //         console.log(payload)
    //         state.goodPriceInfo = payload
    //     }
    // }
})

export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction
} = homeSlice.actions

export default homeSlice.reducer