import styled from 'styled-components'

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
    ContainerStyled,
    ModalStyled,
}
