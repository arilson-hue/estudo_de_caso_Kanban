const { criarTarefa } = require("../src/Kanban");

try {
  criarTarefa("Estudar Kanban");
  console.log("Teste 1 passou");
} catch {
  console.error("Teste 1 falhou");
  process.exit(1);
}

try {
  criarTarefa("");
  console.error("Teste 2 falhou");
  process.exit(1);
} catch {
  console.log("Teste 2 passou");
}
