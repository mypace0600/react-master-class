import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

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

interface PriceProps{
    coinId:string;
}

function Price({coinId}:PriceProps){
    const { isLoading, data } = useQuery<IHistorical[]>
    (["priceHistory", coinId], ()=>fetchCoinHistory(coinId));
    return <div> { isLoading ? "Loading price..." : (
        <ApexChart
            type="line"
            series={[
                {
                    name: "Price",
                    data: data?.map(price => price.high),
                } as any
            ]}
            options={{
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
            }}
        />
    )}</div>
}

export default Price;