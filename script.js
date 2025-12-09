// =====================
//  CARDS DINÂMICOS (SOMENTE NO INDEX)
// =====================

document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.getElementById("cards-container");

    // Se NÃO existe cards-container, não executa nada
    if (!container) return;

    fetch("data.json")
        .then(response => response.json())
        .then(data => {

            data.cards.forEach(card => {
                const div = document.createElement("div");
                div.classList.add("card");

                const whatsappNumber = "555130920302";
                const mensagem = encodeURIComponent(`Olá! Gostaria de um orçamento sobre: ${card.titulo}`);

                div.innerHTML = `
                    <div class="card-bg" style="background-image: url('${card.imagem}');"></div>
                    <h3>${card.titulo}</h3>
                    <p>${card.descricao}</p>
                    <a 
                      href="${card.link}"
                      class="btn-orcamento"
                      >
                      Solicitar Orçamento
                    </a>
                `;

                container.appendChild(div);
            });
        })
        .catch(erro => console.log("Erro ao carregar JSON:", erro));
});


// =====================
//  FORMULÁRIO PARA WHATSAPP (TODAS AS PÁGINAS)
// =====================

document.addEventListener("DOMContentLoaded", () => {
    
    const btnEnviar = document.getElementById("btnEnviar");

    if (!btnEnviar) return; // Se o botão não existe, não faz nada

    btnEnviar.addEventListener("click", () => {

        const nome = document.getElementById("nome").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !whatsapp || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const numeroEmpresa = "5551992739330";

        const texto =
            `Olá! Gostaria de atendimento.\n\n` +
            `*Nome:* ${nome}\n` +
            `*WhatsApp:* ${whatsapp}\n` +
            `*E-mail:* ${email}\n` +
            `*Mensagem:* ${mensagem}`;

        const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
    });
});

