import { Post } from "../api/Post";
import styles from "../styles/Table.module.css";

export interface TableProps {
  data: Post[];
  isEditing?: boolean;
}

export default function Table({ data, isEditing }: TableProps) {
  function GetCellValues() {
    var table = document.getElementById("mytable") as HTMLTableElement;
    for (var r = 0, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        console.log(table.rows[r].cells[c].innerHTML);
      }
    }
  }

  function editPost(index: number) {
    //Obtenemos los valores de la fila seleccionada
    var table = document.getElementById("mytable") as HTMLTableElement;
    var id = table.rows[index].cells[0].innerHTML;
    var title = table.rows[index].cells[1].innerHTML;
    var body = table.rows[index].cells[2].innerHTML;
  }

  return (
    // <div>
    //   {isEditing ? (
    //      <form
    //                 action="
    //              "
    //               >
    //                 <input type="text" name="title" id="title" value={title} />
    //                 <input type="text" name="body" id="body" value={body} />
    //                 <input
    //                   type="submit"
    //                   value="Guardar"
    //                   onClick={() => {
    //                     updatePost(id, title, body);
    //                   }}
    //                 />
    //     </form>
    //   ) : ()}
    // </div>

    // <table className={styles.table} id="mytable">
    //   <thead>
    //     <tr>
    //       <th>Id</th>
    //       <th>Titulo</th>
    //       <th>Contenido</th>
    //       <th>Acciones</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data?.map((item) => (
    //       <tr key={item.id}>
    //         {isEditing ? (
    //           <form
    //             action="
    //          "
    //           >
    //             <input type="text" name="title" id="title" value={item.title} />
    //             <input type="text" name="body" id="body" value={item.body} />
    //             <input
    //               type="submit"
    //               value="Guardar"
    //               onClick={() => {
    //                 updatePost(item.id, item.title, item.body);
    //               }}
    //             />
    //           </form>
    //         ) : (
    //           <>
    //             <td className={styles.idItem}>{item.id}</td>
    //             <td>{item.title}</td>
    //             <td>{item.body}</td>
    //             <td>
    //               <button className={styles.btnEdit} onClick={GetCellValues}>
    //                 Editar
    //               </button>
    //               <button className={styles.btnDelete}>Eliminar</button>
    //             </td>
    //           </>
    //         )}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <></>
  );
}

function updatePost(id: any, title: string, body: string) {
  alert("Post editado");
}
