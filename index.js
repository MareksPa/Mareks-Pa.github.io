const nuke = document.querySelector('#clickToNuke');

nuke.addEventListener('click', updateName);

function updateName() {

  nuke.innerText   = 'This has been nuked ' + "times";

};

document.addEventListener('DOMContentLoaded', () => {
  function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }
});
