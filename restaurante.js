const input =require("readline-sync");
//Banco de Dados
let login = "admin";
let senha = "@admin";
let listaProdutos = ["pizza","hamburguer","suco","batata frita","lasanha", "salada", "pudim", "refrigerante", "agua", "cafe"];
let contraSenha = "1235";
// ----- Testando-------
//console.log(listaProdutos);
console.log("Digite Login");
let loginDigitado = input.question();
//console.log(loginDigitado);
console.log("Digite a Senha");
let digitadoSenha = input.question();
//console.log(senha);
//----------------------------------------------------
if (login === loginDigitado && senha === digitadoSenha) {
    //console.log(contraSenha);
        console.log("Acesso Liberado");
        console.log("Sistema de Gestão do Restaurante Sabor & Código ");
        console.log("1 - Listar Produto");
        console.log("2 - Cadastrar Produto");
        console.log("3 - Atualizar Produto");
        console.log("4 - Excluir Produto");
        console.log("0 - Sair");
        console.log("Digite a Opção Escolhida");
        let opcao = input.question();
        //------------------------------------------------------------
  
   while (opcao !="0"){
       if (opcao === "1") {
           console.log("1 - Listar Produto");
           console.log(listaProdutos);
           
       }else if (opcao === "2"){
        console.log("Favor Chamar o Admin");                
         let senhaUsada = input.question();
         if (senhaUsada === contraSenha) {
           console.log("2 - Cadastrar Produto");  
        let digiteProduto = input.question().toLowerCase();
         listaProdutos.push(digiteProduto);
         console.log(listaProdutos);
         console.log("Produto Adicionado com Sucesso");
         }else{
          console.log("Acesso Negado");  
         }                 
       }else if (opcao === "3"){
         console.log("3 - Atualizar Produto"); 
         console.log("Produto a ser Atualizado?");
         console.log(listaProdutos);
         let atualizarProduto = input.question().toLowerCase();
         if(listaProdutos.includes(atualizarProduto)){
           let indiceProduto = listaProdutos.indexOf(atualizarProduto);
           console.log("Digite o Produto a ser atualizado?");
           let antigoProduto = input.question().toLowerCase();
           listaProdutos[indiceProduto]=antigoProduto;
           console.log("Produto Atualizado?");  
          console.log(listaProdutos);
         }else{
           console.log("Produto Não Encontrado");
         }
         
       }else if (opcao === "4"){
         console.log("4 - Excluir Produto");  
        console.log(listaProdutos);
        console.log("Digite o Produto a ser Removido?");
        let removerProduto = input.question().toLowerCase();
         console.log(removerProduto); 
        if(listaProdutos.includes(removerProduto)){
           let indiceEncontrado = listaProdutos.indexOf(removerProduto);        
           listaProdutos.splice(indiceEncontrado,1);
           console.log("Produto Removido?");  
          console.log(listaProdutos);
         }else{
           console.log("Produto Não Encontrado");
         }
  }    
     else {
         console.log("Opção Invalida");        
     }      
        console.log("Sistema de Gestão do Restaurante Sabor & Código ");
        console.log("1 - Listar Produto");
        console.log("2 - Cadastrar Produto");
        console.log("3 - Atualizar Produto");
        console.log("4 - Excluir Produto");
        console.log("0 - Sair");
     console.log("Digite a Opção Escolhida");
     opcao = input.question();
     }  

} else {
  console.log("Acesso Negado");  
}
   
