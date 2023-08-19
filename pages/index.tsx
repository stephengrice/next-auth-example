import { signIn, signOut, useSession } from 'next-auth/react';


export default function Home() {
  const { data: session } = useSession();
  const handleLoginWithGoogle = () => {
    signIn("google");
  };
  const handleLoginWithApple = () => {
    console.log('Ouch')
  };
  let loginElem = (
    <>
      <button className="p-3 bg-blue-600 text-white font-bold rounded" onClick={() => handleLoginWithGoogle()}>Login with Google</button>
      <button className="p-3 bg-blue-600 text-white font-bold rounded" onClick={() => handleLoginWithApple()}>Login with Apple</button>
    </>
  );


  if (session && session.user) {
    loginElem = (
      <div>
        Logged in as {session.user.email}
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <>
      <div className="text-2xl font-bold my-4">My App</div>
      {loginElem}
    </>
  );
}