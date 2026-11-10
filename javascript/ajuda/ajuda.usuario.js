let idiomaAtual = "pt";

// TRADUÇÕES//

const traducoes = {
    pt: {
        login: "Fazer login",
        cadastro: "Cadastre-se",

        tagFaq: "TIRE SUAS DÚVIDAS",
        tituloFaq: "Perguntas frequentes",

        perguntas: [
            ["Como solicito uma corrida?",
                "Entre na sua conta, informe o local de partida e o destino, confira os dados e confirme a solicitação."],

            ["Posso alterar meu destino?",
                "Se a corrida já começou, entre em contato com o motorista e verifique se a alteração é possível."],

            ["Por que não encontro um motorista?",
                "A disponibilidade pode variar conforme a região e o horário. Tente novamente após alguns instantes."],

            ["Como cancelo uma corrida?",
                "Acesse os detalhes da corrida e procure a opção de cancelamento. Confira as condições antes de confirmar."]
        ],

        tagSuporte: "PRECISA DE AJUDA?",
        tituloSuporte: "Estamos aqui para ajudar você.",
        descricaoSuporte: "Acesse a Central de Ajuda para encontrar outras orientações sobre sua conta, pagamentos e segurança.",
        linkSuporte: "Acessar suporte →",

        central: "Acesse a Central de Ajuda",
        endereco: "WN57 Tecnologia Ltda | Avenida Brasil, nº 949, Pinhais, Paraná, Brasil - CEP 83320-000",

        colunas: [
            ["Empresa", "Quem somos", "Investidores", "Blog", "Carreiras"],
            ["Produtos", "Viajar", "Gift cards", "WN57 Health", "WN57 Advertising"],
            ["Cidadania global", "Segurança", "Sustentabilidade"],
            ["Viagem", "Reservar", "Aeroportos", "Hotéis", "Cidades"]
        ],

        localizacao: ["🌐 Português (Brasil)", "📍 Curitiba"],
        direitos: ["Privacidade", "Termos", "Acessibilidade"]
    },

    en: {
        login: "Log in",
        cadastro: "Sign up",

        tagFaq: "FREQUENTLY ASKED QUESTIONS",
        tituloFaq: "Frequently asked questions",

        perguntas: [
            ["How do I request a ride?",
                "Log in to your account, enter your pickup location and destination, check the details and confirm your request."],

            ["Can I change my destination?",
                "If the ride has already started, contact the driver and check whether the change is possible."],

            ["Why can't I find a driver?",
                "Availability may vary depending on the region and time. Try again in a few moments."],

            ["How do I cancel a ride?",
                "Open your ride details and look for the cancellation option. Check the conditions before confirming."]
        ],

        tagSuporte: "NEED HELP?",
        tituloSuporte: "We are here to help you.",
        descricaoSuporte: "Visit the Help Center to find more information about your account, payments and safety.",
        linkSuporte: "Access support →",

        central: "Visit the Help Center",
        endereco: "WN57 Tecnologia Ltda | Avenida Brasil, No. 949, Pinhais, Paraná, Brazil - ZIP 83320-000",

        colunas: [
            ["Company", "About us", "Investors", "Blog", "Careers"],
            ["Products", "Ride", "Gift cards", "WN57 Health", "WN57 Advertising"],
            ["Global citizenship", "Safety", "Sustainability"],
            ["Travel", "Book", "Airports", "Hotels", "Cities"]
        ],

        localizacao: ["🌐 English", "📍 Curitiba"],
        direitos: ["Privacy", "Terms", "Accessibility"]
    }
};



