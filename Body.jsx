import React from 'react';
import {connect} from 'react-redux'
import TodoInput from './TodoInput.jsx';
import Todo from './Todo.jsx';
class Body extends React.Component {
  constructor(props) {
    super(props);//Call this function because 'this' is not allowed before super().
  }

  updateTodo(todoId, content) {
    let listTodo = this.state.listTodoes;
    let indexMatching = listTodo.findIndex(t => t.id === todoId);
    if (indexMatching >= 0) {
      listTodo[indexMatching].content = content;
      listTodo[indexMatching].updatedDate = new Date();
      this.setState({listTodoes: listTodo});
    }
  }

  render() {
    let listTodoHtml = (
      this.props.listTodoes.map((todo, index) => <div key={todo.id} className="col-md-2"><Todo
        todo={todo} index={index + 1}/></div>)
    );
    return (
      <div>
        <div>Add new Todo</div>
        <TodoInput/>
        <div>List Todo ({this.props.listTodoes.length})</div>
        <div className="row">
          {listTodoHtml}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTodoes: state.gTodoesList
  }
};

export default connect(mapStateToProps, null)(Body);