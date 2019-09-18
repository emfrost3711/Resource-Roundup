import React, { Component } from "react";
import API from "../../../utils/API";
// import TodoItem from "../ToDoItem";
import TodoForm from "../ToDoForm";


class TodoList extends Component {
    constructor(props){
       super(props); 
       this.state = {
           user: props.user,
            todos: [],
       }
    this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        API.getTodos().then(user => {
            this.setState({
                todos: user.todos
            })
        })
    }

    // loadTodos(user) {
    //    let todos = API.getTodos().then(user =>  {
    //         this.setState({todos})
    //     });
    //     ;
    // }

    addTodo(val) {
        let newTodo = API.createTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    deleteTodo(id) {
        API.removeTodo(id); 
        const todos = this.state.todos.filter(todo => todo._id !==id);
        this.setState({todos: todos});
    }

    toggleTodo(todo) {
        let updatedTodo = API.updateTodo(todo);
        const todos = this.state.todos.map( t => 
            (t._id === updatedTodo._id)
            ? {...t, completed: !t.completed}
            : t
            )
        this.setState({todos: todos});
    }

    render(){
        return (
        <div>
           <h1>Todo List!</h1>
           <TodoForm addTodo={this.addTodo}/>
           <ul>
            {this.state.todos}
           </ul>
          </div>
        )
      }
    }


export default TodoList;



    
