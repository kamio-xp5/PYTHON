class Escola {
  constructor(nome) {
      this.nome = nome;
      this.listaAlunos = [];
      this.listaProfessores = [];
  }

  // Método para matricular um aluno na escola
  matricularAluno(aluno) {
      this.listaAlunos.push(aluno);
  }

  // contrata um professor para a escola
  contratarProfessor(professor) {
      this.listaProfessores.push(professor);
  }

  // informações dos alunos e professores
  gerarRelatorio() {
      let relatorio = `Escola: ${this.nome}\n`;
      relatorio += `\nAlunos Matriculados:\n`;
      this.listaAlunos.forEach((aluno, index) => {
          relatorio += `${index + 1}. ${aluno.nome} - Matrícula: ${aluno.matricula} - Curso: ${aluno.curso}\n`;
      });

      relatorio += `\nProfessores:\n`;
      this.listaProfessores.forEach((professor, index) => {
          relatorio += `${index + 1}. ${professor.nome} - Departamento: ${professor.departamento}\n`;
      });

      return relatorio;
  }
}

// Exemplo de uso
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

class Professor {
  constructor(nome, departamento) {
      this.nome = nome;
      this.departamento = departamento;
      this.disciplinas = [];
  }

  atribuirDisciplina(disciplina) {
      this.disciplinas.push(disciplina);
  }

  listarTurmas() {
      return this.disciplinas;
  }
}

// 
const aluno1 = new Aluno('João Silva', '2025001', 'Engenharia da Computação');
const aluno2 = new Aluno('Maria Oliveira', '2025002', 'Engenharia da Computação');

const professor1 = new Professor('Carlos Santos', 'Matemática');
const professor2 = new Professor('Ana Lima', 'Física');

// new school
const escola = new Escola('Escola XYZ');

// Matriculando alunos na escola
escola.matricularAluno(aluno1);
escola.matricularAluno(aluno2);

// Contratando professores para a escola
escola.contratarProfessor(professor1);
escola.contratarProfessor(professor2);

// Gerando o relatório da escola
const relatorio = escola.gerarRelatorio();
console.log(relatorio);