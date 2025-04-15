class Professor {
  constructor(nome, departamento) {
      this.nome = nome;
      this.departamento = departamento;
      this.disciplinas = [];
  }

  // Método para atribuir uma nova disciplina ao professor
  atribuirDisciplina(disciplina) {
      this.disciplinas.push(disciplina);
  }

  // Método para listar todas as disciplinas do professor
  listarTurmas() {
      return this.disciplinas;
  }
}

// Exemplo de uso
const professor = new Professor('Maria Oliveira', 'Matemática');
professor.atribuirDisciplina('Cálculo I');
professor.atribuirDisciplina('Álgebra Linear');

console.log(`Professor: ${professor.nome}`);
console.log(`Departamento: ${professor.departamento}`);
console.log(`Disciplinas: ${professor.listarTurmas().join(', ')}`);