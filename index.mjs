import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import the server.js file using require
const server = require('./server.js');

// The server should now start correctly