// unit.test.js
import * as functions from '../code-to-unit-test/unit-test-me';

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Phone Number
test('valid phone numbers1', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);

});
test('valid phone numbers2', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone numbers1', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);

});
test('invalid phone numbers2', () => {
  expect(functions.isPhoneNumber('ab3-d2f-gh32')).toBe(false);
});

// Email
test('valid emails1', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);

});
test('valid emails2', () => {
  expect(functions.isEmail('user@abc.io')).toBe(true);
});

test('invalid emails1', () => {
  expect(functions.isEmail('test@kevin')).toBe(false);      

});
test('invalid emails2', () => {
  expect(functions.isEmail('kevin@abc.toolong')).toBe(false); 
});

// Strong Password
test('strong passwords1', () => {
  expect(functions.isStrongPassword('Abcd1234sd')).toBe(true);

});
test('strong passwords2', () => {
  expect(functions.isStrongPassword('b___')).toBe(true);
});

test('weak passwords1', () => {
  expect(functions.isStrongPassword('1234')).toBe(false);      
});
test('weak passwords2', () => {
  expect(functions.isStrongPassword('K')).toBe(false);       
});

// Date
test('valid dates1', () => {
  expect(functions.isDate('12/31/2020')).toBe(true);

});
test('valid dates2', () => {
  expect(functions.isDate('1/1/2020')).toBe(true);
});

test('invalid dates1', () => {
  expect(functions.isDate('2020-12-31')).toBe(false);

});
test('invalid dates2', () => {
  expect(functions.isDate('31/12/20201')).toBe(false);         
});

// Hex Color
test('valid hex colors1', () => {
  expect(functions.isHexColor('#abc')).toBe(true);

});
test('valid hex colors2', () => {
  expect(functions.isHexColor('abcdef')).toBe(true);
});

test('invalid hex colors1', () => {
  expect(functions.isHexColor('4324')).toBe(false);            
});
test('invalid hex colors2', () => {
  expect(functions.isHexColor('#123123a')).toBe(false);    
});