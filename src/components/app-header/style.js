import styled from "styled-components"

export const HeaderWrapper = styled.div`

    border-bottom: 1px solid #eee;

    background-color: #fff;
    .left{
        color: skyblue;
    }
    .center {
        color: bisque;
    }
    .right{
        color: purple;
    }

    &.fixed {
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
    }
    .content {
        z-index: 19;
        background-color: #fff;
        position: relative;
        .top{
            display:flex;
            align-items:center;
            height: 80px;
        }

    }
    .cover {
        position: fixed;
        z-index: 9;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.3);
    }

`

export const SearchAreaWrapper = styled.div`
    transition: height 250ms ease;
    height: ${props => props.isSearch ? "100px":"0"};
`