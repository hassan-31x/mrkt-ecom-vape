'use client';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { signUp } from 'next-auth-sanity/client';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const { data: session, status } = useSession()
  console.log("🚀 ~ SignUpForm ~ session:", session, status)

  const handleSubmit = async (e) => {
    console.log("🚀 ~ handleSubmit ~ e:")
    e.preventDefault();
    try {

        
      const res =  await signUp({
      email,
      password,
      name
    });
    
    console.log("🚀 ~ handleSubmit ~ res:", res)
    const an = await signIn('sanity-login', {
        redirect: false,
        email,
        password
    });
    console.log("🚀 ~ handleSubmit ~ an:", an)

    
    router.refresh();
} catch (err) {
    console.log(err);
}
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();

    await signIn('sanity-login', {
      redirect: false,
      email2,
      password2
    });

    router.refresh();
  };

  return (
    <div className='m-auto'>
      <form className=''>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>Create Account</button>
      </form>

      <h1>Sign In</h1>
      <form onSubmit={handleSubmitSignIn}>
        <input
          type="email"
          value={email2}
          placeholder="Email"
          onChange={e => setEmail2(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
        />
        <button type="button" onClick={handleSubmitSignIn}>Sign In</button>
      </form>
    </div>
  );
}