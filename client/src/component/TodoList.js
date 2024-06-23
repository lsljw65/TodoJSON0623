// import { useEffect, useState } from "react";
import styles from "../css/TodoList.module.css";
// import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json";
export default function TodoList(todos, todosDB) {
  //   console.log(dummy);

  return (
    <div className={styles.list}>
      {JSON.stringify(todos)}
      {/* <ul className={styles.todoUL}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.date}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
