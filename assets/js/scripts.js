// Selecionar a Seção About
const about = document.querySelector('#about');

//Selecionar o formulário
const formulario = document.querySelector('#formulario');

// Expressão Regular para validação de e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 


// Função para buscar os dados no GitHub
async function getApiGithub(){

    try{

        // PASSO 01: Fazer uma Requisição GET para a API do GitHub
        const dadosPerfil = await fetch('https://api.github.com/users/sgeo21');

        // PASSO 02: Converter a Resposta da API para JSON
        const perfilJson = await dadosPerfil.json();
        

        // PASSO 03: Criar o HTML/CSS com os dados do Perfil

        let conteudo = `
        
            <!-- FOTO DO PERFIL -->
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure>

            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">

                <h2>Sobre mim</h2>
                <p>Sou Geovana Cazali, desenvolvedora em formação apaixonada por tecnologia e inovação.</p>
                <p>Minha jornada na área começou com o bootcamp da Generation Brasil, onde desenvolvi habilidades técnicas em Java, MySQL, Spring Boot e front-end, além de aprimorar competências comportamentais essenciais para o trabalho em equipe e a resolução de problemas.</p>
                <p>Hoje sigo me aperfeiçoando em Desenvolvimento de Sistemas, explorando novas ferramentas e fortalecendo minha atuação como futura profissional da área. Acredito que a tecnologia é uma ponte entre ideias e impacto real e é nessa travessia que quero continuar crescendo. </p>

                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                    
                    <!-- Faltou esta div para alinhar os cards -->
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>

                </div>
            </article>

        `

        //PASSO 04: Adicionar o HTML dentro da Seção About

        about.innerHTML += conteudo;

    }catch(error){
        console.error(error);
    }
}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function(event){
    //Impedir o envio automático do formulário 
    event.preventDefault(); // não enviar o formulário enquanto não houver a validação

    //Validação do campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome =document.querySelector('#txtNome');

    // Nome precisa ter no minimo 3 carcateres

    if(campoNome.value.length <3){
        txtNome.innerHTML = 'O nome deve ter no mínimo 3 caracteres.';
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = ''; 
    }

     //Validação do campo e-mail
    const campoEmail = document.querySelector('#email');
    const txtEmail =document.querySelector('#txtEmail');

    // Email precisa ter no minimo caracteres especiais @,., etc.

    if(!campoEmail.value.match(emailRegex)){ // verifica a digitação
        txtEmail.innerHTML = 'Digite um e-mail válido.'; // pede a correção
        campoEmail.focus(); 
        return;
    }else{
        txtEmail.innerHTML = ''; 
    }

    //Validação do campo Assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto =document.querySelector('#txtAssunto');

    // Nome precisa ter no minimo 5 carcateres

    if(campoAssunto.value.length <5){
        txtAssunto.innerHTML = 'O assunto deve ter no mínimo 5 caracteres.';
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = ''; 
    }
    //pode fazer uma validação de mensagem se quiser! 
    //Se passou por todas as validações, envia o formulário
    formulario.submit();
})

//cria o carrossel de projetos 
        var myIndex = 0;
            carousel();
            function carousel() {
                var i;
                var x = document.getElementsByClassName("slides");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                myIndex++;
                if (myIndex > x.length) { myIndex = 1 }
                x[myIndex - 1].style.display = "block";
                setTimeout(carousel, 5000); // Change image every 2 seconds
            }
            // Audio
function tocarAudio() {
    var audio = document.getElementById('meuAudio');
    audio.play();
}

// Alternativamente, para controlar o loop via JS (embora o atributo HTML seja suficiente):
var audioJS = document.getElementById('meuAudio');
audioJS.loop = true; {

    const meuAudio = document.getElementById("meuAudio");
    meuAudio.play();
}

function pausarAudio() {
    const meuAudio = document.getElementById("meuAudio");
    meuAudio.pause();
}

    

// Chamar a função getAPIGithub()


getApiGithub();