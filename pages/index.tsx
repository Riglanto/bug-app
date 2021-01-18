import { useSession, signIn } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <button onClick={() => signIn()}>signin</button>
    </div>
  );
}
