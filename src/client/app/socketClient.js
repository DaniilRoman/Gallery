import {SockJS} from 'sockjs-client';
import {Stomp} from 'react-stomp'

export default class Socket {
    constructor(){
    }
connect() {
    var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        //setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            alert(JSON.parse(greeting.body).content);
        });
    });
    return stompClient;
}

disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

sendString(string) {
    stompClient.send("/app/hello", {}, JSON.stringify({ 'name': string.val() }));
}
}

//export {Socket};