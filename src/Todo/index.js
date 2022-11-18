import { ThemeButton, ThemeTextField, TodoItem } from "../components/Elements";
import { useEffect, useRef, useState } from "react";

let id = 1;

const listContainerStyle = {
  maxWidth: 200,
  padding: 0,
  margin: "12 0 0 0",
  border: "1px solid #000000",
};

const Todo = () => {
  const inputRef = useRef();
  const [list, setList] = useState([]);

  // handle delete
  const handleDel = (event, removeItemId) => {
    event.preventDefault();
    let removeItemIndex, listCopy;
    listCopy = [...list];

    removeItemIndex = list.findIndex((item) => item.id === removeItemId);
    listCopy.splice(removeItemIndex, 1);
    setList(listCopy);
  };

  // handle done state
  const onChangeBox = (event, completedItemId) => {
    let completedItemIndex,
      listCopy = [...list];

    completedItemIndex = list.findIndex((item) => item.id === completedItemId);
    listCopy[completedItemIndex].isDone = !listCopy[completedItemIndex].isDone;
    setList(listCopy);
  };

  // on form submit
  const onSubmitTodo = (event) => {
    event.preventDefault();
    let todo = {
      id: id,
      title: inputRef.current.value,
      isDone: false,
    };

    setList((prevList) => {
      return [...prevList, todo];
    });

    inputRef.current.value = "";
  };

  // effect if list has changed
  useEffect(() => {
    inputRef.current.focus();
    if (list[list.length - 1] !== undefined) {
      id = list[list.length - 1].id + 1;
    }
    console.log("from list", list);
  }, [list]);

  const TodoList = list.map((item) => (
    <TodoItem
      key={item.id}
      isDone={item.isDone}
      onChangeBox={(event) => onChangeBox(event, item.id)}
      handleDel={(event) => handleDel(event, item.id)}
    >
      {item.title}
    </TodoItem>
  ));

  return (
    <>
      <form onSubmit={onSubmitTodo}>
        <ThemeTextField ref={inputRef} type="text" placeholder="enter todo" />
        <ThemeButton type="submit">Add</ThemeButton>
        {TodoList?.length > 0 && <ul style={listContainerStyle}>{TodoList}</ul>}
      </form>
    </>
  );
};
export default Todo;
