// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


// isPhoneNumber
test('Phone number 123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Phone number 666-666-3234 is a valid phone number', () => {
  expect(isPhoneNumber('(666) 666-3234')).toBe(true);
});

test('Phone number -7890 is not a valid phone number', () => {
  expect(isPhoneNumber('-7890')).toBe(false);
});

test('Phone number 1234567890 is not a valid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});


// isEmail
test('Email powellrangers@test.com is a valid email', () => {
  expect(isEmail('powellrangers@test.com')).toBe(true);
});

test('Email powellrangers@test is not a valid email', () => {
  expect(isEmail('powellrangers@test')).toBe(false);
});

test('Email powellrangers@test@com is not a valid email', () => {
  expect(isEmail('powellrangers@test@com')).toBe(false);
});

test('Email pOwEl1rAnG3r5@test.com is a valid email', () => {
  expect(isEmail('pOwEl1rAnG3r5@test.com')).toBe(true);
});


// isStrongPassword
test('1234 is not a strong password', () => {
  expect(isStrongPassword('1234')).toBe(false);
});
test('L23 is not a strong password', () => {
  expect(isStrongPassword('L23')).toBe(false);
});

test('a_b_c_d_1_2_3 is a strong password', () => {
  expect(isStrongPassword('a_b_c_d_1_2_3')).toBe(true);
});

test('A7ds_DSYoiUDG is a strong password', () => {
  expect(isStrongPassword('A7ds_DSYoiUDG')).toBe(true);
});


// isDate XX / XX / YYYY

test('204 is not a valid date', () =>{
  expect(isDate('204')).toBe(false)
});

test('1/1/220 is not a valid date', () =>{
  expect(isDate('1/1/220')).toBe(false)
});

test('01/01/2025 is a valid date', () =>{
  expect(isDate('01/01/2025')).toBe(true)
});

test('1/1/2204 is a valid date', () =>{
  expect(isDate('1/1/2204')).toBe(true)
});


// isHexColor

test('#FFFFFF is a valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('#f498ef is a valid hex color', () => {
  expect(isHexColor('#f498ef')).toBe(true);
});

test('#12G45Z is not a valid hex color', () => {
  expect(isHexColor('#12G45Z')).toBe(false);
});

test('#456a8u is not a valid hex color', () => {
  expect(isHexColor('#456a8u')).toBe(false);
});