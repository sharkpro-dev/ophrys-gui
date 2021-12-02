import axios, { AxiosResponse } from "axios";

class APIsRestClient {

    public getSubscriptions() : Promise<any[]> {
        return axios.get('http://localhost:9000/subscriptions', {
            params: {
            providerId: "BinanceProvider"
        }}).then((response: AxiosResponse<any, any>) => response.data.result.map( (s: string) => {return { id: s}} ));
    }

    public subscribe(stream :string) : Promise<any[]> {
        return axios.post('http://localhost:9000/stream/subscribe',{

                providerId: "BinanceProvider",
                stream: stream
        }, {
            headers: { 
                'Content-Type' : 'application/json' 
            }
        });
    }
}

const apisRestClient = new APIsRestClient();
export default apisRestClient;