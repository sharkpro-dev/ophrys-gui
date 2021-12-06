export default interface OphrysTicker {
    time: number;
    symbol: string;
    price_change: number;
    price_change_percent: number;
    vwap: number;
    last_price: number;
    last_quantity: number;
    opening_price: number;
    high_price: number;
    low_price: number;
    trave_volume: number;
    number_of_trades: number;
}