// ALTERAR IDIOMA//
function trocarIdioma() {

    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";

    const t = traducoes[idiomaAtual];

    // Botão de idioma
    const botaoIdioma = document.querySelector(".idioma");

    if (botaoIdioma) {
        botaoIdioma.textContent =
            idiomaAtual === "pt" ? "🌐 PT-BR" : "🌐 EN";
    }

    // Idioma do documento
    document.documentElement.lang =
        idiomaAtual === "pt" ? "pt-BR" : "en";

    // Título da aba
    document.title = idiomaAtual === "pt"
        ? "Solicitar uma corrida • WN57"
        : "Request a ride • WN57";

    // Cabeçalho
    document.querySelector(".header-direita a:nth-child(2)").textContent = t.login;
    document.querySelector(".btn-cadastro").textContent = t.cadastro;

    // Perguntas frequentes
    document.querySelector(".faq .tag").textContent = t.tagFaq;
    document.querySelector(".faq h2").textContent = t.tituloFaq;

    document.querySelectorAll(".perguntas details").forEach((item, index) => {
        item.querySelector("summary").textContent = t.perguntas[index][0];
        item.querySelector("p").textContent = t.perguntas[index][1];
    });

    // Seção de suporte
    document.querySelector(".seguranca .tag").textContent = t.tagSuporte;
    document.querySelector(".seguranca h2").textContent = t.tituloSuporte;
    document.querySelector(".seguranca p").textContent = t.descricaoSuporte;
    document.querySelector(".seguranca a").textContent = t.linkSuporte;

    // Rodapé superior
    document.querySelector(".rodape-topo a").textContent = t.central;
    document.querySelector(".endereco").textContent = t.endereco;

    // Colunas do rodapé
    document.querySelectorAll(".rodape-coluna").forEach((coluna, i) => {
        const textos = t.colunas[i];

        coluna.querySelector("h3").textContent = textos[0];

        coluna.querySelectorAll("a").forEach((link, j) => {
            link.textContent = textos[j + 1];
        });
    });

    // Localização
    document.querySelectorAll(".localizacao span").forEach((span, i) => {
        span.textContent = t.localizacao[i];
    });

    // Direitos
    document.querySelectorAll(".rodape-direitos a").forEach((link, i) => {
        link.textContent = t.direitos[i];
    });
}


// MENU DE IDIOMA//


