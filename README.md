# Boas-vindas ao repositório do exercício Tests in Practic

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Aqui vamos colocar a mão no código!
Você vai implementar vários testes em diferentes contextos a fim de consolidar a mecânica e também a forma de pensar em testes

<br />
</details>

<details>
  <summary><strong>📝 Habilidades a serem trabalhadas</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Escrever testes unitários para verificar o correto funcionamento de funções;
- Escrever testes utilizando uma abordagem de desenvolvimento orientada a testes.

</details>

# Orientações

<details>
1. Instale as dependências

- `npm install`.
</details>

# Requisitos

## 1. Crie os casos de teste da função `Sum`

<details>
  <summary>A função sum(a, b) retorna a soma do parâmetro <code>a</code> com o <code>b</code>. No arquivo já criado <code>sum.spec.js</code>, adicione os testes a seguir: </summary><br>

- Teste se o retorno de `sum(4, 5)` é `9`;
- Teste se o retorno de `sum(0, 0)` é `0`.
- Teste se a função `sum` lança um erro quando os parâmetros são dos tipos **number** `4` e **string** `'5'`;
- Teste se a mensagem de erro é `'parameters must be numbers'` quando realizar a chamada `sum(4, '5')`;

</details>
---

## 2. Implemente o caso de teste para a função `printMessage`

<details>
  <summary> Use como base a função <code>printMessage</code> que imprime no terminal uma mensagem de boas-vindas de acordo com as informações de personagem passada. </summary><br>

- Crie um teste para garantir que o objeto passado como parâmetro possui a propriedade personagem.

</details>

---

## 3. Ainda sobre a função `printMessage`, adicione os casos de teste a seguir

<details>
<summary> Complementando o teste da função acima que valida a entrada de parâmetro, você pode utilizar o matcher <code>toMatch()</code> para validar a resposta da função. </summary><br>

- Verifique se a resposta contém a informação Boas vindas, antes de chamar o nome da personagem;
- Verifique se a resposta contém o nome correto da personagem.

</details>

---

## 4. Crie um fluxo de exceção para a função `printMessage`

<details>
<summary> Para finalizar o teste da função <code>printMessage</code>, você pode ainda criar um fluxo de exceção para possíveis erros.</summary><br>

- Dentro da função `printMessage` crie um  um fluxo de exceção para criar um erro caso seja enviado um parâmetro que não seja um objeto, ou que não tenha a propriedade personagem;
- Agora que a função possui um fluxo de exceção, crie um teste para validar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido.

</details>

---

## 5. Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função

 <details>
  <summary><strong>Sua função deverá se chamar <code>searchEmployee</code>, ela retorna os resultados da busca pelo id para aquele funcionário e a informação consultada.</strong></summary><br>

  Considere os dados do aquivo <code>searchEmployee</code> localizando dentro da pasta src.
  
- Crie uma função `searchEmployee` que receba dois parâmetros: o `id` do funcionário e a informação disponível sobre ele (`firstName`, `lastName`, `specialities`);
- Caso o `id` não conste no quadro de funcionários, sua função deve retornar o erro `"ID não identificado"`;
- Se a informação que se quer acessar não existir, a função deve retornar o erro `"Informação indisponível"`;
- Crie um teste para checar se, a função `searchEmployee` existe;
- Crie um teste para checar se, a função `searchEmployee(id, "firstName")` retorna o primeiro nome do usuário da id consultada;
- Crie um teste para checar se, a função `searchEmployee(id, "lastName")` retorna o segundo nome do usuário da id consultada;
- Crie um teste para checar se, a função `searchEmployee(id, "specialities")` retorna um array com todas as habilidades do id pesquisado;
- Crie um teste para checar se, a mensagem `"ID não identificada"` é retornado quando a ID não existir;
- Crie um teste que verifica o erro quando a informação e o ID são inexistentes;
- Teste a mensagem do erro para informação inexistente.

</details>
