// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone linging', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
  expect(isPhoneNumber("123-45-6789")).toBe(false);
});

test('email', () => {
  expect(isEmail("plainaddress")).toBe(false);
  expect(isEmail("test@domain")).toBe(false);
});

test('passwd', () => {
  expect(isStrongPassword("1password")).toBe(false);
  expect(isStrongPassword("a")).toBe(false);
});

test('passwd', () => {
  expect(isStrongPassword("1password")).toBe(false);
  expect(isStrongPassword("a")).toBe(false);
});

test('date', () => {
  expect(isDate("32/133/2020")).toBe(false);
  expect(isDate("12-12-2020")).toBe(false);
});

test('hex', () => {
  expect(isHexColor("xyz123")).toBe(false);
  expect(isHexColor("#12345g")).toBe(false);
});
