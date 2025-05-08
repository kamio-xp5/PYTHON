class Livro:
    def __init__(self, titulo, autor, isbn):
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.emprestado = False

    def __str__(self):
        status = "Emprestado" if self.emprestado else "Disponível"
        return f"{self.titulo} - {self.autor} (ISBN: {self.isbn}) [{status}]"


class Usuario:
    def __init__(self, nome, matricula):
        self.nome = nome
        self.matricula = matricula

    def __str__(self):
        return f"{self.nome} (Matrícula: {self.matricula})"


class Emprestimo:
    def __init__(self, usuario, livro):
        self.usuario = usuario
        self.livro = livro

    def __str__(self):
        return f"{self.usuario.nome} pegou '{self.livro.titulo}' emprestado."


class Biblioteca:
    def __init__(self):
        self.livros = []
        self.usuarios = []
        self.emprestimos = []

    def cadastrar_livro(self, titulo, autor, isbn):
        self.livros.append(Livro(titulo, autor, isbn))
        print("Livro cadastrado com sucesso!")

    def cadastrar_usuario(self, nome, matricula):
        self.usuarios.append(Usuario(nome, matricula))
        print("Usuário cadastrado com sucesso!")

    def consultar_livros(self):
        print("\n--- Livros Cadastrados ---")
        if not self.livros:
            print("Nenhum livro cadastrado.")
        for livro in self.livros:
            print(livro)

    def consultar_usuarios(self):
        print("\n--- Usuários Cadastrados ---")
        if not self.usuarios:
            print("Nenhum usuário cadastrado.")
        for usuario in self.usuarios:
            print(usuario)

    def realizar_emprestimo(self, matricula, isbn):
        usuario = next((u for u in self.usuarios if u.matricula == matricula), None)
        livro = next((l for l in self.livros if l.isbn == isbn), None)

        if not usuario:
            print("Usuário não encontrado.")
            return
        if not livro:
            print("Livro não encontrado.")
            return
        if livro.emprestado:
            print("Livro já está emprestado.")
            return

        livro.emprestado = True
        emprestimo = Emprestimo(usuario, livro)
        self.emprestimos.append(emprestimo)
        print("Empréstimo realizado com sucesso!")

    def listar_emprestimos(self):
        print("\n--- Empréstimos Atuais ---")
        if not self.emprestimos:
            print("Nenhum empréstimo registrado.")
        for e in self.emprestimos:
            print(e)


# Menu de interagir sla
def menu():
    biblioteca = Biblioteca()
    while True:
        print("\n------ Menu Biblioteca ------")
        print("1. Cadastrar livro")
        print("2. Cadastrar usuário")
        print("3. Consultar livros")
        print("4. Consultar usuários")
        print("5. Realizar empréstimo")
        print("6. Listar empréstimos")
        print("7. Sair")
        opcao = input("Escolha uma opção: ")

        if opcao == '1':
            titulo = input("Título: ")
            autor = input("Autor: ")
            isbn = input("ISBN: ")
            biblioteca.cadastrar_livro(titulo, autor, isbn)
        elif opcao == '2':
            nome = input("Nome do usuário: ")
            matricula = input("Matrícula: ")
            biblioteca.cadastrar_usuario(nome, matricula)
        elif opcao == '3':
            biblioteca.consultar_livros()
        elif opcao == '4':
            biblioteca.consultar_usuarios()
        elif opcao == '5':
            matricula = input("Matrícula do usuário: ")
            isbn = input("ISBN do livro: ")
            biblioteca.realizar_emprestimo(matricula, isbn)
        elif opcao == '6':
            biblioteca.listar_emprestimos()
        elif opcao == '7':
            print("Encerrando o sistema...")
            break
        else:
            print("Opção inválida!")

#  menu :()
menu()
