import axios, { AxiosResponse } from "axios";
import OphrysWorker from "../model/ophrys-worker.model";

class EngineRestClient {

    public getWorkers() : Promise<OphrysWorker[]> {
        return axios.get('http://localhost:9000/workers').then((response: AxiosResponse<any, any>) => Object.values(response.data));
    }
}

const engineRestClient = new EngineRestClient();
export default engineRestClient;