import styled from "styled-components"

export const ItemWrapper = styled.div`
    box-sizing: border-box;
    width: ${props => props.itemWidth};
    margin: 8px 0;
    padding: 8px;

    .inner {
        width: 100%;
    }

    .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    .desc {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        //从index.js里面拿的，也算父到子吧
        color: ${props => props.verifyColor};
    }

    .name {
        font-size: 16px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        margin: 8px 0;
    }

    .bottom{
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;

        .MuiRating-icon{
            margin-right: -1px;
        }
        .count{
            margin: 0 2px 0 4px;
        }
        .MuiRating-decimal {
            margin-right: -3px;
        }
    }
`