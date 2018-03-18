import axios from 'axios'

class Client {
  constructor(options) {
    this.axios = axios.create({
      baseURL: process.env.API_HOST,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  getTodos() {
    return this.axios.get(`/api/todos`)
  }

  createTodo(todo) {
    return this.axios.post(`/api/todos/create`, todo)
  }

  updateTodo(todo) {
    return this.axios.post(`/api/todos/update`, todo)
  }

  deleteTodo(todo) {
    return this.axios.post(`/api/todos/delete/${todo.id}`)
  }
}

export default Client
