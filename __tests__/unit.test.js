// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber()
test('Is phone number test 1', () => {
    expect(functions.isPhoneNumber("123-972-3456")).toBe(true);
});

test('Is phone number test 2', () => {
    expect(functions.isPhoneNumber("642-9381092")).toBe(true);
});

test('Is phone number test 3', () => {
    expect(functions.isPhoneNumber("123000009723456")).toBe(false);
});

test('Is phone number test 4', () => {
    expect(functions.isPhoneNumber("1239723456")).toBe(false);
});

//isEmail()
test('Is email test 1', () => {
    expect(functions.isEmail("yew005@ucsd.edu")).toBe(true);
});

test('Is email test 2', () => {
    expect(functions.isEmail("something@gmail.com")).toBe(true);
});

test('Is email test 3', () => {
    expect(functions.isEmail("yew005@")).toBe(false);
});

test('Is email test 4', () => {
    expect(functions.isEmail("@ucsd.edu")).toBe(false);
});

//isStrongPassword()
test('Is strong password test 1', () => {
    expect(functions.isStrongPassword("F12u9ebqwu22")).toBe(true);
});

test('Is strong password test 2', () => {
    expect(functions.isStrongPassword("FFFFFF99999_")).toBe(true);
});

test('Is strong password test 3', () => {
    expect(functions.isStrongPassword("d")).toBe(false);
});

test('Is strong password test 4', () => {
    expect(functions.isStrongPassword("987654987654")).toBe(false);
});

//isDate()
test('Is date test 1', () => {
    expect(functions.isDate("02/10/2021")).toBe(true);
});

test('Is date test 2', () => {
    expect(functions.isDate("9/7/2021")).toBe(true);
});

test('Is date test 3', () => {
    expect(functions.isDate("111/11/2021")).toBe(false);
});

test('Is date test 4', () => {
    expect(functions.isDate("10/10/21")).toBe(false);
});

//isHexColor()
test('Is hex color test 1', () => {
    expect(functions.isHexColor("F99320")).toBe(true);
});

test('Is hex color test 2', () => {
    expect(functions.isHexColor("f12")).toBe(true);
});

test('Is hex color test 3', () => {
    expect(functions.isHexColor("8888816")).toBe(false);
});

test('Is hex color test 4', () => {
    expect(functions.isHexColor("F920")).toBe(false);
});