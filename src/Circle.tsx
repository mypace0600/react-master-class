import styled from "styled-components";

interface CircleProps{
    bgColor:string;
}

interface ContainerPrpos{
    bgColor:string;
}

const Container = styled.div<ContainerPrpos>`
    width:100px;
    height:100px;
    background-color:${props=>props.bgColor};
    border-radius:50%;
`;

function Circle({bgColor}:CircleProps){
    return <Container bgColor={bgColor}/ >;
}

export default Circle;


interface PlayerShape{
    name:string;
    age:string;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name}`;

sayHello({name:"nico",age:"12"});
sayHello({name:"hyeonsu",age:"30"});