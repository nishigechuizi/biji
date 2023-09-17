//rgk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getHomeGoodPriceData,getHomeHighScoreData,getHomeDiscountData,getHomeHotRecommendData,getHomeLongforData,getHomePlusData} from "@/services"

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
    getHomeHotRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res=> {
        dispatch(changePlusInfoAction(res))
    })
})

const homeSlice = createSlice({
    name:"home",
    initialState:{
        goodPriceInfo:{},
        highScoreInfo:{},
        discountInfo:{},
        recommendInfo:{},
        longforInfo:{},
        plusInfo:{}
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
        },
        changeRecommendInfoAction(state,{payload}){
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state,{payload}){
            state.longforInfo = payload
        },
        changePlusInfoAction(state,{payload}){
            state.plusInfo = payload
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
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer