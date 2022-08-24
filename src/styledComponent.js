import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 1.1em;
    }
`;

const ContainerStyled = styled.div`
    padding: 10px 5px;
    max-width: 1400px;
    margin: auto;

    ${function(props) {
        if(props.flex === 'header'){
            return `
            display: flex;
            flex-wrap: wrap;
            align-item: center;
            justify-content: space-around;
            `;
        }else if(props.flex === 'card'){
            return `
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: left;
            `;
        }
    }}

  `;

const ModalStyled = styled.div`
    z-index: ${(props) => props.zindex ? props.zindex : '-1'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.status ? 'rgba(0,0,0,.6)' : 'transparent'}; 
    transition: all 250ms ease-in; 
`;


export {
    GlobalStyle,
    ContainerStyled,
    ModalStyled,
}
