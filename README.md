## Browser Test

```js
let json = {
    'chat_type': "TEXT",
    'value': ['value'],
    room_id: 'f277a218-bbc3-439a-845a-973abfb18a4d',
    user_id: 'a4147668-b433-4a08-a88d-0530428e4ae7'
}

let ws = new WebSocket('ws://127.0.0.1:8080/ws');
ws.onmessage = (e) => console.log(e);
ws.onclose = () => console.log('close');
ws.onopen = () => ws.send(JSON.stringify(json));
```