import Layout from "../layouts";
import Image from "next/image";
export default function Profile() {
  return (
    <Layout pagesTitle="Profile">
      <Image src="/img/1.jpg" width={200} height={200} alt="Profile"></Image>
      <h1>Profile Pages</h1>
    </Layout>
  );
}
