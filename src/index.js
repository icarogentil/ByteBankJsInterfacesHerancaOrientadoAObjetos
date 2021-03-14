import { Cliente } from "./Clientes/Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutentificacao } from "./SistemaAutentificacao.js";

// Criação clientes
const cliente1 = new Cliente("Icaro", 14874948740, "260898icaro");
const cliente2 = new Cliente("Cristiane", 81744676534, "sacramento");

// Operações clientes
const clienteLogado = SistemaAutentificacao.login(cliente1, "260898icaro")

// Criação contas
const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente2, 1001);

// Operações contas
contaCorrente.depositar(500);
contaCorrente.transferrir(200, contaPoupanca);

// Criação Funcionarios
const diretor = new Diretor("rodrigo", 10000, 54832985515);
const gerente = new Gerente("Ricardo", 5000, 98765432100);

// Operações Funcionarios
diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("654321");
const gerenteLogado = SistemaAutentificacao.login(diretor, "123456");
const diretorLogado = SistemaAutentificacao.login(gerente, "123456");

console.log(diretor);
console.log(gerente);
console.log(gerenteLogado);
console.log(diretorLogado);
console.log(clienteLogado);
