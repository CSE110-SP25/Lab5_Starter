// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//npm test ./__tests__/unit.test.js
//2 test true and 2 test false

//phone 1st
test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(isPhoneNumber(("(657) 357-2216"))).toBe(true);
});
test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(isPhoneNumber("bro")).toBe(false);
});
test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(isPhoneNumber(657)).toBe(false);
});
test('adds 1 + 2 to equal 3 ', () => {
  // TODO
  expect(isPhoneNumber("788-657-3526")).toBe(true);
});

test(' adds 1 + 2 to equal 3', () => {
  // TODO
  expect(isPhoneNumber(("(657)357-3216"))).toBe(true);
});




//2nd
test('email', () => {
  // TODO
  expect(isEmail(("fun"))).toBe(false);
});
test('email', () => {
  // TODO
  expect(isEmail(("fanu@ucsd.edu"))).toBe(true);
});
test('email', () => {
  // TODO
  expect(isEmail(("576"))).toBe(false);
});
test('email', () => {
  // TODO
  expect(isEmail(("fanu@gmail.com"))).toBe(true);
});
test('email', () => {
  // TODO
  expect(isEmail(("yay@gmail"))).toBe(false);
});


//3rd
test('strong', () => {
  // TODO
  expect(isStrongPassword(("Star7g"))).toBe(true);
});
test('strong', () => {
  // TODO
  expect(isStrongPassword(("7star"))).toBe(false);
});
test('strong', () => {
  // TODO
  expect(isStrongPassword(("stg"))).toBe(false);
});
test('strong', () => {
  // TODO
  expect(isStrongPassword(("$yas"))).toBe(false);
});
test('strong', () => {
  // TODO
  expect(isStrongPassword(("starN72"))).toBe(true);
});




//4th
test('strong', () => {
  // TODO
  //XX can be 1 or 2 digits long and YYYY is always 4 digits long.
  expect(isDate(("23/5/2024"))).toBe(true);
});
test('strong', () => {
  // TODO
  expect(isDate(("23/5/20245"))).toBe(false);
});
test('strong', () => {
  // TODO
  expect(isDate(("23052005"))).toBe(false);
});
test('strong', () => {
  // TODO
  expect(isDate(("2/2/0005"))).toBe(true);
});




//5th
//isHexColor
test('strong', () => {
  // TODO
  expect(isHexColor(("FFF"))).toBe(true);
});
test('strong', () => {
  // TODO
  expect(isHexColor(("#FFFFFF"))).toBe(true);
});
test('strong', () => {
  // TODO
  expect(isHexColor(("#FFFF"))).toBe(false);
});
test('strong', () => {
  // TODO
  expect(isHexColor(("#ZZZ"))).toBe(false);
});