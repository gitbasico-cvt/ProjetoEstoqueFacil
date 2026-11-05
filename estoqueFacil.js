const lerLinha =require("readline-sync");
//Banco de Dados
let usuarioCorreto = "admin";
let senhaCorreta = "@admin";
let produtos = ["teclado","mouse","monitor"];
//--------------------------------------------
console.log("Digite o Usuario");
let usuarioDigitado = lerLinha.question();
console.log(usuarioDigitado);
console.log("Digite a Senha");
let senhaDigitado = lerLinha.question();
console.log(usuarioDigitado);
if (usuarioDigitado === usuarioCorreto && senhaDigitado === senhaCorreta) {
    console.log("Acesso Liberado");
    console.log("MENU");
    console.log("1 - Listar Produto");
    console.log("2 - Cadastrar Produto");
    console.log("3 - Atualizar Produto");
    console.log("4 - Excluir Produto");
    console.log("0 - Sair");
    console.log("Digite a Opção Escolhida");
    let opcao = lerLinha.question();
    while (opcao !="0"){
    if (opcao === "1") {
        console.log("1 - Listar Produto");
        console.log(produtos);
        
    }else if (opcao === "2"){
      console.log("2 - Cadastrar Produto"); 
      let novoProduto = lerLinha.question().toLowerCase();
      produtos.push(novoProduto);
      console.log(produtos);
      console.log("Produto Adicionado com Sucesso");
      
    }else if (opcao === "3"){
      console.log("3 - Atualizar Produto"); 
      console.log("Produto a ser Atualizado?");
      console.log(produtos);
      let produtoAtualizar = lerLinha.question().toLowerCase();
      if(produtos.includes(produtoAtualizar)){
        let indice = produtos.indexOf(produtoAtualizar);
        console.log("Digite o Produto a ser atualizado?");
        let novoNome = lerLinha.question().toLowerCase();
        produtos[indice]=novoNome;
        console.log("Produto Atualizado?");  
       console.log(produtos);
      }else{
        console.log("Produto Não Encontrado");
      }
      
    }else if (opcao === "4"){
      console.log("4 - Excluir Produto");  
     console.log(produtos);
     console.log("Digite o Produto a ser Removido?");
     let produtoRemover = lerLinha.question().toLowerCase();
     if(produtos.includes(produtoRemover)){
        let indiceExcluir = produtos.indexOf(produtoRemover);        
        produtos.splice(indiceExcluir,1);
        console.log("Produto Removido?");  
       console.log(produtos);
      }else{
        console.log("Produto Não Encontrado");
      }

    }    
    else {
        console.log("Opção Invalida");        
    }
    console.log("Digite a Opção Escolhida");
    opcao = lerLinha.question();
    }
} else {
    console.log("Acesso Negado");
}
