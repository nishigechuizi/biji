import { styled } from "styled-components";

export const RightWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    color: ${props => props.theme.text.primaryColor};
    font-size: 14px;
    font-weight: bold;

    .btns {
        display: flex;
        align-items: center;

        .btn{
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            cursor: pointer;
            border-radius: 22px;

            &:hover {
                background-color: #f5f5f5;
            }
        }
    }
    .profile {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        width: 77px;
        height: 42px;
        margin-right: 24px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        cursor: pointer;
        color: #999;

        /* transition: box-shadow 0.2s case;
        &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,0.18);
        }   */
        ${props => props.theme.mixin.boxShadow}
    }
`