// exercise-bonus.test.js

const searchEmployee = require('../src/searchEmployee');

describe('5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função', () => {

  it ('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  
  it ('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const actual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';
    expect(actual).toBe(expected);
  });
  
  it ('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const actual = searchEmployee('1256-4', 'lastName');
    const expected = 'Bezos';
    expect(actual).toBe(expected);
  });
  
  it ('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const actual = searchEmployee('1256-4', 'specialities');
    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });
  
  it ('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => {searchEmployee()}).toThrow();
  });
  
  it ('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => {searchEmployee('4678-2', 'shift')}).toThrowError();
  });
  
  it ('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => {searchEmployee('4678-2', 'shift')}).toThrowError(new Error('Informação indisponível'));
  });
});
