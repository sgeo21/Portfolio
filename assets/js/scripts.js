// Selecionar a Seção About
const about = document.querySelector('#about');

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

// Chamar a função getAPIGithub()

getApiGithub();