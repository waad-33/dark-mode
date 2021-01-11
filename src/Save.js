import styled from 'styled-components'

const StyledSaving = styled.input`
    color:${(props) => props.theme.fontColor};
    border: none;
    border-radius: 4px;
	width: 75px;
	height: 30px;
	background-color:${(props) =>props.theme.backgroundColor} ;
}
`;
function Save (){
    
    return(
		<div >
 <StyledSaving  type="button" value="Save"/>
 </div>
          )
}
export default Save;