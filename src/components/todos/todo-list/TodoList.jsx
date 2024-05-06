import {useContext, useEffect} from "react";
import {StoreContext, StoreProvider} from "../../../contexts/storeContext.jsx";
import TodoItems from "../todo-items/TodoItems.jsx";
import {useParams} from "react-router-dom";

const TodoList = () => {

    const { id } = useParams();
    const { todos } = useContext(StoreContext);
    const [userTodos, setTodos] = todos;

    useEffect(() => {
        const fetchTodos = () => {
            fetch(`/api/users/${id}/todos`, {
                method: 'GET'
            })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                })
                .then(data => {
                    setTodos(data)
                })
                .catch(err => console.error(err))
                // .finally(() => {
                //     console.log(userTodos)
                // })
        }

        fetchTodos();

    }, [id])

    return (
        <section>
            <TodoItems arrayOfTodos={userTodos} />
        </section>
    )
}

export default TodoList;
