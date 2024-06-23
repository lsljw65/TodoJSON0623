import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setTodo] = useState([]);

  useEffect(() => {
    console.log("change");
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodo(data);
      });
  }, [url]);
  return data;
}
