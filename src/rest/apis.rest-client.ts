import axios, { AxiosResponse } from "axios";

class APIsRestClient {

    public getSubscriptions() : Promise<any[]> {
        return axios.get('http://localhost:9000/subscriptions', {
            params: {
            providerId: "BinanceProvider"
        }}).then((response: AxiosResponse<any, any>) => response.data.result.map( (s: string) => {return { id: s}} ));
    }
}

const apisRestClient = new APIsRestClient();
export default apisRestClient;