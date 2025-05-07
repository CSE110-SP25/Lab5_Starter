// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// 1a. isPhoneNumber that matches
test('925-999-1188 is a phone number', () => {
  expect(isPhoneNumber('925-999-1188')).toBe(true);
});
test('(925) 999-1188 is a phone number', () => {
  expect(isPhoneNumber('(925) 999-1188')).toBe(true);
});
// 1b. isPhoneNumber  doesn't match 
test('9-3-233 is not a phone number', () => {
  expect(isPhoneNumber('9-3-233')).toBe(false);
}
);
test('925-999-118 is not a phone number', () => {
  expect(isPhoneNumber('925-999-118')).toBe(false);
});


//2a: isEmail that matches
test('info@khan.com is an email', () => {
  expect(isEmail('info@khan.com')).toBe(true);
}
);
test('parwiz@aethon.com is an email', () => {
  expect(isEmail('parwiz@aethon.com')).toBe(true);
}
);
//2b: isEmail that doesn't match
test('parwiz@aethon is not an email', () => {
  expect(isEmail('parwiz@aethon')).toBe(false);
}
);
test('parwizaethon.com is not an email', () => {
  expect(isEmail('parwizaethon.com')).toBe(false);
}
);

//3a: isStrongPassword that matches
test('PasZword is a strong password', () => {
  expect(isStrongPassword('PasZword')).toBe(true);
}
);
test('PasZword123 is a strong password', () => {
  expect(isStrongPassword('PasZword123')).toBe(true);
}
);
//3b: isStrongPassword that doesn't match
test('1234 is not a strong password', () => {
  expect(isStrongPassword('1234')).toBe(false);
}
);
test('pas is not a strong password', () => {
  expect(isStrongPassword('pas')).toBe(false);
}
);

//4a: isDate that matches
test('05/06/2025 is a date', () => {
  expect(isDate('05/06/2025')).toBe(true);
}
);
test('12/01/1800 is a date', () => {
  expect(isDate('12/01/1800')).toBe(true);
}
);
//4b: isDate that doesn't match
test('123/1/18 is not a date', () => {
  expect(isDate('123/1/18')).toBe(false);
}
);
test('12/222/2008 is not a date', () => {
  expect(isDate('12/222/2008')).toBe(false);
}
);
//5a: isHexColor that matches
test('#fff01f is a hex', () => {
  expect(isHexColor('#fff01f')).toBe(true);
}
);
test('#ff0000 is a hex', () => {
  expect(isHexColor('#ff0000')).toBe(true);
}
);
//5b: isHexColor that doesn't match
test('asdf is not a hex', () => {
  expect(isHexColor('asdf')).toBe(false);
}
);
test('GGGP is not a hex', () => {
  expect(isHexColor('GGGP')).toBe(false);
}
);