document.addEventListener("DOMContentLoaded", () => {

    const idioma = document.querySelector(".idioma");

    if (idioma) {
        idioma.addEventListener("click", (event) => {
            event.preventDefault();
            trocarIdioma();
        });
    }

    // PERGUNTAS FREQUENTES//


    const perguntas = document.querySelectorAll(".perguntas details");

    perguntas.forEach(pergunta => {

        pergunta.addEventListener("toggle", () => {

            if (pergunta.open) {
                perguntas.forEach(outra => {
                    if (outra !== pergunta) {
                        outra.open = false;
                    }
                });
            }

        });

    });

   
    // ANIMAÇÃO DE ENTRADA//
 

    const secoes = document.querySelectorAll(".faq, .seguranca");

    secoes.forEach(secao => {
        secao.style.opacity = "0";
        secao.style.transform = "translateY(25px)";
        secao.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    setTimeout(() => {
        secoes.forEach(secao => {
            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";
        });
    }, 150);

  
    // BOTÃO VOLTAR AO TOPO//
  

    const botaoTopo = document.createElement("button");

    botaoTopo.className = "voltar-topo";
    botaoTopo.textContent = "↑";
    botaoTopo.setAttribute("aria-label", "Voltar ao topo");

    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", () => {
        botaoTopo.classList.toggle("visivel", window.scrollY > 300);
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const perguntas = document.querySelector(".perguntas");
    const faq = document.querySelector(".faq");
    const detalhes = document.querySelectorAll(".perguntas details");
    const footer = document.querySelector(".rodape");

    if (!perguntas || !faq) return;

    // NOTIFICAÇÕES
    function notificar(mensagem) {
        let toast = document.querySelector(".wn57-notificacao");

        if (!toast) {
            toast = document.createElement("div");
            toast.className = "wn57-notificacao";
            document.body.appendChild(toast);
        }

        toast.textContent = mensagem;
        toast.classList.add("mostrar");

        clearTimeout(window.wn57ToastTimeout);

        window.wn57ToastTimeout = setTimeout(() => {
            toast.classList.remove("mostrar");
        }, 3000);
    }

    // ABRIR UMA PERGUNTA POR VEZ
    let expandindoTodas = false;

    detalhes.forEach((detalhe) => {
        detalhe.addEventListener("toggle", () => {

            if (detalhe.open && !expandindoTodas) {
                detalhes.forEach((outra) => {
                    if (outra !== detalhe) {
                        outra.open = false;
                    }
                });
            }

            detalhe.classList.toggle("aberta", detalhe.open);
        });
    });

    // CONTROLES DE EXPANDIR E RECOLHER
    const controles = document.createElement("div");
    controles.className = "wn57-controles-faq";

    const botaoExpandir = document.createElement("button");
    botaoExpandir.type = "button";
    botaoExpandir.textContent = "＋ Expandir todas";

    const botaoRecolher = document.createElement("button");
    botaoRecolher.type = "button";
    botaoRecolher.textContent = "－ Recolher todas";

    const contador = document.createElement("span");
    contador.className = "wn57-contador";
    contador.textContent = `${detalhes.length} perguntas`;

    controles.append(botaoExpandir, botaoRecolher, contador);
    perguntas.before(controles);

    botaoExpandir.addEventListener("click", () => {
        expandindoTodas = true;

        detalhes.forEach((detalhe) => {
            detalhe.open = true;
        });

        expandindoTodas = false;
        notificar("Todas as perguntas foram abertas!");
    });

    botaoRecolher.addEventListener("click", () => {
        detalhes.forEach((detalhe) => {
            detalhe.open = false;
        });

        notificar("Todas as perguntas foram recolhidas!");
    });

    // BOTÃO PARA COPIAR RESPOSTAS
    detalhes.forEach((detalhe) => {
        const resposta = detalhe.querySelector("p");

        if (!resposta) return;

        const copiar = document.createElement("button");
        copiar.type = "button";
        copiar.className = "wn57-copiar";
        copiar.textContent = "Copiar resposta";

        resposta.after(copiar);

        copiar.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(
                    resposta.innerText.trim()
                );

                notificar("Resposta copiada!");
            } catch (erro) {
                notificar("Não foi possível copiar a resposta.");
            }
        });
    });

    // AVALIAÇÃO DAS RESPOSTAS
    detalhes.forEach((detalhe, index) => {

        const resposta = detalhe.querySelector("p");

        if (!resposta) return;

        const avaliacao = document.createElement("div");
        avaliacao.className = "wn57-avaliacao";

        const texto = document.createElement("span");
        texto.textContent = "Esta informação foi útil?";

        const sim = document.createElement("button");
        sim.type = "button";
        sim.textContent = "Sim 👍";

        const nao = document.createElement("button");
        nao.type = "button";
        nao.textContent = "Não 👎";

        avaliacao.append(texto, sim, nao);
        resposta.after(avaliacao);

        function salvarAvaliacao(valor) {
            const chave = "wn57_avaliacoes_usuario";

            let avaliacoes = {};

            try {
                avaliacoes = JSON.parse(
                    localStorage.getItem(chave)
                ) || {};
            } catch (erro) {
                avaliacoes = {};
            }

            avaliacoes[index] = valor;

            localStorage.setItem(
                chave,
                JSON.stringify(avaliacoes)
            );

            sim.disabled = true;
            nao.disabled = true;

            notificar("Obrigado pela sua avaliação!");
        }

        sim.addEventListener("click", () => {
            salvarAvaliacao("sim");
        });

        nao.addEventListener("click", () => {
            salvarAvaliacao("nao");
        });
    });

    // ANIMAÇÃO AO APARECER NA TELA
    const elementosAnimados = document.querySelectorAll(
        ".faq, .seguranca, .rodape"
    );

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("wn57-visivel");
                    observador.unobserve(entrada.target);
                }

            });

        }, {
            threshold: 0.15
        });

        elementosAnimados.forEach((elemento) => {
            elemento.classList.add("wn57-animar");
            observador.observe(elemento);
        });

    }

    // BARRA DE PROGRESSO DA PÁGINA
    const progresso = document.createElement("div");
    progresso.className = "wn57-progresso";
    document.body.appendChild(progresso);

    window.addEventListener("scroll", () => {

        const altura =
            document.documentElement.scrollHeight - window.innerHeight;

        const porcentagem =
            altura > 0 ? (window.scrollY / altura) * 100 : 0;

        progresso.style.width = `${porcentagem}%`;

    });

    // BOTÃO VOLTAR AO TOPO
    const voltarTopo = document.createElement("button");
    voltarTopo.type = "button";
    voltarTopo.className = "wn57-voltar-topo";
    voltarTopo.textContent = "↑";
    voltarTopo.setAttribute("aria-label", "Voltar ao topo");

    document.body.appendChild(voltarTopo);

    window.addEventListener("scroll", () => {
        voltarTopo.classList.toggle(
            "visivel",
            window.scrollY > 350
        );
    });

    voltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ATUALIZAR ANO DO RODAPÉ
    if (footer) {
        const ano = footer.querySelector(".rodape-bottom span");

        if (ano) {
            ano.textContent = `© ${new Date().getFullYear()} WN57`;
        }
    }

    // ACESSIBILIDADE: TECLA ESC FECHA AS PERGUNTAS
    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {
            detalhes.forEach((detalhe) => {
                detalhe.open = false;
            });
        }

    });

    console.log("WN57 - JavaScript da página de corridas carregado!");

});
