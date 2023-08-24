import styled from "styled-components"
import coverImg from "@/assets/img/cover_01.jpeg"

export const BannerWrapper = styled.div`
    height: 529px;
    /* background: url("@/assets/img/cover_01.jpeg"); */
    /**不能这样写，因为在webpack打包时路径会变化 */
    background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
    /* background: url(${coverImg}) center/cover; */

`