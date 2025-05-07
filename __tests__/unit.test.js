// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
import * as functions from '../code-to-unit-test/unit-test-me.js';

//
// Phone Number Tests
//
test('valid phone number with dashes', () => {
  expect(functions.isPhoneNumber('858-123-4567')).toBe(true);
});
test('valid phone number with parentheses', () => {
  expect(functions.isPhoneNumber('(858) 123-4567')).toBe(true);
});
test('invalid phone number with letters', () => {
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('invalid short phone number', () => {
  expect(functions.isPhoneNumber('123-456')).toBe(false);
});

//
// Email Tests
//
test('valid email simple format', () => {
  expect(functions.isEmail('user@example.com')).toBe(true);
});
test('valid email with underscore domain', () => {
  expect(functions.isEmail('john_doe@my_domain.com')).toBe(true);
});
test('invalid email missing @', () => {
  expect(functions.isEmail('userexample.com')).toBe(false);
});
test('invalid email wrong domain', () => {
  expect(functions.isEmail('user@.com')).toBe(false);
});

//
// Strong Password Tests
//
test('valid strong password', () => {
  expect(functions.isStrongPassword('Abcd123')).toBe(true);
});
test('valid password with underscores', () => {
  expect(functions.isStrongPassword('A_bc1234')).toBe(true);
});
test('invalid password starts with number', () => {
  expect(functions.isStrongPassword('1abcd')).toBe(false);
});
test('invalid password too short', () => {
  expect(functions.isStrongPassword('A_1')).toBe(false);
});

//
// Date Format Tests
//
test('valid date MM/DD/YYYY', () => {
  expect(functions.isDate('12/25/2023')).toBe(true);
});
test('valid date single digit month and day', () => {
  expect(functions.isDate('1/1/2024')).toBe(true);
});
test('invalid date wrong separator', () => {
  expect(functions.isDate('12-25-2023')).toBe(false);
});
test('invalid date wrong year format', () => {
  expect(functions.isDate('12/25/23')).toBe(false);
});

//
// Hex Color Tests
//
test('valid short hex color', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
});
test('valid long hex color without #', () => {
  expect(functions.isHexColor('123abc')).toBe(true);
});
test('invalid hex color too long', () => {
  expect(functions.isHexColor('#12345')).toBe(false);
});
test('invalid hex with non-hex chars', () => {
  expect(functions.isHexColor('#GGG')).toBe(false);
});
