class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (typeof event !== 'string') {
      throw new Error('Event name must be a string');
    }
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  unsubscribe(event, callback) {
    if (typeof event !== 'string') {
      throw new Error('Event name must be a string');
    }
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  publish(event, data) {
    if (typeof event !== 'string') {
      throw new Error('Event name must be a string');
    }
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
}


// 创建一个新的PubSub实例
const pubsub = new PubSub();

// 定义两个回调函数
function callback1(data) {
  console.log('这里是第一个回调: ' + data);
}

function callback2(data) {
  console.log('这里是第二个回调: ' + data);
}

// 订阅一个事件
pubsub.subscribe('myEvent', callback1);
pubsub.subscribe('myEvent', callback2);

// 输出两个回调函数的 console
pubsub.publish('myEvent', 'Hello, world!'); 

// 取消订阅 callback1
pubsub.unsubscribe('myEvent', callback1);

// callback1 的订阅被取消了，仅打印 callback2 的 console
pubsub.publish('myEvent', 'Hello, world!'); 
