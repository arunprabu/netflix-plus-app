// Test Pattern: AAA (Arrange, Act, Assert)

// Arrange
// import { render, screen } from '@testing-library/react';
import App from './App'; // sample to be tested

// test case #1
// 'it' is an alias of 'test' 
it('has proper App component', () => {
  // Act (optional)
  // Assert - MUST
  expect(App).toBeDefined();
  // expect is from jest, toBeInTheDocument() is from jest. it is a matcher
});

/* 
  * test, it, expect are from JEST
  * render, screen are from RTL
  * toBeTruthy, toBeDefined, toBeInTheDocument() are matchers from jest-dom
*/