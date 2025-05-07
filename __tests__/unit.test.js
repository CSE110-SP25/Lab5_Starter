
// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
describe('isPhoneNumber', () => {
  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('invalid short phone number', () => {
    expect(isPhoneNumber('123-4567')).toBe(true);
  });
  test('letters in phone number', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

// isEmail
describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('user@example.com')).toBe(true);
  });
  test('valid email with underscore domain', () => {
    expect(isEmail('john_doe@school.edu')).toBe(true);
  });
  test('missing "@" symbol', () => {
    expect(isEmail('userexample.com')).toBe(false);
  });
  test('invalid domain extension', () => {
    expect(isEmail('user@mail.corporate')).toBe(false);
  });
});

// isStrongPassword
describe('isStrongPassword', () => {
  test('valid short password', () => {
    expect(isStrongPassword('Abcd')).toBe(true);
  });
  test('valid long password with underscores', () => {
    expect(isStrongPassword('A_longPass123')).toBe(true);
  });
  test('starts with a number', () => {
    expect(isStrongPassword('1badPass')).toBe(false);
  });
  test('too short', () => {
    expect(isStrongPassword('A1')).toBe(false);
  });
});

// isDate
describe('isDate', () => {
  test('valid date with slashes', () => {
    expect(isDate('12/25/2020')).toBe(true);
  });
  test('valid single-digit date', () => {
    expect(isDate('1/1/2023')).toBe(true);
  });
  test('missing year', () => {
    expect(isDate('1/1')).toBe(false);
  });
  test('dashes instead of slashes', () => {
    expect(isDate('01-01-2023')).toBe(false);
  });
});

// isHexColor
describe('isHexColor', () => {
  test('valid 3-character hex', () => {
    expect(isHexColor('#0f0')).toBe(true);
  });
  test('valid 6-character hex', () => {
    expect(isHexColor('00ffcc')).toBe(true);
  });
  test('too short', () => {
    expect(isHexColor('#f')).toBe(false);
  });
  test('invalid characters in hex', () => {
    expect(isHexColor('#ghijkl')).toBe(false);
  });
});

