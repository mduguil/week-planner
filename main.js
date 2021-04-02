var $addEntryBtn = document.querySelector('.add-btn');
var $modal = document.querySelector('.modal-container');
var $form = document.querySelector('form');

function showModal(event) {
  $modal.className = 'modal-container';
}

function hideModal(event) {
  $modal.className = 'modal-container hidden';
}

function addEntry(event) {
  hideModal();

}

$addEntryBtn.addEventListener('click', showModal);
$form.addEventListener('submit', addEntry);
