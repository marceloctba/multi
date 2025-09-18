// Aguarda o carregamento completo do DOM antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {
    // Lógica para definir o título da página com base no conteúdo do primeiro <h1>.
    const tituloH1 = document.querySelector('h1'); // Encontra o primeiro elemento <h1> na página.

    if (tituloH1) { // Verifica se o elemento <h1> foi encontrado.
        const textoDoH1 = tituloH1.textContent; // Obtém o texto de dentro do <h1>.
        document.title = textoDoH1; // Define o título do documento (tag <title>) com o texto do <h1>.
    }

    // Cria dinamicamente a estrutura HTML do menu oculto.
    const hiddenMenuDiv = document.createElement('div'); // Cria um novo elemento <div> para o menu.
    hiddenMenuDiv.classList.add('hidden-menu'); // Adiciona a classe CSS 'hidden-menu' ao div criado.

    // Array contendo os dados (URL e texto) para cada item do menu.
    const menuItemsData = [
        { href: "../Link.Avaliacao/index.html", text: "Ger. Link de Avaliação" },
        { href: "../Calc.Alcada/index.html", text: "Calculadora de Alçada" },
        { href: "../Calc.Hipoteca/index.html", text: "Calculadora de Hipoteca" },
        { href: "../Calc.DCA/index.html", text: "Calculadora de Margem DCA" },
    ];

    // Itera sobre o array menuItemsData para criar e adicionar cada link ao menu.
    menuItemsData.forEach(itemData => {
        const link = document.createElement('a'); // Cria um novo elemento <a> para o item do menu.
        link.setAttribute('href', itemData.href); // Define o atributo 'href' (URL de destino) do link.
        link.setAttribute('target', '_blank'); // Define o atributo 'target' para '_blank', para abrir o link em uma nova aba.
        link.classList.add('menu-item'); // Adiciona a classe CSS 'menu-item' ao link.
        link.textContent = itemData.text; // Define o texto visível do link.
        hiddenMenuDiv.appendChild(link); // Adiciona o link criado ao div do menu oculto.
    });

    // Adiciona o menu oculto (com todos os seus links) ao final do corpo do documento.
    document.body.appendChild(hiddenMenuDiv);

    // Seleciona o elemento do ícone de toggle do menu e o menu oculto recém-criado.
    const menuToggle = document.querySelector('.menu-toggle'); // Encontra o elemento com a classe 'menu-toggle'.
    const hiddenMenu = hiddenMenuDiv; // Reutiliza a referência ao div do menu oculto criado anteriormente.

    // Verifica se os elementos essenciais (ícone de toggle e menu) foram encontrados no DOM.
    if (menuToggle && hiddenMenu) {

        // Função para fechar o menu.
        const closeMenu = () => {
            if (hiddenMenu.classList.contains('is-visible')) { // Verifica se o menu está atualmente visível.
                hiddenMenu.classList.remove('is-visible'); // Remove a classe que torna o menu visível.
                menuToggle.classList.remove('is-active'); // Remove a classe que indica o estado ativo do ícone de toggle.
                document.removeEventListener('click', handleClickOutsideMenu); // Remove o listener de clique fora do menu.
            }
        };

        // Função para abrir o menu.
        const openMenu = () => {
            if (!hiddenMenu.classList.contains('is-visible')) { // Verifica se o menu não está visível.
                hiddenMenu.classList.add('is-visible'); // Adiciona a classe que torna o menu visível.
                menuToggle.classList.add('is-active'); // Adiciona a classe que indica o estado ativo do ícone de toggle.
                // Adiciona um listener para cliques no documento, após um pequeno delay.
                // Isso permite fechar o menu clicando fora dele, e o delay evita que o clique que abriu o menu o feche imediatamente.
                setTimeout(() => {
                    document.addEventListener('click', handleClickOutsideMenu);
                }, 50); // Delay de 50 milissegundos.
            }
        };

        // Função para alternar a visibilidade do menu (abrir ou fechar).
        const toggleMenu = () => {
            if (hiddenMenu.classList.contains('is-visible')) { // Se o menu está visível, fecha-o.
                closeMenu();
            } else { // Se o menu não está visível, abre-o.
                openMenu();
            }
        };

        // Adiciona um listener de evento de clique ao ícone de toggle do menu.
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o evento de clique se propague para elementos pai (como o 'document').
            toggleMenu(); // Chama a função para alternar a visibilidade do menu.
        });

        // Função para lidar com cliques fora da área do menu.
        const handleClickOutsideMenu = (event) => {
            const isClickInsideMenu = hiddenMenu.contains(event.target); // Verifica se o clique ocorreu dentro do menu.

            // Se o menu está visível e o clique não foi dentro dele, fecha o menu.
            if (!isClickInsideMenu) {
                closeMenu();
            }
        };
    }
});