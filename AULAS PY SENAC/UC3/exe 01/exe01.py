import json
import os

USERS_FILE = os.path.join("users", "users.json")

def load_users():
    if not os.path.exists(USERS_FILE):
        return []
    try:
        with open(USERS_FILE, "r", encoding="utf-8") as f:
            users = json.load(f)
            return users if isinstance(users, list) else []
    except (json.JSONDecodeError, IOError):
        return []

def save_users(users):
    try:
        os.makedirs("users", exist_ok=True)  # Garante que a pasta exista
        with open(USERS_FILE, "w", encoding="utf-8") as f:
            json.dump(users, f, indent=2, ensure_ascii=False)
    except IOError as e:
        print(f"Oops! Ocorreu um erro ao salvar os dados dos usuários: {e}")

def list_users(users):
    if not users:
        print("\nAinda não há usuários cadastrados. Que tal adicionar o primeiro?\n")
        return
    print("\n👥 Lista de usuários cadastrados:")
    for idx, user in enumerate(users, 1):
        print(f"{idx}. Nome: {user['nome']} | E-mail: {user['email']}")
    print()

def add_user(users):
    print("\n✨ Vamos adicionar um novo usuário!")
    nome = input("Digite o nome completo: ").strip()
    if not nome:
        print("⚠️ O nome não pode ficar em branco. Tente novamente.\n")
        return

    email = input("Digite o e-mail: ").strip()
    if not email:
        print("⚠️ O e-mail não pode ficar em branco. Tente novamente.\n")
        return
    if '@' not in email or '.' not in email:
        print("❌ E-mail inválido. Certifique-se de que está no formato correto.\n")
        return
    if any(u['email'].lower() == email.lower() for u in users):
        print("🔁 Este e-mail já está cadastrado. Use outro.\n")
        return

    users.append({"nome": nome, "email": email})
    save_users(users)
    print(f"✅ Usuário '{nome}' foi adicionado com sucesso!\n")

def remove_user(users):
    if not users:
        print("\nNão há usuários para remover.\n")
        return

    list_users(users)
    try:
        choice = input("Digite o número do usuário que deseja remover (ou '0' para cancelar): ").strip()
        if choice == '0':
            print("🔙 Ação cancelada. Ninguém foi removido.\n")
            return

        idx = int(choice)
        if 1 <= idx <= len(users):
            user = users.pop(idx - 1)
            save_users(users)
            print(f"🗑️ Usuário '{user['nome']}' removido com sucesso.\n")
        else:
            print("❌ Número inválido. Tente novamente.\n")
    except ValueError:
        print("⚠️ Entrada inválida. Por favor, digite um número.\n")

def menu():
    users = load_users()
    while True:
        print("=== 🌟 Bem-vindo ao Gerenciador de Usuários 🌟 ===")
        print("1️⃣  Listar usuários")
        print("2️⃣  Adicionar novo usuário")
        print("3️⃣  Remover usuário")
        print("4️⃣  Sair do programa")
        choice = input("Escolha uma opção (1-4): ").strip()
        print()  # Espaço para melhor leitura

        if choice == '1':
            list_users(users)
        elif choice == '2':
            add_user(users)
        elif choice == '3':
            remove_user(users)
        elif choice == '4':
            print("👋 Encerrando o programa. Até logo!")
            break
        else:
            print("❗ Opção inválida. Tente novamente.\n")

if __name__ == "__main__":
    menu()
