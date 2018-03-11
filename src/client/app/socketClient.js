import SockJS from 'sockjs-client';
import { Stomp } from 'stompjs/lib/stomp'

export default class Socket {
    constructor() {
        this.stompClient = Stomp.
            over(new SockJS('http://localhost:8080/gs-guide-websocket'));
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        console.log('init');
    }

    sendMessage(value) {
        this.stompClient.send
            ("/app/hello", {}, JSON.stringify(value));
        alert('A name was submitted: ' + value);//this.state.value
        event.preventDefault();
    }
    connect() {
        // var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
        // this.stompClient = Stomp.over(socket);
        //this.stompClient = 

        this.stompClient.connect(
            { 'Access-Control-Allow-Origin': '*' },
            function (frame) {
                //setConnected(true);
                console.log('Connected: ' + frame);
                if (!(this.stompClient === undefined)) {
                    this.stompClient.subscribe('/topic/greetings',
                        function (greeting) {
                            console.log("111:" + JSON.parse(greeting.body));
                        });
                }
            });

        //console.log('Connected');
        //return this.stompClient;
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        //setConnected(false);
        console.log("Disconnected");
    }
}