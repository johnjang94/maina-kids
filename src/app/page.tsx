import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen mx-auto w-2/6 my-40">
      <h1>Hello, welcome to Maina & Kids Foundation home page.</h1>
      <div className="space-x-40">
        <Link href="/girls">
          <button className="rounded-xl bg-white p-2 my-5">
            Girl&#39;s Page
          </button>
        </Link>
        <Link href="/about">
          <button className="rounded-xl bg-white p-2 my-5">
            About Us Page
          </button>
        </Link>
      </div>
    </main>
  );
}
