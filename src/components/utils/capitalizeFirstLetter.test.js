import { capitalizeFirstLetter } from './capitalizeFirstLetter.js';

test('capitalizeFirstLetter capitalizes the first letter of a string', () => {
  expect(capitalizeFirstLetter('hello')).toBe('Hello');
  expect(capitalizeFirstLetter('world')).toBe('World');
  expect(capitalizeFirstLetter('foo bar')).toBe('Foo bar');
  expect(capitalizeFirstLetter('')).toBe('');
});