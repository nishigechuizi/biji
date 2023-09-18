import * as actionTypes from "./constants"

const initialState = {
    currentPage:1, //当前页面
    roomList:[],   //房间列表
    totalCount:0   //总数据个数 
}

function reducer(state = initialState,action){
    console.log(action);
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_PAGE:
            return {...state,currentPage:action.currentPage}
        case actionTypes.CHANGE_ROOM_LIST:
            return {...state,roomList:action.roomList}
        case actionTypes.CHANGE_TOTAL_COUNT:
            return {...state,totalCount:action.totalCount}
        default:
            return state
    }
}

export default reducer