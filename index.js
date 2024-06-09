var icones = document.querySelectorAll('.icons');

icones.forEach((icone) => {
    icone.addEventListener('mouseenter', function () {
        // Altera o preenchimento de todos os ícones para branco
        icones.forEach((icone) => {
            icone.setAttribute('fill', 'white');
        });
        // Altera o preenchimento do ícone específico para vermelho
        this.setAttribute('fill', '#e882e8');
        console.log('entrou');
    });
});
icones.forEach((icone) => {
    icone.addEventListener('mouseleave', () => {
        icones.forEach((icone) => {
            icone.setAttribute('fill', 'white');
        })
    })
})
