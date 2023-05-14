import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, title }: any) {
  return (
    <div>
      <Head>
        <title>{title} | Proyecto Final </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://luisalopez.dev/wp-content/uploads/2023/03/Luisa-Lopez-2.svg"
            alt="logo"
            width={100}
            height={50}
          />
          <h3> Proyecto Final</h3>
        </Link>

        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/Products">Productos</Link>
          <Link href="/Pokemon">Pokemon API</Link>
        </div>
      </header>
      <main className={styles.main}> {children}</main>
      <footer className={styles.footer}>
        <p>Proyecto Final</p>
        <p>
          Realizado por:
          <a href="https://github.com/luisamlopez"> Luisa López</a>
        </p>
      </footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Proyecto Final",
};
