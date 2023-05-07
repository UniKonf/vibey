import { server } from '@/lib/config';

import { Account, Client } from 'appwrite';

const endpoint =
  typeof process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT === 'string'
    ? process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
    : '';
const projectId =
  typeof process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID === 'string'
    ? process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
    : '';

const client = new Client();
client.setEndpoint(endpoint).setProject(projectId);

const account = new Account(client);
const success = server + '/dashboard';

//create a new user with email
export const register = async (
  name: string,
  email: string,
  password: string
) => {
  await account.create(name, email, password);
};

//login with email
export const login = async (email: string, password: string) => {
  await account.createEmailSession(email, password);
};

//get the current user
export const getUserData = async () => {
  await account.get();
};

//logout the current user
export const logout = async () => {
  await account.deleteSession('current');
};

// Go to OAuth provider login page and login with your google account
export const googleAuth = async () => {
  await account.createOAuth2Session('google', success);
};
