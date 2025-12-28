// Simple test file
const app = require('./index.js');

console.log('Running tests...');

// Test 1: Basic greeting
const result = app.greet('World');
if (result === 'Hello, World!') {
  console.log('✓ Test 1 passed: Greeting works correctly');
} else {
  console.error('✗ Test 1 failed');
  process.exit(1);
}

console.log('All tests passed hooray!');
