import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
box-sizing:border-box;
}
*,
*::before,
*::after {
    box-sizing:interit;
}
body {
padding:125px 80px 0 ;
margin:0;
font-family:'Monserrat';
}

button {
padding:0;
cursor:pointer;
font-family:'Monserrat';
}

ul {
    padding:0;
    margin:0;
}

`;
export default GlobalStyle;
