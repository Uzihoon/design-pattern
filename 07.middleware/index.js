class ChatRoom {
  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatRoom = new ChatRoom();

const user1 = new User('John', chatRoom);
const user2 = new User('Jane', chatRoom);

user1.send('Hi there!');
user2.send('Hello world!');
