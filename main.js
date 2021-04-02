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

  var entry = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryID: data.entryID
  }
  data.entryID++;
  console.log('hi', data.entryID);
  data.entries.push(entry);
}

$addEntryBtn.addEventListener('click', showModal);
$form.addEventListener('submit', addEntry);
