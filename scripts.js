const shareBtn = document.getElementById('shareBtn');
const shareBtnPopup = document.getElementById('shareBtnPopup');
const sharePopup = document.getElementById('sharePopup');
const authorSection = document.getElementById('authorSection');

function toggleShare(e) {
    e.preventDefault();
    e.stopPropagation();
    shareBtn.classList.toggle('active');
    sharePopup.classList.toggle('active');
    authorSection.classList.toggle('hidden');
}

shareBtn.addEventListener('click', toggleShare);
if (shareBtnPopup) {
    shareBtnPopup.addEventListener('click', toggleShare);
}

// Close share popup when clicking outside
document.addEventListener('click', function(e) {
    if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
        shareBtn.classList.remove('active');
        sharePopup.classList.remove('active');
        authorSection.classList.remove('hidden');
    }
});
