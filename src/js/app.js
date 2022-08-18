export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[1, 'Ошибка 1']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknow error');
  }
}
