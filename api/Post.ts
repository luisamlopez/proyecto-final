import axios from "axios";

export interface Post {
  id?: number;
  title: string;
  body: string;
}

let posts: Post[] = [];

export function addPost(data: Post) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      body: data.body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      //  posts.push(json);
      if (typeof window !== "undefined") {
        posts = JSON.parse(localStorage.getItem("posts") || "[]");
        posts.push(json);
        localStorage.setItem("posts", JSON.stringify(posts));
        alert("Post added successfully " + json.id);
      }
    });
}
