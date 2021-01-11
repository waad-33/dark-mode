import { createGlobalStyle } from "styled-components"

export const lightTheme ={
    body:'#eff0ea',
    fontColor:'#000',
    moonColor:'#000',
    svgColor:'#252524',
    
    buttonColor:'#fa7c91',
    
}
export const darkTheme ={
    body:'#000',
    fontColor:'#fff',
    moonColor:'#aa7ae6',
    svgColor:'#ffa500',
    
    buttonColor:'#02dac6',
   
  
}
export const GlobalStyles = createGlobalStyle`
 body {
     background-color:${(props) =>props.theme.body}
 }

`
export const buttonTheme ={
    backgroundColor:"#8a4d76", 
    fontColor:'#000',
       
    }
    export const darkButtonTheme = {
        backgroundColor:"#ba86fc",
        fontColor:'#fff',
        
    }


