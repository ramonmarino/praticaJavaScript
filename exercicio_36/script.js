class Conta {
    constructor(saldo){
        this.saldo = saldo;

    }

    verificarSaldo(){
        if(this.saldo < 0){
            console.log("Seu saldo está negativo!");

        }else{
            console.log("SEU SALDO EQUIVALE: R$ " + this.saldo  ) 
        }
    }

    deposito(valor){
        if(valor > 0 ){
            this.saldo += valor
            console.log("Depósito de R$:" + valor + " Efetuado com sucesso!");
        }else{
            console.log("O valor do depósito deve ser maior que zero.");

        }
       
    }

    saque(retirarValor){
        if(retirarValor > this.saldo){
            console.log("O valor retirado é maior que se saldo na conta!");

        }else{
            this.saldo -= retirarValor
            console.log("O valor do saque é: R$:" + retirarValor);
        }
    }

    
    
}

let conta = new Conta(100); // conta criada com saldo de 100 
conta.verificarSaldo();
conta.deposito(1000);
conta.verificarSaldo();
conta.saque(1500);
conta.saque(550);
conta.verificarSaldo();






