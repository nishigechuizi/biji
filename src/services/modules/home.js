import hyRequest from "..";

export function getHomeGoodPriceData(){
    return hyRequest.get({
        url:"/home/goodprice"
    })
}

export function getHomeHighScoreData(){
    return hyRequest.get({
        url:"/home/highscore"
    })
}