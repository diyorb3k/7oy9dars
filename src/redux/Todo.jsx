import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./todoSilcer";
// import { MdDelete } from "react-icons/md";
import "./Todo.css";

const Todo = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  console.log(data);
  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading .....</h1>
      ) : error ? (
        <h1>error: {error}</h1>
      ) : (
        data.map((todo) => {
          return (
            <div key={todo.id}>

              <table>
                  <tr>
                    
                    <td className="id"> {todo.id}</td>
                    <td className="title">{todo.title}</td>
                    <td className="completed">{todo.completed}</td>
                    <td>
                      <button className="edit">Edit</button>
                    </td>
                    <td>
                      <button className="dalet">Delete</button>
                    </td>
                  </tr>
               
              </table>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Todo;
