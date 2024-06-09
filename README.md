# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0).
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  



## Overview
![imagem do produto](./design/desktop-design.jpg)
### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Click here](https://github.com/Lucasdelacerda/huddle-landing-page-with-single-introductory-section-master)
- Live Site URL: [Click here](https://lucasdelacerda.github.io/huddle-landing-page-with-single-introductory-section-master/)

## My process
  I began by creating HTML markup, then applied CSS styling. Eventually, I had to use JavaScript to dynamically change the color of the icons.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JAVASCRIPT


### What I learned

Use JavaScript to change the colors of the SVG icons when the mouse enters and leaves.
```html
 <svg class="icons" fill="white" height="800px" width="800px" version="1.1" id="Layer_1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512"
          xml:space="preserve">
```
```js
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

```


### Continued development

My current focus is to begin using API connections for my projects.






