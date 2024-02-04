// import { useParams } from "react-router-dom";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface IHistorical {
    time_open:string;
    tiem_close:string;
    open:number;
    high:number;
    low:number;
    close:number;
    volume:number;
    market_cap:number;
}

interface ChartProps{
    coinId:string;
}

function Chart({coinId}:ChartProps){
    // const params = useParams();
    // console.log(params);
    const { isLoading, data } = useQuery<IHistorical[]>(["coinHistory", coinId],()=>fetchCoinHistory(coinId));
    
    return <div>{ isLoading ? "Loading chart..." : (
    <ApexChart 
        type="candlestick" 
        series={[
            {
                data:data?.map((price)=> [
                    new Date(price.time_open).getTime(),
                    price.open,
                    price.high,
                    price.low,
                    price.close,
                ])
            } as any
        ]}
        options={{
            plotOptions:{
                candlestick:{
                    colors:{
                        upward:"#DF7D46",
                        downward:"#3C90EB",
                    }
                }
            },
            theme:{
                mode:"dark"
            },
            chart:{
                height:500,
                width:500,
                toolbar:{
                    show:false,
                },
                background:"transparent"
            },
            xaxis:{
                type:"datetime",
            },
            yaxis:{
                tooltip:{
                    enabled:true,
                }
            }
        }}
    />)
    }</div>
}

export default Chart;