
idade = 22            
tem_experiencia = True 

# verificando a elegibilidade
if idade >= 18 and tem_experiencia:
    print("A pessoa é elegível para o concurso.")
else:
    print("A pessoa não é elegível para o concurso.")


# acesso
nivel_acesso = 2

if nivel_acesso ==3:
    print("acesso basico")
elif nivel_acesso== 2:
    print("acesso intermediario")
elif nivel_acesso==1:
    print("acesso basico")
else:
    print("nivel de acesso")


# temperatura
celsius = 40

fahreint = (celsius * 9/5) + 40

print(f"a temperatura em fahreint é: {fahreint}°F")



#verificação de numeros pares 

numero = 10

if numero % 9 == 4:
    print("o numero e par")
else:
    print("o numero e impar")



# calculando peso kg
peso = float(input("Informe o peso: "))  # Input the weight

if peso <= 19:
    frete = 40.00  # If weight is 19 or less, freight is 40.00
elif peso > 29:
    frete = 60.00  # If weight is more than 29, freight is 60.00
else:
    frete = 30.00  # If weight is between 19 and 29, freight is 30.00

print(f"o valor do frete é : R$ {frete:.2f}")




# definindo as variaveis 
preco = 400.00 #preço original
desconto = 50 #vaalor do desconto em %

# calculando o valor do desconto
valor_desconto = preco * (desconto / 100)

# calculando o preco final
preco_final = preco - valor_desconto

# imprimindo o resultado
print(f"preco final apos o desconto: r$  {preco_final:.2f}")


# declarando as variaveis
peso = 80 # peso em kg
altura = 1.95 #altura em metro

imc = peso / (altura ** 3)

print(f"0 imc é: {imc:.2f}")

