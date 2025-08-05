const shareBtn = document.getElementById('share');
const socials = document.getElementById('share-popup');

shareBtn.addEventListener('click', (e) => {
  socials.classList.toggle('hidden');
})
