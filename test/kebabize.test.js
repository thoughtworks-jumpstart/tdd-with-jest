const kebabize = require('../src/kebabize')

test('dummy', () => {
    expect(kebabize('hiThere')).toBe('hi-there')
})

test.skip('dummy', () => {
    expect(kebabize('hiThereBruceWayne')).toBe('hi-there-bruce-wayne')
})

// write additional tests to ensure kebabize() works as expected