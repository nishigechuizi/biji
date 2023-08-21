import { styled } from "styled-components";

export const LeftWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    /* color: var(--primary-color); 从variables.less里面拿 */
    color: ${props => props.theme.color.primaryColor};

    .logo {
        margin-left: 24px;
        cursor: pointer;
    }
`