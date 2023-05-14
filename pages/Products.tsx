import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/Layout.module.css";
import axios from "axios";
import ProductsGrid from "../components/ProductsGrid";
import styles from "../styles/ProductsGrid.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Products(props: any) {
  const data = props.data;

  return (
    <Layout title="Productos ">
      <h1>
        <a href="https://fakestoreapi.com/docs">FakerStore API</a>
      </h1>
      <h2>Productos</h2>

      <div className={styles.cardsContainer}>
        {data.map((product: any, i: number) => (
          <ProductsGrid data={product} key={i} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}
