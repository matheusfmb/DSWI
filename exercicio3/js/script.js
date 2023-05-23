window.onload = function(){

    document.getElementById('nhome').addEventListener('click', function() {
        document.getElementById('home').style.display = 'block';
        document.getElementById('missao').style.display = 'none';
        document.getElementById('produtos').style.display = 'none';
        document.getElementById('servicos').style.display = 'none';
        document.getElementById('sobre').style.display = 'none';
      });
    
    document.getElementById('nmissao').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('missao').style.display = 'block';
        document.getElementById('produtos').style.display = 'none';
        document.getElementById('servicos').style.display = 'none';
        document.getElementById('sobre').style.display = 'none';
    });

    document.getElementById('nprodutos').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('missao').style.display = 'none';
        document.getElementById('produtos').style.display = 'block';
        document.getElementById('servicos').style.display = 'none';
        document.getElementById('sobre').style.display = 'none';
    });

    document.getElementById('nservicos').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('missao').style.display = 'none';
        document.getElementById('produtos').style.display = 'none';
        document.getElementById('servicos').style.display = 'block';
        document.getElementById('sobre').style.display = 'none';
    });

    document.getElementById('nsobre').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('missao').style.display = 'none';
        document.getElementById('produtos').style.display = 'none';
        document.getElementById('servicos').style.display = 'none';
        document.getElementById('sobre').style.display = 'block';
    });




}
