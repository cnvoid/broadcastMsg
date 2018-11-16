# broadcastMsg
Implement the Observer Pattern in javascript

How to use:
```javascript
var msg = require('broadcastMsg');
import msg from '@/lib/msg'
//using in vue

Vue.prototype.$msg = msg


//Receive a broadcast message
msg.receive('MSG_MARK',function(data){

});

//Emitter a broadcast message

msg.emit('MSG_MARK', data);
```

#Contact me: 
734271284@qq.com 

cnvoid@126.com



