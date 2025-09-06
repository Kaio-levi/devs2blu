# 🕵️‍♂️ Portal de Denúncias Anônimas

## 📅 Prazo de Entrega
Entrega até **07/08/2025 às 22:15**.

---

## 📄 Descrição do Projeto
O Portal de Denúncias Anônimas é um sistema web voltado para que qualquer cidadão possa relatar situações como corrupção, assédio, crimes ou irregularidades sem precisar se identificar. O sistema garante o anonimato do denunciante, permitindo também o acompanhamento do status da denúncia por meio de um código de rastreio.

---

## 👨‍💼 Integrantes da Equipe
- Davi Augusto
- Kaio Levi

---

## 🛠️ Tecnologias Utilizadas
- **Front-end:** HTML, CSS, JavaScript, React
- **Back-end:** Java + Spring Boot
- **Banco de Dados:** PostgreSQL
- **Outros:** JWT (autenticação), Swagger (documentação), Render (deploy)

---

## ✅ Quantidade Total de Sprints
**25 sprints**

---

## 🔄 Resumo sobre a Metodologia Ágil
A metodologia Ágil facilitou a divisão de tarefas e a entrega de funcionalidades de forma incremental. A principal vantagem foi a clareza nos papéis e prazos definidos. A maior dificuldade foi organizar as tarefas entre os membros nas primeiras sprints, o que foi resolvido com comunicação constante e revisões periódicas.

---

## 🏛️ Sprints Desenvolvidas

### Sprint 1: Cadastro de Denúncia Anônima
- **O que foi feito:** Formulário com campos de categoria, descrição, local e data. Backend para salvar os dados.
- **Desenvolvedores:** Davi e Kaio
- **O que cada um fez:**
  - Davi: Backend com endpoint para criar a denúncia.
  - Kaio: Front-end com React e validação.
- **Período de desenvolvimento:** 3 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 01/08/2025 - 07/08/2025

### Sprint 2: Geração de Código de Rastreamento
- **O que foi feito:** Código único gerado e associado à denúncia.
- **Desenvolvedores:** Kaio
- **O que foi feito:** Backend para geração do código e exibição no front.
- **Período de desenvolvimento:** 2 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 02/08/2025 - 07/08/2025

### Sprint 3: Consulta de Status da Denúncia
- **O que foi feito:** Página para digitar o código e ver status da denúncia.
- **Desenvolvedores:** Davi
- **O que foi feito:** Endpoint de consulta e tela com feedback.
- **Período de desenvolvimento:** 3 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 03/08/2025 - 07/08/2025

### Sprint 4: Upload de anexos (imagens/PDFs)
- **O que foi feito:** Página para fazer o upload de arquivos de imagens e pdf das denúncias.
- **Desenvolvedores:** Kaio
- **O que foi feito:** Form com input file.
- **Período de desenvolvimento:** 1 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 04/08/2025 - 07/08/2025

### Sprint 5: Sistema de CAPTCHA contra spam
- **O que foi feito:** botão para verificar o CAPTCHA ao final do formulario .
- **Desenvolvedores:** Davi
- **O que foi feito:** Adicionado API reCAPTCHA ao final do form
- **Período de desenvolvimento:** 1 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 04/08/2025 - 07/08/2025

### Sprint 6: Tela de agradecimento com código de rastreio
- **O que foi feito:** Pagina que mostra um texto de agradecimento com um codigo de rastreio.
- **Desenvolvedores:** Davi
- **O que foi feito:** Criado uma nova pagina com um h2 com um texto de agradecimento e um h4 com um codigo de rastreio/id gerado automaticamente pelo banco.
- **Período de desenvolvimento:** 1 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 04/08/2025 - 08/08/2025

### Sprint 7: Painel de login do administrador
- **O que foi feito:** Pagina de login para o ator administrador.
- **Desenvolvedores:** Kaio
- **O que foi feito:** criada uma pagina com input de email e outro para senha com um botao esqueci a senha e outro para realizar o login.
- **Período de desenvolvimento:** 2 dias
- **Testes:** 1 dia
- **Revisão:** 2 dia
- **Deploy:** 2 dia
- **Data:** 11/08/2025 - 15/08/2025

