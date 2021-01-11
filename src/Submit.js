import styled from 'styled-components'
const Submit = styled.input`
border: none;
border-radius: 4px;
width: 75px;
height: 30px;
background-color:${(props) => props.theme.buttonColor};
color:${(props) => props.theme.fontColor};
`;
function Sub (){
    return(
        <div className="col-md-4">
        <Submit  type= "button" value="Submit"/>
        </div>
    )
}
export default Sub;