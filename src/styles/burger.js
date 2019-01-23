import styled from 'styled-components';

export const BurgerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 25px;
    width: 50px;
    position: absolute;
    top: 2%;
    right: 2%;
    z-index: 1;
    cursor: pointer;

    /* -- Testing -- */
    /* background: green;
    top: 0;
    right: 0;
    border-radius: 0 0 0 100px;
    height: 50px; */

    :focus {
      outline: none;
    }
  
`

export const Burger = styled.div`
    height: 0.5px;
    border: 1px solid #fff;
    border-radius: 25%;
    background-color: #fff;
    margin: 2px 0;
    width: ${props => props.width};

    ${BurgerWrapper}:hover & {
      transform: scale(1.05)        
    }${BurgerWrapper}:active & {
      transform: scale(.97)        
    }
`