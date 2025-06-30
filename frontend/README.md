# Estrutura do Layout

## Tela Inicial (Dashboard)
- Resumo com estatísticas:
  - Total de clientes cadastrados
  - Total de filmes disponíveis
  - Locações em aberto / atrasadas
  - Valor total arrecadado

- Acesso rápido a:
  - Novo aluguel
  - Cadastro de cliente
  - Cadastro de filme

## Clientes
- Lista de clientes
  - Nome, e-mail, telefone
  - Botões: `Ver Locações`, `Editar`, `Remover`
- Busca por nome ou e-mail
- Botão para novo cliente
- Formulário de cadastro/edição

## Filmes
- Catálogo de filmes
  - Capa, título, ano, diretor, gênero
  - Botões: `Editar`, `Remover`
- Filtro por gênero, ano ou busca por título
- Botão para cadastrar novo filme
- Formulário para cadastrar/editar filme (inclui upload de imagem para capa_url)

## Locações
- Lista de locações
  - Cliente, data locação, status (aberta, devolvida, atrasada)
  - Valor total + multa (calculado a partir de itens)
  - Botões: `Devolver`, `Detalhes`, `Novo Pagamento`
- Filtro por status, data, cliente

## Detalhes da Locação
- Cliente e datas
- Lista dos filmes alugados com valores
- Valor total + multas
- Histórico de pagamentos (com datas e formas)
- Botão Registrar pagamento se não quitado

# Pagamentos
- Tabela com:
  - Cliente, locação, valor, forma de pagamento, data
  - Filtros por período e forma de pagamento