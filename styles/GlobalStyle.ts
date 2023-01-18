import { createGlobalStyle ,css } from "styled-components";
import reset from "styled-reset";
import palette from "./palette";

const globalStyle = css`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Noto Sans, Noto sans KR;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
    body {
        background-color: #cbcbcb;
    }
    .max-width {
        position: relative;
        background-color: #fff;
        max-width: 350px;
        border: 1px solid ${palette.gray};
        border-bottom: 0;
        border-top: 0;
        margin: 0 auto;
    }
`;

export default GlobalStyle;