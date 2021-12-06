import axios, { AxiosResponse } from "axios";

class APIsRestClient {

    public getSubscriptions() : Promise<any[]> {
        return axios.get('http://localhost:9000/subscriptions', {
            params: {
            providerId: "BinanceProvider"
        }}).then((response: AxiosResponse<any, any>) => response.data.result.map( (s: string) => {return { id: s}} ));
    }

    public subscribe(asset :string) : Promise<any[]> {
        return axios.post('http://localhost:9000/asset/subscribe',{

                providerId: "BinanceProvider",
                asset: asset
        }, {
            headers: { 
                'Content-Type' : 'application/json' 
            }
        });
    }
}

const apisRestClient = new APIsRestClient();
export default apisRestClient;