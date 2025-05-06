// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Checking if (619) 870-2550 is a valid phone number', () => {
  expect(isPhoneNumber("(619) 870-2550")).toBe(true);
});
test('Checking if 916-385-9344 is a valid phone number', () => {
  expect(isPhoneNumber("916-385-9344")).toBe(true);
});

test('phone linging', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
  expect(isPhoneNumber("123-45-6789")).toBe(false);
});

// For emails
test('Checking if justin20@gmail.com is a valid gmail', () => {
  expect(isEmail("justin20@gmail.com")).toBe(true);
});

test('Checking if henry@yahoo.com is a valid gmail', () => {
  expect(isEmail("henry@yahoo.com")).toBe(true);
});
test('email', () => {
  expect(isEmail("plainaddress")).toBe(false);
  expect(isEmail("test@domain")).toBe(false);
});

// For strong password
test('passwd', () => {
  expect(isStrongPassword("1password")).toBe(false);
  expect(isStrongPassword("a")).toBe(false);
});

test('passwd', () => {
  expect(isStrongPassword("politz23")).toBe(true);
  expect(isStrongPassword("patrick_star")).toBe(true);
});

test('date', () => {
  expect(isDate("32/133/2020")).toBe(false);
  expect(isDate("12-12-2020")).toBe(false);
});

test('date', () => {
  expect(isDate("29/12/2020")).toBe(true);
  expect(isDate("06/05/2025")).toBe(true);
});

test('hex', () => {
  expect(isHexColor("xyz123")).toBe(false);
  expect(isHexColor("#12345g")).toBe(false);
});

test('hex', () => {
  expect(isHexColor("#4287f5")).toBe(true);
  expect(isHexColor("#42f55d")).toBe(true);
});