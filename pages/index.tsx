import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Inicio ">
      <h1>Inicio</h1>
    </Layout>
  );
}
