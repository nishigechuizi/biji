import * as actionTypes from "./constants"
import {getEntireRoomList} from "@/services/modules/entire"
export const changeCurrentPageAction = (currentPage) => ({
    type:actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type:actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type:actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
    type:actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction = (page = 0) => {


    //新的函数
    return async (dispatch,getState) => {
        //0.修改currentpage
        dispatch(changeCurrentPageAction(page))
        //1.根据页码获取更新的数据
        // const currentPage = getState().entire.currentPage
        dispatch(changeIsLoadingAction(true))
        const res = await getEntireRoomList(page*20)
        dispatch(changeIsLoadingAction(false))

        //2.获取最新的数据 保存redux的store中
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}