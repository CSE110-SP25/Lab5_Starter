// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber with valid numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber with invalid numbers', () => {
  expect(isPhoneNumber('1234-56-7890')).toBe(false);
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isEmail with valid emails', () => {
  expect(isEmail('hui@gmail.com')).toBe(true);
  expect(isEmail('huii_123@qq.coo')).toBe(true);
});

test('isEmail with invalid emails', () => {
  expect(isEmail('random-words')).toBe(false);
  expect(isEmail('hui@qq@com')).toBe(false);
});

test('isStrongPassword with valid passwords', () => {
  expect(isStrongPassword('hui1126')).toBe(true);
  expect(isStrongPassword('Huii123')).toBe(true);
});

test('isStrongPassword with invalid passwords', () => {
  expect(isStrongPassword('hui-1126')).toBe(false);         
  expect(isStrongPassword('!!@@##')).toBe(false);         
});

test('isDate with valid dates', () => {
  expect(isDate('5/6/2025')).toBe(true);
  expect(isDate('11/26/2003')).toBe(true);
});

test('isDate with invalid dates', () => {
  expect(isDate('2025/01/01')).toBe(false);             
  expect(isDate('133/1/2025')).toBe(false);              
});

test('isHexColor with valid hex colors', () => {
  expect(isHexColor('#fFf')).toBe(true);
  expect(isHexColor('FFF333')).toBe(true);
});

test('isHexColor with invalid hex colors', () => {
  expect(isHexColor('#hhh')).toBe(false);              
  expect(isHexColor('12345')).toBe(false);             
});