// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('Valid phone number with dashes', () => {
  expect(functions.isPhoneNumber('619-555-1234')).toBe(true);
});

test('Valid phone number with parentheses', () => {
  expect(functions.isPhoneNumber('(619) 555-1234')).toBe(true);
});

test('Invalid phone number (letters)', () => {
  expect(functions.isPhoneNumber('619-CAT-1234')).toBe(false);
});

test('Invalid phone number (too short)', () => {
  expect(functions.isPhoneNumber('619-555')).toBe(false);
});

// isEmail() tests
test('Valid email', () => {
  expect(functions.isEmail('test@ucsd.edu')).toBe(true);
});

test('Valid email with numbers', () => {
  expect(functions.isEmail('test123@ucsd.edu')).toBe(true);
});

test('Invalid email (missing @)', () => {
  expect(functions.isEmail('testucsd.edu')).toBe(false);
});

test('Invalid email (no domain)', () => {
  expect(functions.isEmail('test@')).toBe(false);
});

// isStrongPassword() tests
test('Valid password (letters and numbers)', () => {
  expect(functions.isStrongPassword('Password123')).toBe(true);
});

test('Valid password (underscore)', () => {
  expect(functions.isStrongPassword('Pass_word123')).toBe(true);
});

test('Invalid password (too short)', () => {
  expect(functions.isStrongPassword('Pwd1')).toBe(false);
});

test('Invalid password (starts with number)', () => {
  expect(functions.isStrongPassword('1Password')).toBe(false);
});

// isDate() tests
test('Valid date (MM/DD/YYYY)', () => {
  expect(functions.isDate('12/31/2023')).toBe(true);
});

test('Valid date (single digit month/day)', () => {
  expect(functions.isDate('1/1/2023')).toBe(true);
});

test('Invalid date (wrong format)', () => {
  expect(functions.isDate('31-12-2023')).toBe(false);
});

test('Invalid date (letters)', () => {
  expect(functions.isDate('Dec/31/2023')).toBe(false);
});

// isHexColor() tests
test('Valid 3-digit hex color', () => {
  expect(functions.isHexColor('#abc')).toBe(true);
});

test('Valid 6-digit hex color', () => {
  expect(functions.isHexColor('#a1b2c3')).toBe(true);
});

test('Invalid hex (missing #)', () => {
  expect(functions.isHexColor('abc123')).toBe(false);
});

test('Invalid hex (wrong characters)', () => {
  expect(functions.isHexColor('#ghijkl')).toBe(false);
});
