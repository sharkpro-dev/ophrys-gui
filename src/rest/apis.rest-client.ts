import axios, { AxiosResponse } from "axios";

class APIsRestClient {

    public getSubscriptions() : Promise<any[]> {
        return axios.get('http://localhost:9000/subscriptions').then((response: AxiosResponse<any, any>) => Object.values(response.data));
    }
}

const apisRestClient = new APIsRestClient();
export default apisRestClient;