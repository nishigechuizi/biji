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

export const fetchRoomListAction = () => {
    //新的函数
    return async (dispatch,getState) => {
        //1.根据页码获取更新的数据
        const currentPage = getState().entire.currentPage
        const res = await getEntireRoomList(currentPage*20)

        //2.获取最新的数据 保存redux的store中
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}