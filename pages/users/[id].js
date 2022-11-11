import Layout from "../../layouts";
import { useRouter } from "next/router";

export default function UserDetail(props) {
  const router = useRouter();
  const { id } = router.query;
  const { user } = props;

  return (
    <Layout>
      <h1> User Detail Pages {id}</h1>
      <p>name: {user.name}</p>
      <p>username : {user.username}</p>
      <p>email : {user.email}</p>
    </Layout>
  );
}
//digenerate ketika kita build ,, data akan di provide atau disimpan dalam json,,
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => ({
    params: { id: `${user.id}` },
  }));
  return { paths, fallback: false }; //jika data tidak ada maka akan di beri 404
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
