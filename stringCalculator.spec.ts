import Add from './stringCalculator';

test('Result of empty string should be 0', () => {
    expect(Add("")).toBe(0)
})

test('Result of "1" should be 1', () => {
    expect(Add("1")).toBe(1)
})

test('Result of "1,2" should be 3', () => {
    expect(Add("1,2")).toBe(3)
})

test('Result of "1,2,3" should be 6', () => {
    expect(Add("1,2,3")).toBe(6)
})

test('Result of "1,2\n3" should be 6', () => {
    expect(Add("1,2\n3")).toBe(6)
})

test('Result of "1,2\n3," should be error', () => {
    expect(() => {
        Add("1,2\n3,");
    }).toThrow('not allow a separator at the end');
})

test('Result of "//;\n1;3" should be 4', () => {
    expect(Add("//;\n1;3")).toBe(4)
})

test('Result of "//|\n1|2,3" should be error', () => {
    expect(() => {
        Add("//|\n1|2,3");
    }).toThrow('"|" expected but "," found at postition 3.');
})