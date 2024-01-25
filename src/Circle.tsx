import { useState } from "react";
import styled from "styled-components";

interface CircleProps{
    bgColor:string;
    borderColor?:string;
    text?:string;
}

 
const Container = styled.div<CircleProps>`
    width:100px;
    height:100px;
    background-color:${(props)=>props.bgColor};
    border:1px solid ${(props)=>props.borderColor};
    border-radius:50%;
`;

function Circle({bgColor,borderColor,text="default text"}:CircleProps){
    
    const [counter,setCounter] = useState(1);

    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

export default Circle;


interface PlayerShape{
    name:string;
    age:string;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name}`;

sayHello({name:"nico",age:"12"});
sayHello({name:"hyeonsu",age:"30"});