const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure the build directory exists
const buildDir = path.join(__dirname, 'dist');
if (!fs.existsSync(buildDir)) {
  console.error('Build directory does not exist. Please run "npm run build" first.');
  process.exit(1);
}

// Install Azure CLI locally
console.log('Installing Azure CLI locally...');
execSync('npm install azure-cli', { stdio: 'inherit' });

// Login to Azure
console.log('Logging in to Azure...');
execSync('npx azure-cli login', { stdio: 'inherit' });

// Deploy to Azure Web App
console.log('Deploying to Azure Web App...');
execSync('npx azure-cli webapp up --sku F1 --informationalwebsite--resource-group appsvc_linux_centralus --location eastus', {
  stdio: 'inherit',
  cwd: buildDir
});

console.log('Deployment completed successfully!');