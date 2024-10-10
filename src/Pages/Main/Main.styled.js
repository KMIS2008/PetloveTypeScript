import styled from "styled-components";

export const ContainerMain = styled.div`  
position: relative;
display: flex;
  justify-content: center;
  align-items: center;
`

export const Svg = styled.svg`  
position: absolute;
cursor: pointer;

width: 190px;
height: 50px;

  @media (min-width: 768px) {

    width: 374px;
    height: 100px;
  }
`