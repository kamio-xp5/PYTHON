class Aluno {
  constructor(nome, matricula, curso) {
      this.nome = nome;
      this.matricula = matricula;
      this.curso = curso;
      this.notas = [];
  }

  adicionarNota(nota) {
      this.notas.push(nota);
  }

  calcularMedia() {
      if (this.notas.length === 0) {
          return 0;
      }
      let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      return soma / this.notas.length;
  }
}

// Exemplo de uso
const aluno = new Aluno('João Silva', '2025001', 'Engenharia da Computação');
aluno.adicionarNota(8.5);
aluno.adicionarNota(7.0);
aluno.adicionarNota(9.0);

console.log(`Aluno: ${aluno.nome}`);
console.log(`Matrícula: ${aluno.matricula}`);
console.log(`Curso: ${aluno.curso}`);
console.log(`Média: ${aluno.calcularMedia().toFixed(2)}`);