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

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: addTodo,
        update: updateTodo
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;