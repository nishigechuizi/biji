import hyRequest from "..";

//offset 从第几条开始  size  条数
export function getEntireRoomList(offset=0,size=20){
    return hyRequest.get({
        url:"entire/list",
        params: {
            offset,
            size
        }
    })
}