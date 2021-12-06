import axios, { AxiosResponse } from "axios";
import OphrysDepth from "../model/ophrys-depth.model";
import OphrysTicker from "../model/ophrys-ticker.model";

class MarketDataRestClient {

    public getDepth(asset: string) : Promise<OphrysDepth> {
        return axios.get('http://localhost:9000/asset/depth', {
            params: {
                asset: asset
        }}).then( r => r.data);
    }

    public getTicker(asset: string) : Promise<OphrysTicker> {
        return axios.get('http://localhost:9000/asset/ticker', {
            params: {
                asset: asset
        }}).then( r => r.data);
    }
}

const marketDataRestClient = new MarketDataRestClient();
export default marketDataRestClient;