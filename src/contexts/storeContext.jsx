import { createContext, useState } from "react";

const StoreContext = createContext();

const StoreProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [todos, setTodos] = useState([]);

    const store = {
        user: [user, setUser],
        todos: [todos, setTodos]
    };

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext, StoreProvider };
