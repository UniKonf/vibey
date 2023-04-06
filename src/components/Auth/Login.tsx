import { login } from '../../lib/db/useAppwriteClient';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LogIn() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!email) {
      alert('Email is required.');
      return;
    }

    if (!password) {
      alert('Password is required.');
      return;
    }

    login(email, password)
      .then((account) =>
        alert(`Successfully logged in from: ${account.osName}`)
      )
      .finally(() => router.push('/dashboard'));
  };

  return (
    <div className="p-2 pb-2">
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-8 text-center text-base font-semibold">
          Login with email
        </fieldset>
        <div className="mb-8">
          <label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="h-10 w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-black focus:outline-4"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="mb-8">
          <label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="h-10 w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-black focus:outline-4"
              type="password"
              placeholder="Enter Your Password"
            />
          </label>
        </div>
        <div className="text-center">
          <button
            className="w-5/6 rounded-3xl bg-blue-600 px-6 py-3 text-xl font-semibold text-white hover:bg-blue-800"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
