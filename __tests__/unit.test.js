// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('if 123-456-7890 is a valid phone number', () => {
  // TODO
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('if 805-619-7830 is a valid phone number', () => {
  // TODO
  expect(isPhoneNumber('805-619-7830')).toBe(true);
});
test('if 1-456-789 is NOT a valid phone number', () => {
  // TODO
  expect(isPhoneNumber('1-456-789')).toBe(false);
});
test('if 91 is a NOT valid phone number', () => {
  // TODO
  expect(isPhoneNumber('91')).toBe(false);
});

//email tests
test('if hp@ucsd.edu is a valid email', () => {
  // TODO
  expect(isEmail('hp@ucsd.edu')).toBe(true);
});
test('if likecars@gmail.com is a valid email', () => {
  // TODO
  expect(isEmail('ilikecars@gmail.com')).toBe(true);
});
test('if hp@ucsdedu is NOT a valid email', () => {
  // TODO
  expect(isEmail('hp@ucsdedu')).toBe(false);
});
test('if likecarsgmail.com is NOT a valid email', () => {
  // TODO
  expect(isEmail('ilikecarsgmail.com')).toBe(false);
});

// isStrongPassword tests
test('if Apples1955 is a strong password', () => {
  // TODO
  expect(isStrongPassword('Apples1955')).toBe(true);
});
test('if Oranges_in_1956 is a strong password', () => {
  // TODO
  expect(isStrongPassword('Oranges_in_1956')).toBe(true);
});
test('if app is a NOT strong password', () => {
  // TODO
  expect(isStrongPassword('app')).toBe(false);
});
test('if 4eder is a NOT strong password', () => {
  // TODO
  expect(isStrongPassword('4eder')).toBe(false);
});

//isDate tests
test('if 05/05/2025 is valid date', () => {
  // TODO
  expect(isDate('05/05/2025')).toBe(true);
});
test('if 5/15/2025 is valid date', () => {
  // TODO
  expect(isDate('5/05/2025')).toBe(true);
});
test('if 05/05/25 is NOT a valid date', () => {
  // TODO
  expect(isDate('05/05/25')).toBe(false);
});
test('if 005/15/2025 is NOT a valid date', () => {
  // TODO
  expect(isDate('005/05/2025')).toBe(false);
});

//isHexColor tests
test('if #ff6347 is a valid hex color', () => {
  // TODO
  expect(isHexColor('#ff6347')).toBe(true);
});
test('if #fc9 is a valid hex color', () => {
  // TODO
  expect(isHexColor('#fc9')).toBe(true);
});
test('if #ff63479 is a NOT a valid hex color', () => {
  // TODO
  expect(isHexColor('#ff63479')).toBe(false);
});
test('if #fc99 is NOT a valid hex color', () => {
  // TODO
  expect(isHexColor('#fc99')).toBe(false);
});