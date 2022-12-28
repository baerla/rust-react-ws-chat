import { useEffect, useRef } from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export default function useWebsocket(onMessage) {
    const ws = useRef(null);

    useEffect(() => {
        if (ws.current !== null) return;
        const wsUri = 'ws://127.0.0.1:8080/ws';
        ws.current = new WebSocket(wsUri);
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = (e) => console.log(e.data);
    }, []);

    useEffect(() => {
        if (!ws.current) return;
        ws.current.onmessage = e => {
            onMessage(e.data)
        };
    }, []);

    const sendMessage = (msg) => {
        if (!ws.current) return;
        ws.current.send(msg);
    }

    return sendMessage;
}
