import { useState } from "react";
import { Post } from "../api/Post";
import styles from "../styles/Table.module.css";

export interface TableProps {
  data: Post;
  isEditing?: boolean;
  onEdit?: (id: number, title: string, body: string) => void;
}

export default function Table({ data, isEditing }: TableProps) {
  const [isEdit, setIsEdit] = useState(false);

  const handleOnEditSubmit = (evt: any) => {
    evt.preventDefault();
    //onEdit(id, evt.target.name.value, evt.target.email.value);
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
            <button className={styles.btnEdit} onClick={handleOnEditSubmit}>
              Editar
            </button>
            <button className={styles.btnDelete}>Eliminar</button>
          </div>
        </div>
      )}
    </div>
  );
}
