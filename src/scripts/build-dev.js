const { execSync } = require('child_process');
const path = require('path');

console.log('Starting development build...');

try {
  // Run Vite build with development mode
  execSync('npx vite build --mode development', { stdio: 'inherit' });
  console.log('Development build completed successfully.');
} catch (error) {
  console.error('Development build failed:', error);
  process.exit(1);
}