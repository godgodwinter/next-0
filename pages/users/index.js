import Layout from "../../layouts";
import { useRouter } from "next/router";

export default function Users({ dataUsers }) {
  const router = useRouter();
  // console.log(dataUsers);
  const listItem = dataUsers.map((user) => (
    <li key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
      {user.id} {user.name} - {user.username} - {user.email}
    </li>
  ));
  return (
    <Layout>
      <h1>Users Pages</h1>
      <ul>{listItem}</ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
