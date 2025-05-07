// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


test('isPhoneNumber is true', () => {
  expect(isPhoneNumber('(987) 123-7898')).toBe(true);
  expect(isPhoneNumber('408-730-4000')).toBe(true);
});

test('isPhoneNumber is false', () => {
  expect(isPhoneNumber('9073427689')).toBe(false);
  expect(isPhoneNumber('this is a string')).toBe(false);
});


test('isEmail is true', () => {
  expect(isEmail('m.nikitha@gmail.com')).toBe(true);
  expect(isEmail('nmaderamitla@gmail.com')).toBe(true);
});

test('isEmail is false', () => {
  expect(isEmail('jumble123')).toBe(false);
  expect(isEmail('user@.com')).toBe(false);
});


test('isStrongPassword is true', () => {
  expect(isStrongPassword('Notreally123')).toBe(true);
  expect(isStrongPassword('secondPass_9')).toBe(true);
});

test('isStrongPassword is false', () => {
  expect(isStrongPassword('7a8')).toBe(false);
  expect(isStrongPassword('hi')).toBe(false);
});


test('isDate - true cases', () => {
  expect(isDate('12/31/2023')).toBe(true);
  expect(isDate('01/27/1999')).toBe(true);
});

test('isDate - false', () => {
  expect(isDate('7890/99/01')).toBe(false);
  expect(isDate('another-string')).toBe(false);
});

test('isHexColor - true', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
  expect(isHexColor('#def')).toBe(true);
});

test('isHexColor - false cases', () => {
  expect(isHexColor('123456')).toBe(false);
  expect(isHexColor('string')).toBe(false);
});
