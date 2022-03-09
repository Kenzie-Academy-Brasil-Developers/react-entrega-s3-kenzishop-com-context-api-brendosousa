import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body, input, button {
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
}
input{
  background-color: transparent;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
ul{
    list-style: none;
}
 
`;
