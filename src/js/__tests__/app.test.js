import ErrorRepository from '../app';

test('Известная ошибка', () => {
  const errors = new ErrorRepository();
  expect(errors.translate(1)).toBe('Ошибка 1');
});

test('Неизвестная ошибка', () => {
  const errors = new ErrorRepository();
  expect(() => errors.translate(2)).toThrow('Unknow error');
});
