// websocketservice.js

let socketBTC;
let socketSOL;

export function connectWebSocket(updateBTCPrice, updateSOLPrice, updateETHPrice) {
    const socketUrl = 'wss://stream.binance.com:9443/ws';
  
    const subscriptionMessage = {
        method: 'SUBSCRIBE',
        params: [
            'btcusdt@aggTrade', // BTC price
            'solusdt@aggTrade',  // SOL price
            'ethusdt@aggTrade'  // ETH price
        ],
        id: 1
    };

    const socket = new WebSocket(socketUrl);
  
    socket.onopen = () => {
        socket.send(JSON.stringify(subscriptionMessage));
    };

    socket.onmessage = (event) => {
        const eventData = JSON.parse(event.data);
        if (eventData.s === 'BTCUSDT') {
            updateBTCPrice(eventData.p);
        } if (eventData.s === 'SOLUSDT') {
            updateSOLPrice(eventData.p);
        } else if (eventData.s === 'ETHUSDT') {
            updateETHPrice(eventData.p);
        }

        
    };

    socket.onclose = () => {
        connectWebSocket(updateBTCPrice, updateSOLPrice, updateETHPrice);
    };
}
