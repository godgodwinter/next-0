import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      console.log("Dipanggil setelah 2 detik");
      router.push("/");
    }, 2000);
  }, []);
  return (
    <>
      <h1>Ini 404 Not found</h1>
    </>
  );
}
