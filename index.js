const nuke = document.querySelector('#clickToNuke');

nuke.addEventListener('click', updateName);

function updateName() {
  nuke.innerText   = 'This has been nuked';
};
