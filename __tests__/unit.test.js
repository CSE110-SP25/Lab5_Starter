// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number with dashes', () => {
  expect(isPhoneNumber('232-983-5819')).toBe(true);
});
test('valid phone number with parentheses and space', () => {
  expect(isPhoneNumber('(582) 628-9048')).toBe(true);
});
test('invalid phone number without separators', () => {
  expect(isPhoneNumber('2453976583')).toBe(false);
});
test('invalid phone number with letters', () => {
  expect(isPhoneNumber('chd-dgd-ijhq')).toBe(false);
});

test('valid email with .com domain', () => {
  expect(isEmail('babasheep@google.com')).toBe(true);
});
test('valid email with numbers', () => {
  expect(isEmail('travis32@google.com')).toBe(true);
});
test('invalid email with spaces', () => {
  expect(isEmail('travis ucsd@google.com')).toBe(false);
});
test('invalid email with invalid characters"', () => {
  expect(isEmail('travis!@gogle.com')).toBe(false);
});


test('valid strong password with underscore', () => {
  expect(isStrongPassword('T_goodPassword8')).toBe(true);
});
test('valid strong password with letters and numbers', () => {
  expect(isStrongPassword('travis21')).toBe(true);
});
test('invalid password starting with number', () => {
  expect(isStrongPassword('1bobby')).toBe(false);
});
test('invalid short password', () => {
  expect(isStrongPassword('t2')).toBe(false);
});

test('valid single-digit month/day', () => {
  expect(isDate('4/2/2025')).toBe(true);
});
test('valid date with slashes', () => {
  expect(isDate('12/24/2024')).toBe(true);
});
test('invalid non-numeric date', () => {
  expect(isDate('Jan 8st, 2013')).toBe(false);
});
test('invalid date with dashes', () => {
  expect(isDate('2022-10-19')).toBe(false);
});

test('valid hex color full', () => {
  expect(isHexColor('#422adc')).toBe(true);
});
test('valid hex color short', () => {
  expect(isHexColor('#F2F')).toBe(true);
});
test('invalid hex with non-hex characters', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
test('invalid hex color with wrong length', () => {
  expect(isHexColor('#13')).toBe(false);
});
