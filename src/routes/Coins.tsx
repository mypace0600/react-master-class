import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div`
    padding:0px 20px;
    max-width:480px;
    margin:0 auto;
`;

const Header = styled.header`
    height:15vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Title = styled.h1`
    font-size:48px;
    color:${props=>props.theme.accentColor};
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color:white;
    color:${(props)=>props.theme.bgColor};
    border-radius:15px;
    margin-bottom:10px;
    a{
        padding:20px;
        transition:color 0.2s ease-in;
        display:flex;
        align-items:center;
    }
    &:hover{
       a {
        color:${(props)=>props.theme.accentColor};
       } 
    }
`;

interface ICoin{
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
};

const Loader = styled.span`
    text-align:center;
    display:block;
`;

const Img = styled.img`
    width:25px;
    height:25px;
    margin-right:10px;
`;

function Coins(){
    // const [coins, setCoins] = useState<CoinProps[]>([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     (async()=>{
    //        const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //        const json = await response.json();
    //        setCoins(json.slice(0,100));
    //        setLoading(false);
    //     })();
    // },[]);
    const { isLoading, data } = useQuery<ICoin[]>("allCoins",fetchCoins);
    return (
        <Container>
            <Helmet>
                <title>Coin</title>
            </Helmet>
            <Header>
                <Title>Coin</Title>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0,100).map((coin)=>(
                        <Coin key={coin.id}>
                            <Link to={{
                                pathname:`/${coin.id}`,
                                state:{name:coin.name},
                            }}>
                                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>    
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                        ))}
                </CoinsList>
            )}
        </Container>
    )
}

export default Coins;