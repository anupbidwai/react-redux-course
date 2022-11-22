import { ThemeButton, ThemeTextField, TodoItem } from "../components/Elements";
import { useEffect, useRef, useState } from "react";

let id = 1;

// todo item style
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
    if (!inputRef.current.value) return;
    let todo = {
      id: id++,
      title: inputRef.current.value,
      isDone: false,
    };

    setList((prevList) => {
      return [...prevList, todo];
    });

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  // get data from storage
  const getStorageDtata = () => {
    let prevList = JSON.parse(localStorage.getItem('todo_list'));
    if (prevList?.length > 0) {
      setList([...prevList]);
      id = prevList[prevList.length - 1].id;
      ++id;
    } else {
      throw "TODO list is empty, kindly add an item into it";
    }
  }

  // effect for mounting phase
  useEffect(() => {
    try {
      getStorageDtata();
    }
    catch (e) {
      console.warn(e)
    }
    return () => {
      localStorage.clear();
    };
  }, []);

  // effect for updating phase with dependancy
  useEffect(() => {
    if (list?.length >= 0) {
      localStorage.setItem('todo_list', JSON.stringify([...list]));
    }
  }, [list]);

  // todo item
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
