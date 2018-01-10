const kebabize = require('../src/kebabize')

test('hiThere should be kebabized to hi-there', () => {
    expect(kebabize('hiThere')).toBe('hi-there')
})

test.skip('hiThereBruceWayne shuld be kebabized to hi-there-bruce-wayne', () => {
    expect(kebabize('hiThereBruceWayne')).toBe('hi-there-bruce-wayne')
})

// write additional tests to ensure kebabize() works as expected