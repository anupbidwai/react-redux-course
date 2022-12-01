import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
};

const addTodo = (state, action) => {
    state.list.push({ ...action.payload });
};

const updateTodo = (state, action) => {
    const todoId = action.payload;
    const todo = state.list.find(item => item.id === todoId);
    if (todo) {
        todo.isDone = !todo.isDone;
    }
};

const deleteTodo = (state, action) => {
    //state.list = state.list.filter(item => item.id !== action.payload);
    const todoId = action.payload;
    const index = state.list.findIndex(item => item.id === todoId);
    state.list.splice(index, 1);
};

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: addTodo,
        update: updateTodo,
        deleteTodo: deleteTodo
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;