// Creational patterns
// Factory, Prototypes, Constructor, Singleton.
// function Person(name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
// }

// Person.prototype.greet = () => {
//   console.log('hola mundo')
// }

// const maria = new Person('Maria', 'Perez')

// Esctructural patterns
// Adapter, Decorator, Façade, Proxy

// Component.js
// import axios from 'axios';
// import { getPosts} from '../utils/api'

// const { data } = axios.get({...})
// const { data } = await getPosts()

// utils/api.js
// import axios from 'axios'
// import fetch from 'node-fetch'

// export function getPosts() {
//   return axios.get({ ... })
//   return fetch(...)
// }

// Behavioral patterns
// Observer, Mediator, Strategy, State

class Observer {
  constructor() {
    id: uuid()
  }

  notify(msg) {
    console.log(msg)
  }
}

class Topic {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubcribe(observer) {
    this.obeservers = this.observers.filter(({ id }) => id !== observer.id)
  }

  publish(msg) {
    this.observers.forEach(observer => {
      observer.notify(msg)
    })
  }
}

const topic1 = new Topic()
const observer1 = new Observer();
const observer2 = new Observer()

topic1.subscribe(observer1)
topic1.subscribe(observer2)
topic1.publish('hola mundo')
topic1.unsubcribe(observer2)

