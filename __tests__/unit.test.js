// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber()
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number: (123)456-7890', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () =>{
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number: abc-def-ghij',() => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});


// isEmail()

test('valid email: audrey@gmail.com', () => {
  expect(isEmail('audrey@gmail.com')).toBe(true);
});

test('valid email: audrey12@ucsd.edu', () => {
  expect(isEmail('audrey12@ucsd.edu')).toBe(true);
});

test('invalid email: audreygmail.com', () => {
  expect(isEmail('audreygmail.com')).toBe(false);
});

test('invalid email: audrey@', () => {
  expect(isEmail('audrey@')).toBe(false);
});

// isStrongPassword()
test('valid password: audrEy1012', () => {
  expect(isStrongPassword('audrEy1012')).toBe(true);
} );

test('valid password: audrEy_1012', () => {
  expect(isStrongPassword('audrEy_1012')).toBe(true);
} );

test('invalid password: 1012audrEy', () => {
  expect(isStrongPassword('1012audrEy')).toBe(false);
})

test('invalid password: audrEy1012!', () => {
  expect(isStrongPassword('audrEy1012!')).toBe(false);
} )


// isDate()

test('valid date: 10/1/2004', () => {
  expect(isDate('10/1/2004')).toBe(true);
});

test('valid date: 10/12/2005', () => {
  expect(isDate('10/12/2005')).toBe(true);
});

test('invalid date: 10/12/05 (2-digit year)', () => {
  expect(isDate('10/12/05')).toBe(false);
});

test('invalid date: 10/001/2004 (3-digit day)', () => {
  expect(isDate('10/001/2004')).toBe(false);
});


// isHexColor()

test('valid hex color: abc', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('valid hex color: abc123', () => {
  expect(isHexColor('abc123')).toBe(true);
});

test('invalid hex color: af ', () => {
  expect(isHexColor('af')).toBe(false);
});

test('invalid hex color: abcdeg', () => {
  expect(isHexColor('abcdeg')).toBe(false);
});