### Sprint 8: Listagem de denúncias no painel admin
- **O que foi feito:** Pagina de com uma lista das denuncias feitas pelos atores publico.
- **Desenvolvedores:** Davi
- **O que foi feito:** criada uma pagina com uma lista ul contendo as denucias feitas atravez do forms.
- **Período de desenvolvimento:** 2 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 11/08/2025 - 18/08/2025

### Sprint 9: Filtro por categoria/status/data
- **O que foi feito:** Adicionado filtros para a lista da pagina de lista de denuncias para os admins.
- **Desenvolvedores:** Kaio
- **O que foi feito:** Criado botões que filtram a lista por categoria, status e data com javaScript.
- **Período de desenvolvimento:** 3 dias
- **Testes:** 1 dia
- **Revisão:** 4 dia
- **Deploy:** 3 dia
- **Data:** 11/08/2025 - 19/08/2025

### Sprint 10: Mudança de status: "em análise", "respondida", "arquivada"
- **O que foi feito:** Mudança de status dos casos direto na lista.
- **Desenvolvedores:** Kaio
- **O que foi feito:** Adicionado um select com as opções "em análise", "respondida", "arquivada".
- **Período de desenvolvimento:** 1 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 11/08/2025 - 20/08/2025

### Sprint 11: Envio de resposta ao denunciante via tela de consulta
- **O que foi feito:** Tela com envio de resposta via email para o denunciante a respeito da denuncia.
- **Desenvolvedores:** Kaio
- **O que foi feito:**  .
- **Período de desenvolvimento:** 1 dias
- **Testes:** 1 dia
- **Revisão:** 1 dia
- **Deploy:** 1 dia
- **Data:** 11/08/2025 - 20/08/2025

### Sprint 12: Auditoria/logs internos.
- **O que foi feito:** Registros automaticamente gerados pelo sistma que detalha qualquer interação feita por qualquer usuario.
- **Desenvolvedores:** Kaio
- **O que foi feito:**  arquivo JSON que faz os logs de qualquer alteração ou interação feito por qualquer tipo de usuario.
- **Período de desenvolvimento:** 5 dias
- **Testes:** 1 dia
- **Revisão:** 2 dia
- **Deploy:** 4 dia
- **Data:** 18/08/2025 - 26/08/2025



### Sprint 13: Paginação e ordenação.
- **O que foi feito:** Paginação e ordenação dos dados da denuncia.
- **Desenvolvedores:** Davi
- **O que foi feito:** um botão anterior e proximo para navegar entre as paginas e selects que ordenam a lista em data da ocorrencia.
- **Período de desenvolvimento:** 3 dias
- **Testes:** 2 dia
- **Revisão:** 4 dia
- **Deploy:** 3 dia
- **Data:** 18/08/2025 - 28/08/2025

### Sprint 14: Layout responsivo .
- **O que foi feito:** telas com design responsivo
- **Desenvolvedores:** Kaio e Davi
- **O que foi feito:** Funções @meida no css de todas as paginas para telas de 720px 1080px 2120px.
- **Período de desenvolvimento:** 5 dias
- **Testes:** 3 dia
- **Revisão:** 2 dia
- **Deploy:** 5 dia
- **Data:** 25/08/2025 - 29/08/2025

---

## 🔹 Demais Sprints Planejadas

4. Upload de anexos (imagens/PDFs)
5. Sistema de CAPTCHA contra spam
6. Tela de agradecimento com código de rastreio
7. Painel de login do administrador
8. Listagem de denúncias no painel admin
9. Filtro por categoria/status/data
10. Mudança de status: "em análise", "respondida", "arquivada"
11. Envio de resposta ao denunciante via tela de consulta
12. Auditoria/logs internos
13. Paginação e ordenação
14. Layout responsivo
15. Estatísticas e gráficos de categorias
16. Cadastro de administradores
17. Sistema de permissões
18. Documentação da API (Swagger)
19. Testes unitários (JUnit)
20. Integração com notificadores (e-mail para admins)
21. Política de privacidade e LGPD
22. Página institucional
23. Tema escuro/claro
24. Backup automático do banco
25. Deploy final com base de dados persistente