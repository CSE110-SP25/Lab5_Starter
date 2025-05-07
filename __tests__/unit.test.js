// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber', () => {
  expect(isPhoneNumber('858-123-1234')).toBe(true);
  expect(isPhoneNumber('(123) 123-1234')).toBe(true);
  expect(isPhoneNumber('phoneNumber')).toBe(false);
  expect(isPhoneNumber('1234')).toBe(false);
});

test('isEmail', () => {
  expect(isEmail('tpowell2@ucsd.edu')).toBe(true);
  expect(isEmail('abc@abc.org')).toBe(true);
  expect(isEmail('an email')).toBe(false);
  expect(isEmail('1234')).toBe(false);
});

test('isStrongPassword', () => {
  expect(isStrongPassword('Dogs_66')).toBe(true);
  expect(isStrongPassword('John_123')).toBe(true);
  expect(isStrongPassword('an the quick brown fox jumps')).toBe(false);
  expect(isStrongPassword('1234')).toBe(false);
});

test('isDate', () => {
  expect(isDate('1/1/2025')).toBe(true);
  expect(isDate('12/25/2000')).toBe(true);
  expect(isDate('date')).toBe(false);
  expect(isDate('1234')).toBe(false);
});

test('isHexColor', () => {
  expect(isHexColor('#fcba03')).toBe(true);
  expect(isHexColor('#123456')).toBe(true);
  expect(isHexColor('color')).toBe(false);
  expect(isHexColor('#')).toBe(false);
});