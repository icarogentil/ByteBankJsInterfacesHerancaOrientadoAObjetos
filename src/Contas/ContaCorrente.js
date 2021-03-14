import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static QtdDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.QtdDeContas += 1;
    }
    //Sobrescrevendo o comportamento de sacar da classe Contas
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
        }
    }