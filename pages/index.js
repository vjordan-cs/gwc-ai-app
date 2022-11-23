import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Shell from "../components/Shell.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Girls Who Code TXST - AI Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell />
    </div>
  );
}
