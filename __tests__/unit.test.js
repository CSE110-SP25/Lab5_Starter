// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('ok phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('ok phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('too short', () => {
  expect(isPhoneNumber('43-45-823')).toBe(false);
});
test('has letters', () => {
  expect(isPhoneNumber('abc-s56-7890')).toBe(false);
});

// isEmail
test('valid email', () => {
  expect(isEmail('ben@ben.com')).toBe(true);
});
test('valid email with underscore', () => {
  expect(isEmail('_ben@mail.com')).toBe(true);
});
test('no @', () => {
  expect(isEmail('hi.com')).toBe(false);
});
test('no domain', () => {
  expect(isEmail('hi@.com')).toBe(false);
});

// isStrongPassword 
test('valid long password', () => {
  expect(isStrongPassword('a123456789')).toBe(true);
});
test('has underscore', () => {
  expect(isStrongPassword('A_ben2')).toBe(true);
});
test('not long enough', () => {
  expect(isStrongPassword('v1')).toBe(false);
});
test('starts with number', () => {
  expect(isStrongPassword('1hello')).toBe(false);
});

// isDate
test('single-digit day/month', () => {
  expect(isDate('5/5/2000')).toBe(true);
});
test('double-digit day/month', () => {
  expect(isDate('05/05/2025')).toBe(true);
});
test('wrong dash placement', () => {
  expect(isDate('12-151-111')).toBe(false);
});
test('2 digit year', () => {
  expect(isDate('02/15/00')).toBe(false);
});

// isHexColor tests
test('valid 3 digits with hash', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('no hash', () => {
  expect(isHexColor('A29')).toBe(true);
});
test('too many characters', () => {
  expect(isHexColor('#ABCD2932')).toBe(false);
});
test('invalid chars', () => {
  expect(isHexColor('#ay@')).toBe(false);
});