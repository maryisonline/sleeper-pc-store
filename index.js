// variaveis dos slides
const firstSlide = document.getElementById("slide1");
const secondSlide = document.getElementById("slide2");
const thirdSlide = document.getElementById("slide3");
const fourthSlide = document.getElementById("slide4");
const fifthSlide = document.getElementById("slide5");

// variaveis dos inputs do tipo radio
const firstInput = document.getElementById("input-slide1");
const secondInput = document.getElementById("input-slide2");
const thirdInput = document.getElementById("input-slide3");
const fourthInput = document.getElementById("input-slide4");
const fifthInput = document.getElementById("input-slide5");

// arrays dos conjuntos de slides e dos input radios de cada
slides = [firstSlide, secondSlide, thirdSlide, fourthSlide, fifthSlide];
inputs = [firstInput, secondInput, thirdInput, fourthInput, fifthInput];

// funcao q tem como argumento ActiveSlide
function changeSlide(activeSlide) {
    // percorre todos os itens do array slides e itera sobre eles
    slides.forEach(slide => {
        // verifica se o slide corresponde ao argumento
        if (slide === activeSlide) {
            slide.style.display = 'block'; // se sim, ira bloquear o atual display (nesse caso ira mostrar o slide)
        } else {
            slide.style.display = 'none'; // se nao permanecera escondido, que eh o caso dos slides que nao estao selecionados
        }
    });
};

// chama a funcao dos slides para passar inicialmente o Slide1 como o primeiro a ficar visivel por padrao
changeSlide(firstSlide)

// percorre todos os itens do array inputs e itera sobre eles
inputs.forEach((input, index) => {
    // adiciona um evento que ao mudar o input, ira ativar alguma ação
    input.addEventListener("change", function() {
        // console para verificar qual o input que estava ativando
        console.log(`${input.id}`);
        // chama a funcao de mudar slide para chamar o slide de acordo com o index
        changeSlide(slides[index]);
    })
});
