const { createGlobalStyle } = require("styled-components");


export const GlobalStyle = createGlobalStyle`

${"" /* Variables */}

:root {
      /* Colors */
   --background: #FCECBB;
   --black:#3D4E55;
   --kahve:#AA6161;
   --red:#E84437;
   --white:#FCECBB;
   --nav:#3D4E55;
   --nav2:#3f3d56;
}

${"" /* //basic style  */}

*,*::before,*::after{
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family: 'Comfortaa', cursive;
 }
 html{
   scroll-behavior:smooth;
 }
     body,
     html,
     a {
        font-family: 'Comfortaa', cursive;
             }
     body {
         margin:0;
         padding:0;
         border: 0;
         outline: 0;
         background: var(--background);

         overflow-x: hidden;
     }
     h1,
     h2,
     h3,
     h4,
     h5,
     h6 {
         margin:0;
         padding:0;
     }
     a {

         text-decoration: none;
         outline: none;
     }

     a:link {
        color: var(--red);
      }
      
      /* visited link */
      a:visited {
        color: var(--kahve);
      }
      
      /* mouse over link */
      a:hover {
        color: var(--red);
      }
      
      /* selected link */
      a:active {
        color: var(--kahve);
      }
     button{
         border:none;
         outline:none;
         &:focus{
             outline:none;
         }
     }

     *:focus {
         outline: none;
     }
     
     img{
         width: 100%;
         height: auto;
     }

     `
