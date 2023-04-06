import { register } from '../../lib/db/useAppwriteClient';
import { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!name) {
      alert('Email is required.');
      return;
    }

    if (!email) {
      alert('Email is required.');
      return;
    }

    if (!password) {
      alert('Password is required.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    register(email, password).then((account) =>
      alert(`Successfully created account with ID: ${account.$id}`)
    );
  };

  return (
    <div className="px-4 pb-2">
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-8 text-center font-sans text-base font-semibold">
          Sign up with your email
          <hr className="font- mt-3" />
        </fieldset>

        <div className="font-xl mb-8">
          <label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              className="h-10 w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:font-sans placeholder:text-base placeholder:text-black focus:outline-4"
              placeholder="Enter Your Name"
            />
          </label>
        </div>

        <div className="mb-8">
          <label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="h-10  w-72 rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-black focus:outline-4"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="mb-5">
          <label>
            <input
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 w-72  rounded-lg pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-black focus:outline-4"
              type="password"
              placeholder="Create New Password"
            />
          </label>
        </div>
        <div className="mb-5">
          <input type="checkbox" />
          <label className="ml-5 font-sans text-sm">
            I agree to the{' '}
            <a href="#/" className="font-semibold text-blue-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#/" className="font-sans font-semibold text-blue-700">
              Privacy Policy
            </a>
          </label>
        </div>
        <div className="text-center">
          <button
            className="w-5/6 rounded-3xl bg-blue-600 px-6 py-3 text-xl font-semibold text-white hover:bg-blue-800"
            type="submit"
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}
