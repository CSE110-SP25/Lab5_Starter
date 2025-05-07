import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor
} from '../code-to-unit-test/unit-test-me.js';

// Tests for isPhoneNumber
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// Tests for isEmail
test('valid email: user@example.com', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('valid email: test.email@domain.co', () => {
  expect(isEmail('test.email@domain.co')).toBe(true);
});
test('invalid email: userexample.com', () => {
  expect(isEmail('userexample.com')).toBe(false);
});
test('invalid email: user@', () => {
  expect(isEmail('user@')).toBe(false);
});

// Tests for isStrongPassword
test('valid password: Abc1234', () => {
  expect(isStrongPassword('Abc1234')).toBe(true);
});
test('valid password: Password1', () => {
  expect(isStrongPassword('Password1')).toBe(true);
});
test('invalid password: 123', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('invalid password: abc', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// Tests for isDate
test('valid date: 12/25/2023', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('valid date: 01/01/2000', () => {
  expect(isDate('01/01/2000')).toBe(true);
});
test('invalid date: 2023-12-25', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('invalid date: December 25, 2023', () => {
  expect(isDate('December 25, 2023')).toBe(false);
});

// Tests for isHexColor
test('valid hex: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid hex: #123abc', () => {
  expect(isHexColor('#123abc')).toBe(true);
});
test('invalid hex: 123abc', () => {
  expect(isHexColor('123abc')).toBe(false);
});
test('invalid hex: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});
