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
 <div className="forimm">
  <div className="SEACH">
    <input type="text" placeholder="seach" />
  </div>
 <div>
<form action="">
<input type="text" placeholder="ID"/>
<input type="text" placeholder="TEXT"/>
</form>
<button>ADD</button>
</div>
 </div>
      {isLoading ? (
        <h1>Yuklanmoqda .....</h1>
      ) : error ? (
        <h1>error: {error}</h1>
      ) : (
        <form action="">
        <input type="text" placeholder="salom "/>
        <input type="text" placeholder="salom "/>
        <input type="text" placeholder="salom "/>
      </form>,
        data.map((todo) => {
          return (

          <>
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
          </>
          );
        })
      )}
    </div>
  );
};

export default Todo;
