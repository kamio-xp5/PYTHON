class Disciplina {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
        this.alunosMatriculados = [];
    }

    // realizando matricula  de um aluno na disciplina
    matricularAluno(aluno) {
        this.alunosMatriculados.push(aluno);
    }

    // gera o boletim dos alunos matriculados
    gerarBoletim() {
        return this.alunosMatriculados.map(aluno => {
            return {
                nome: aluno.nome,
                matricula: aluno.matricula,
                media: aluno.calcularMedia().toFixed(2)
            };
        });
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

// const de alunos
const aluno1 = new Aluno('João Silva', '2025001', 'Engenharia da Computação');
aluno1.adicionarNota(8.5);
aluno1.adicionarNota(7.0);
aluno1.adicionarNota(9.0);

const aluno2 = new Aluno('Maria Oliveira', '2025002', 'Engenharia da Computação');
aluno2.adicionarNota(6.5);
aluno2.adicionarNota(7.5);
aluno2.adicionarNota(8.0);

// Criando instância da disciplina
const disciplina = new Disciplina('Matemática', 'MAT101');

// Matriculando alunos na disciplina
disciplina.matricularAluno(aluno1);
disciplina.matricularAluno(aluno2);

// Gerando boletim
const boletim = disciplina.gerarBoletim();
console.log('Boletim:', boletim);