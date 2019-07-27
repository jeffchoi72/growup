import Server from './server';

require('dotenv').config();

const { PORT } = process.env;

try {
  const server = new Server();
  server.start(PORT);
} catch (error) {
  console.error('SERVER ERROR');
  console.log(`Error message: ${error.message}`);
}
