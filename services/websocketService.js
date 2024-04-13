
let socketBTC;
let socketSOL;

export function connectWebSocket(updateBTCPrice, updateSOLPrice, updateETHPrice) {

    let socketUrl = 'wss://ws-feed.pro.coinbase.com';
    let subscriptionMessage = {
        type: 'subscribe',
        product_ids: ['BTC-USD', 'SOL-USD', 'ETH-USD'],
        channels: ['ticker']
    };

    const socket = new WebSocket(socketUrl);
  
    socket.onopen = () => {
        socket.send(JSON.stringify(subscriptionMessage));
    };

    socket.onmessage = (event) => {
        const eventData = JSON.parse(event.data);
        if (eventData.product_id === 'BTC-USD') {
            updateBTCPrice(eventData.price);
        } else if (eventData.product_id === 'SOL-USD') {
            updateSOLPrice(eventData.price);
        } else if (eventData.product_id === 'ETH-USD') {
            updateETHPrice(eventData.price);
        }
    };
    

    socket.onclose = () => {
        connectWebSocket(updateBTCPrice, updateSOLPrice, updateETHPrice);
    };
}
