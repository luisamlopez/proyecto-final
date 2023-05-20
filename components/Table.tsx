import { useState } from "react";
import { Post } from "../api/Post";
import styles from "../styles/Table.module.css";

export interface TableProps {
  data: Post;
  isEditing?: boolean;
  onEdit: (id: number, title: string, body: string) => void;
  onDelete: (id: number) => void;
}

export default function Table({
  data,
  isEditing,
  onEdit,
  onDelete,
}: TableProps) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(data.id!);
  };

  const handleOnEditSubmit = (evt: any) => {
    //Obtenemos los valores del formulario
    const title = document.getElementById("title") as HTMLInputElement;
    const body = document.getElementById("body") as HTMLInputElement;

    evt.preventDefault();
    onEdit(data.id!, title.value, body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div className={styles.table}>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit} className={styles.formEditing}>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={data.title}
          />
          <textarea name="body" id="body" defaultValue={data.body} />
          <input type="submit" value="Guardar" className={styles.btnEdit} />
        </form>
      ) : (
        <div className={styles.post}>
          <span className={styles.id}>{data.id}</span>
          <span className={styles.title}>{data.title}</span>
          <span className={styles.body}>{data.body}</span>
          <div className={styles.actions}>
            <button className={styles.btnEdit} onClick={handleEdit}>
              Editar
            </button>
            <button className={styles.btnDelete} onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
