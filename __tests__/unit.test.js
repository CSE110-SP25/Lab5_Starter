// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("isPhoneNumber - true cases", () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test("isPhoneNumber - false cases", () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('phone567')).toBe(false);
});

test("isEmail - true cases", () => {
  expect(isEmail('user@gmail.com')).toBe(true);
  expect(isEmail('testing@example.com')).toBe(true);
});

test("isEmail - false cases", () => {
  expect(isEmail('user@email')).toBe(false);
  expect(isEmail('user.email')).toBe(false);
});

test("isStrongPassword - true cases", () => {
  expect(isStrongPassword('StrongPass1')).toBe(true);
  expect(isStrongPassword('My_P4ssword')).toBe(true);
});

test("isStrongPassword - false cases", () => {
  expect(isStrongPassword('abc')).toBe(false);
  expect(isStrongPassword('000')).toBe(false);
});

test("isDate - true cases", () => {
  expect(isDate('01/01/2020')).toBe(true);
  expect(isDate('02/19/2020')).toBe(true);
});

test("isHexColor - false cases", () => {
  expect(isDate('2020/01/01')).toBe(false);
  expect(isDate('2020/19/2')).toBe(false);
});

test("isHexColor - true cases", () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
  expect(isHexColor('#89CFF0')).toBe(true);
});

test("isHexColor - false cases", () => {
  expect(isHexColor('blue')).toBe(false);
  expect(isHexColor('red')).toBe(false);
});


