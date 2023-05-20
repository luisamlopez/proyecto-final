import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/Layout.module.css";
import axios from "axios";
import ProductsGrid from "../components/ProductsGrid";
import styles from "../styles/ProductsGrid.module.css";
import { Product } from "../api/Product";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

let products: Product[] = [];

export default function Products(props: any) {
  products = props.products;

  if (typeof window !== "undefined") {
    localStorage.setItem("products", JSON.stringify(products));
    console.log(JSON.parse(localStorage.getItem("products")!));
  }

  return (
    <Layout title="Productos ">
      <h1>
        <a href="https://fakestoreapi.com/docs">FakerStore API</a>
      </h1>
      <h2>Productos</h2>

      <div className={styles.cardsContainer}>
        {products.map((product: Product, i: number) => (
          <ProductsGrid key={i} data={product} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let data = null;
  // if (typeof window !== "undefined") {
  //   if (localStorage.getItem("products") !== null) {
  //     axios.get("https://fakestoreapi.com/products").then(async (res) => {
  //       localStorage.setItem("products", JSON.stringify(res.data));
  //       console.log("products array: " + products);
  //       //  data = products;
  //     });
  //     console.log("1 products: " + localStorage.getItem("products"));
  //   } else {
  //     products = JSON.parse(localStorage.getItem("products") || "[]");
  //     console.log("2 products: " + products);
  //   }
  // } else {

  // }
  data = await axios.get("https://fakestoreapi.com/products");
  products = data.data;

  return {
    props: {
      products,
    },
  };
}
