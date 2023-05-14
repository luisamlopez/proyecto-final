import styles from "../styles/Table.module.css";

export interface TableProps {
  data: [
    {
      id: number;
      title: string;
      body: string;
    }
  ];
}

export default function Table({ data }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Contenido</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr key={item.id}>
            <td className={styles.idItem}>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
