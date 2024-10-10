"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const data = useSession();
  return (
    <div>
      <h1>hola</h1>
      {data && <div>{data && JSON.stringify(data)}</div>}
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
