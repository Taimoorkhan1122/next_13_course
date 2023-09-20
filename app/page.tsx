import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
      <Link href="/users/new">create new user</Link>
    </main>
  );
}
