import Link from "next/link";
export default function () {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/users">User</Link>
          </li>
          <li>
            <Link href="/users/detail">User Detail</Link>
          </li>
          <li>
            <Link href="/blog">Blog Pages</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
