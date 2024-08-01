import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./todoSilcer";

const Todo = () => {
  const dispatch = useDispatch();
  const { isLoading, data,error } = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <h1>Loading .....</h1>
      ) : error ? (
        <h1>error{error}</h1>
      ) : (
        data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })
      )}
    </div>
  );
};

export default Todo;
