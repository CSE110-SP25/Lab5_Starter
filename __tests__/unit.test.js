// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// For phone numbers
test('Checking if (619) 870-2550 is a valid phone number', () => {
  expect(isPhoneNumber("(619) 870-2550")).toBe(true);
});
test('Checking if 916-385-9344 is a valid phone number', () => {
  expect(isPhoneNumber("916-385-9344")).toBe(true);
});

// For emails
test('Checking if justin20@gmail.com is a valid gmail', () => {
  expect(isEmail("justin20@gmail.com")).toBe(true);
});

test('Checking if henry@yahoo.com is a valid gmail', () => {
  expect(isEmail("henry@yahoo.com")).toBe(true);
});