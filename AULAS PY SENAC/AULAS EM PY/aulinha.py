# definindo as variaveis 
preco = 400.00 #preço original
desconto = 50 #vaalor do desconto em %

# calculando o valor do desconto
valor_desconto = preco * (desconto / 100)

# calculando o preco final
preco_final = preco - valor_desconto

# imprimindo o resultado
print(f"preco final apos o desconto: r$  {preco_final:.2f}")