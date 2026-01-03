# Kanban – Sistema de Gerenciamento de Tarefas

## Descrição do Projeto
O projeto **Kanban** é um sistema web simples de gerenciamento de tarefas, desenvolvido para simular a aplicação de metodologias ágeis no contexto da Engenharia de Software. Ele foi criado para atender uma empresa fictícia, a **TechFlow Solutions**, contratada por uma startup do setor de logística que necessita acompanhar o fluxo de trabalho da equipe em tempo real.

O sistema permite organizar tarefas em um quadro Kanban, facilitando a visualização do andamento das atividades e a priorização de demandas críticas.

---

## Objetivo
Desenvolver um sistema básico de gerenciamento de tarefas que demonstre, na prática:
- A aplicação de metodologias ágeis
- A organização de projetos no GitHub
- O uso de controle de versão
- A automação de testes
- A gestão de mudanças no escopo do projeto

---

## Escopo Inicial
No escopo inicial, o sistema contempla:
- Visualização de tarefas em um quadro Kanban
- Criação de tarefas
- Alteração do status das tarefas (A Fazer, Em Progresso, Concluído)
- Estrutura básica em HTML e JavaScript
- Testes automatizados para validação do funcionamento

---
## Mudança de Escopo
Durante o desenvolvimento do projeto, foi identificada a necessidade de melhorar a
priorização das atividades. Dessa forma, foi adicionada uma nova funcionalidade ao sistema:

- Definição de **prioridade da tarefa** (Alta, Média ou Baixa)

Essa mudança teve como objetivo facilitar o foco em tarefas mais críticas, seguindo os
princípios das metodologias ágeis, que valorizam adaptação a mudanças ao longo do projeto.

A alteração foi registrada no Kanban do GitHub e implementada por meio de um novo commit.

---

## Metodologia Ágil Utilizada
Foi adotada a metodologia **Kanban**, devido à sua simplicidade e eficiência no controle visual das atividades. As tarefas do projeto foram organizadas no **GitHub Projects**, utilizando as colunas:
- A Fazer (To Do)
- Em Progresso (In Progress)
- Concluído (Done)

Essa abordagem permitiu acompanhar a evolução do projeto de forma clara e contínua.

---

## Controle de Qualidade
O projeto utiliza **testes automatizados** para garantir a qualidade do código.  
Foi configurado um **pipeline de Integração Contínua (CI)** utilizando **GitHub Actions**, responsável por:
- Executar os testes automaticamente a cada push
- Verificar se o código está funcionando corretamente
- Garantir maior confiabilidade na entrega do software

---

## Gestão de Mudanças
Durante o desenvolvimento, foi simulada uma **mudança de escopo**, com a adição de uma funcionalidade extra ao sistema. Essa mudança foi:
- Registrada neste README
- Criada como uma nova tarefa no quadro Kanban
- Implementada através de um novo commit no repositório

Essa prática reforça a flexibilidade e adaptabilidade das metodologias ágeis.

---

## Estrutura do Projeto

/src
└── Kanban.html # Código principal do sistema
/tests
└── kanban.testes.js # Testes automatizados
/docs
└── (Documentação, diagramas UML e levantamento de requisitos)
README.md # Documentação geral do projeto

---

## 🧠 Considerações Finais
Este projeto tem caráter educacional e foi desenvolvido com o objetivo de aplicar, de forma prática, os conceitos estudados na disciplina de Engenharia de Software, integrando desenvolvimento ágil, versionamento, testes automatizados e documentação técnica.