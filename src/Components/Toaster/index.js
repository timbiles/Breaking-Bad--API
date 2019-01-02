import React from 'react';
import styled from 'styled-components';

const index = (props) => {
    let arr = []

    for(let i =0; i<=props.search.length; i++){
        for(let key in props.search[i]){
            let x = Object.keys(props.search[i]).find(a => props.search[i][a] === props.search[i][key]);
            let y = props.search[i][key]

            arr.push([x,y])
        }
    }

    console.log(arr.length !== 0 && arr)

    const map = arr.map((e,i) => {
        return <Cont key={i}>
        {
`${e[0]}: ${e[1]}
`
        }
        </Cont>
    })
    return (
        <Container>
            {map}
        </Container>
    );
};

export default index;

const Container = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: calc(40px + 6%);
    background: rgb(174, 174, 174, .99);
    z-index: 999;
    width: 80vw;
`

const Cont = styled.pre`
    display: flex;
`