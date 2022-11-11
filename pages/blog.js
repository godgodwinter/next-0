import Layout from "../layouts";

export default function Blog({ dataBlog }) {
  //   console.log(dataBlog);
  const listItem = dataBlog.map((data) => (
    <li key={data.id}>
      {data.id} {data.title} - {data.body}
    </li>
  ));
  return (
    <Layout pagesTitle="Blog Pages">
      <h1>Blog Pages</h1>
      <ul>{listItem}</ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
