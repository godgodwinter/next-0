import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../layouts";

export default function Home() {
  return (
    <div>
      <main>
        <Layout pagesTitle={"Home"}>
          <p>Ini Halaman utama</p>
        </Layout>
      </main>
    </div>
  );
}
