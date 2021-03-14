import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 100)
    }
    //Sobrescrevendo o comportamento de sacar da classe Contas
    sacar(valor) {
        let taxa = 1.01;
        return this._sacar(valor, taxa);
        }
    }