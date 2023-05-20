import Layout from "../components/Layout";
import "../styles/Layout.module.css";
import axios from "axios";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { Post as PostObject } from "../api/Post";

export default function App() {
  const [posts, setPosts] = useState<PostObject[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  //Funcion para obtener los posts de la API
  async function getPosts() {
    let data = null;

    data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    setPosts(data.data);
    return {
      props: {
        data,
      },
    };
  }

  //Funcion para agregar un post a la API
  async function addPost(title: string, body: string) {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
          title: title,
          body: body,
        }
      );

      if (response.status !== 201) {
        return alert("Error al crear el post");
      }

      const data = response.data;
      setPosts((posts) => [...posts, data]);
      alert("Post creado");

      //Cerramos el formulario
      const form = document.getElementById("form")!;
      const btnCreate = document.getElementById("btnCreate")!;
      form.classList.toggle("formShow");
      btnCreate.classList.toggle("buttonHide");
    } catch (error) {
      alert(error);
    }
  }

  //Funcion para editar un post de la API
  async function editPost(id: number, title: string, body: string) {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          title: title,
          body: body,
        }
      );

      if (response.status !== 200) {
        return alert("Error al editar el post");
      }

      const data = response.data;
      const updatePost = posts.map((post) => {
        if (post.id === id) {
          post.title = title;
          post.body = body;
        }
        return post;
      });
      setPosts(updatePost);
      alert("Post editado");
    } catch (error) {
      alert(error);
    }
  }

  //Funcion para eliminar un post de la API
  async function deletePost(id: number) {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (response.status !== 200) {
        return alert("Error al eliminar el post");
      }

      const data = response.data;
      const updatePost = posts.filter((post) => post.id !== id);
      setPosts(updatePost);
      alert("Post eliminado");
    } catch (error) {
      alert(error);
    }
  }

  //Funcion para mostrar el formulario
  function showForm() {
    const form = document.getElementById("form")!;
    const btnCreate = document.getElementById("btnCreate")!;
    form.classList.toggle("formShow");
    btnCreate.classList.toggle("buttonHide");

    const btnCancelar = document.querySelector(".buttonCancelar")!;
    btnCancelar.addEventListener("click", () => {
      form.classList.toggle("formShow");
      btnCreate.classList.toggle("buttonHide");
    });
  }

  //Funcion para guardar el post
  function guardar() {
    const title = document.querySelector("input")!;
    const body = document.querySelector("textarea")!;

    if (title.value === "" || body.value === "") {
      alert("No puede haber campos vacios");
      return false;
    } else {
      addPost(title.value, body.value);
      title.value = "";
      body.value = "";
      return false;
    }
  }

  //Funcion para manejar el evento submit del formulario y prevenir que se recargue la pagina
  function handleOnSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <Layout title="Inicio ">
      <a href="https://jsonplaceholder.typicode.com/guide">
        <h1>JSONPlaceholder API</h1>
      </a>

      <button className="button" id="btnCreate" onClick={showForm}>
        Crear post
      </button>

      <form className="form" id="form" onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Contenido"></textarea>
        <button className="buttonSave" onClick={guardar}>
          Guardar
        </button>
        <button className="buttonCancelar">Cancelar</button>
      </form>

      {/* Header de la "tabla" de posts */}
      <div className="table">
        <div className="tableHeader">
          <div className="tableCell">ID</div>
          <div className="tableCell">Titulo</div>
          <div className="tableCell">Contenido</div>
          <div className="tableCell">Acciones</div>
        </div>
      </div>

      {posts.map((post, i) => (
        <Post
          key={post.id}
          data={post}
          onEdit={editPost}
          onDelete={deletePost}
        />
      ))}
    </Layout>
  );
}
