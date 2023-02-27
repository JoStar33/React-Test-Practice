import styled from "styled-components";

interface colorType {
  color: string,
  width: number,
  height: number
}

export const FunnyButtonContainer = styled.button<colorType>`
background-color: ${(props) => props.color};
width: ${(props) => props.width + "rem"};
height: ${(props) => props.height + "rem"};
font-size: large;
font-weight: 900;
border-radius: 20px;
`;