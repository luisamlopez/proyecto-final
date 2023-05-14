import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/Layout.module.css";
import { Component, useState } from "react";
// import api from "../utils/api";
import axios from "axios";
import Table from "../components/Table";

const inter = Inter({ subsets: ["latin"] });

export default function App(props: any) {
  const posts = props.data;

  return (
    <Layout title="Inicio ">
      <h1>JSONPlaceholder API</h1>

      {/* Table of posts */}

      <Table data={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}
