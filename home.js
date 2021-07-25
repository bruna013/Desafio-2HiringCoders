var clientes = [{}]
var produtos = [{}]


function cadastroProduto(){
    var produto = {NomeProduto: document.getElementById('nomeProduto').value, 
                   CodigoProduto:  document.getElementById('codigoProduto').value, 
                   descricaoProduto: document.getElementById('descricaoProduto').value,
                   fornecedorProduto: document.getElementById('fornecedorProduto').value, 
                   precoProduto: document.getElementById('precoProduto').value, 
                   quantidadeProduto: document.getElementById('quantidadeProduto').value, 
                   boleto: document.getElementById('boleto').value, 
                   cartaoCredito: document.getElementById('cartaoCredito').value, 
                   pix: document.getElementById('pix').value, 
                   file: document.getElementById('file').value
                    };
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    limparCampos();
}


function cadastroCliente(){
    var cliente = {NomeCliente: document.getElementById('nomeCliente').value, 
                   emailCliente:  document.getElementById('emailCliente').value, 
                   enderecoCliente: document.getElementById('enderecoCliente').value,
                   dataNascimentoCliente: document.getElementById('dataNascimentoCliente').value, 
                   telefoneCliente: document.getElementById('telefoneCliente').value, 
                   CPFCliente: document.getElementById('cpfCliente').value, 
                    };
    clientes.push(cliente);
    localStorage.setItem('usuarios', JSON.stringify(clientes));
    limparCampos();
}


function limparCampos(){
    document.getElementById('nomeProduto').value = "";
    document.getElementById('codigoProduto').value = "";
    document.getElementById('descricaoProduto').value = "";
    document.getElementById('precoProduto').value = "";
    document.getElementById('fornecedorProduto').value = "";
    document.getElementById('quantidadeProduto').value = "";
    document.getElementById('boleto').value = "";
    document.getElementById('cartaoCredito').value = "";
    document.getElementById('pix').value = "";
    document.getElementById('file').value = "";
    document.getElementById('nomeCliente').value = "";
    document.getElementById('emailCliente').value = "";
    document.getElementById('enderecoCliente').value = "";
    document.getElementById('dataNascimentoCliente').value = "";
    document.getElementById('telefoneCliente').value = "";
    document.getElementById('cpfCliente').value = "";
}


function  clearLocalStorage(){
    localStorage.removeItem('Nome do Produto');
    localStorage.removeItem('Codigo do Produto');
    localStorage.removeItem('Descricao do Produto');
    localStorage.removeItem('Fornecedor do Produto');
    localStorage.removeItem('Preco do Produto');
    localStorage.removeItem('Quantidade do Produto');
    localStorage.removeItem('Boleto');
    localStorage.removeItem('Cartao de Credito');
    localStorage.removeItem('Pix');
    localStorage.removeItem('File');
}



function  exibirCadCliente(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('form').style.display = 'flex';
    document.getElementById('cliente').style.visibility = 'visible';
    document.getElementById('produtos').style.display = 'none';
    document.getElementById('cliente').style.display = 'flex';
    document.getElementById('main').style.justifyContent = 'center';
    document.getElementById('cliente').style.width = '30vw';
    document.getElementById('produtos').style.width = '0vw';
    document.getElementById('main').style.width = '90vw';
}

function  exibirCadProduto(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('form').style.display = 'flex';
    document.getElementById('produtos').style.visibility = 'visible';
    document.getElementById('produtos').style.display = 'flex';
    document.getElementById('cliente').style.display = 'none';
    document.getElementById('main').style.justifyContent = 'center';
    document.getElementById('produtos').style.width = '30vw';
    document.getElementById('cliente').style.width = '0vw';
    document.getElementById('main').style.width = '90vw';
}

function exibirHome(){
    document.getElementById('home').style.display = 'flex';
    document.getElementById('form').style.display = 'none';
    document.getElementById('produtos').style.display = 'none';
    document.getElementById('cliente').style.display = 'none';
    document.getElementById('produtos').style.width = '0vw';
    document.getElementById('cliente').style.width = '0vw';
    document.getElementById('main').style.width = '90vw';
}