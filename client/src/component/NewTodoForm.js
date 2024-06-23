import styles from "../css/NewTodoForm.module.css";
import { useRef, useState } from "react";
// import useFetch from "../hooks/useFetch";
export default function NewTodoForm({ addTodo: _addTodo }) {
  //   const [newTodoTitle, setNewTodoTitle] = useState("");
  //   const todosDB = useFetch("http://localhost:3001/todos");
  /* function onChange(e) {
    console.log(e.target.value);
    setNewTodoTitle(e.target.value);
  } */
  /* function addTodo() {
    const id = 1;
    const title = newTodoTitle;
    const newTodo = {
      id,
      title,
    };
    _addTodo(newTodo);
  } */
  const [lastTodoId, setLastTodoId] = useState(0);
  const today = new Date();
  // 현재 날짜를 가져옵니다.

  const formattedDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  // 원하는 형식으로 날짜를 설정합니다.
  function addTodo(newTodo) {
    console.log(titleRef.current.value);
    newTodo.id = lastTodoId + 1;
    setLastTodoId(newTodo.id);
    console.log(`${newTodo.id}`);

    fetch(`http://localhost:3001/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: newTodo.id,
        title: titleRef.current.value,
        date: formattedDate,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다.");
      } else {
        console.log("오류");
      }
    });
  }
  const titleRef = useRef(null);
  return (
    <div className={styles.form}>
      <input type="text" placeholder="새 할 일을 입력해주세요" ref={titleRef} />
      <button onClick={addTodo}>추가</button>
    </div>
  );
}
