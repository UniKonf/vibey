import { Client } from 'appwrite';
const client = new Client();
const porjectId = process.env.APPWRITE_PROJECT_ID;

client.setEndpoint('http://localhost/v1').setProject(`${porjectId}`);
