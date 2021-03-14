/*
Ser autenticavel significa ter o método "autentificar"

ducky type
*/

export class SistemaAutentificacao {
    static login(autentificavel, senha) {
        if(SistemaAutentificacao.ehAutenticavel(autentificavel)) {
            return autentificavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}