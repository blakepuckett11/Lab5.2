const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initialize hidden state
commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');
showHideBtn.setAttribute('tabindex', '0');
showHideBtn.setAttribute('role', 'button');

showHideBtn.addEventListener('click', toggleComments);
showHideBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault(); 
    toggleComments();
  }
});

function toggleComments() {
  let isHidden = commentWrapper.style.display === 'none';
  commentWrapper.style.display = isHidden ? 'block' : 'none';
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  showHideBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false'); 
}


// Comment submission functionality
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  if (!nameField.value.trim() || !commentField.value.trim()) {
    alert('Please enter both name and comment.');
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  
  namePara.textContent = nameField.value.trim();
  commentPara.textContent = commentField.value.trim();

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}