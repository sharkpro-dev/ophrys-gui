import coins from "../assets/criptos.json";
class AssetsService {
    constructor(){
        console.log(coins)
    }

    public getCoinLogoUrl(symbol :string){
        symbol = symbol.toUpperCase().replace('USDT', '');
        return "https://cryptologos.cc/logos/thumbs/" + (coins as any)[symbol].key + ".png"
    }

    public getCoinName(symbol :string){
        symbol = symbol.toUpperCase().replace('USDT', '');
        return (coins as any)[symbol].name 
    }
    
}

const assetsService = new AssetsService();
export default assetsService;