import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ThemeButton, ThemeTextField, TodoItem } from "../Elements";
import { todoActions } from '../../redux/slice/todoSlice';

let id = 1;

// todo item style
const listContainerStyle = {
  maxWidth: 200,
  padding: 0,
  margin: "12 0 0 0",
  border: "1px solid #000000",
};

const Todo = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);

  // on form submit
  const onSubmitTodo = (event) => {
    event.preventDefault();
    if (!inputRef.current.value) return;
    let item = {
      id: id++,
      title: inputRef.current.value,
      isDone: false,
    };
    dispatch(todoActions.add(item));
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  // handle done state
  const onChangeBox = (todoId) => {
    dispatch(todoActions.update(todoId));
  };

  // handle delete
  const handleDel = (todoId) => {
    dispatch(todoActions.deleteTodo(todoId))
  };

  // handle search query
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log(todo)
    if (todo?.list?.length) {
      id = todo.list[todo.list.length - 1].id;
      ++id;
    }
  }, [])

  let todoList = todo.list.filter(item => item.title.includes(query));

  return (
    <>
      <ThemeTextField
        type="text"
        placeholder="search item"
        value={query}
        onChange={handleSearch}
      />
      <form onSubmit={onSubmitTodo}>
        <ThemeTextField ref={inputRef} type="text" placeholder="enter todo" />
        <ThemeButton type="submit">Add</ThemeButton>
      </form>
      {
        todoList?.length > 0
        && <ul style={listContainerStyle}>
          {
            todoList.map(item => (
              <TodoItem
                key={item.id}
                isDone={item.isDone}
                onChangeBox={() => onChangeBox(item.id)}
                handleDel={() => handleDel(item.id)}
              >
                {item.title}
              </TodoItem>
            ))
          }
        </ul>
      }
    </>
  );
};
export default Todo;
