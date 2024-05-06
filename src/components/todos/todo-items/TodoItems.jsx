import PropTypes from "prop-types";

const TodoItems = (props) => {

    const { arrayOfTodos } = props;

    const todos = arrayOfTodos.map((todo) => (
        <li key={todo.id}>
            <p style={todo.complete ? {'color': 'chartreuse'}: {'color': 'red'}}>{todo.text}</p>
        </li>
    ))

    console.log(arrayOfTodos)
    return (
        <ul>
            {todos}
        </ul>
    )
}

TodoItems.propTypes = {
    arrayOfTodos: PropTypes.array
}

export default TodoItems;
