import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
};

const addTodo = (state, action) => {
    state.list.push({ ...action.payload });
};

const updateTodo = (state, action) => {
    const todo = state.list.find(item => item.id === action.payload);
    if (todo) {
        todo.isDone = !todo.isDone;
    }
};

const search = (state, action) => {

};

const deleteTodo = (state, action) => {
    state.list = state.list.filter(item => item.id !== action.payload);
    // const index = state.list.findIndex(item => item.id === action.payload);
    // state.list.splice(index, 1);
};

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: addTodo,
        update: updateTodo,
        deleteTodo: deleteTodo,
        search: search
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;