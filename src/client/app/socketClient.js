import SockJS from 'sockjs-client';
import { Stomp } from 'stompjs/lib/stomp'

export default class Socket {
    constructor() {
        this.stompClient = Stomp.over(new SockJS('http://localhost:8080/gs-guide-websocket'));
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        // this.sendString = this.sendString.bind(this);
        console.log('init');
    }
    connect() {
        // var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
        // this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, function (frame) {
            //setConnected(true);
            console.log('Connected: ' + frame);
            this.stompClient.subscribe('/topic/greetings', function (greeting) {
                alert(JSON.parse(greeting.body).content);
            });
        });
        return this.stompClient;
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        //setConnected(false);
        console.log("Disconnected");
    }
}

// sendString(string) {
//     stompClient.send("/app/hello", {}, JSON.stringify({ 'name': string.val() }));
// }
// }