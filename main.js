var $addEntryBtn = document.querySelector('.add-btn');
var $modal = document.querySelector('.modal-container');
var $form = document.querySelector('form');
var $tbody = document.querySelector('tbody')

function showModal(event) {
  $modal.className = 'modal-container';
}

function hideModal(event) {
  $modal.className = 'modal-container hidden';
}

function addEntry(event) {
  event.preventDefault();
  var entry = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryID: data.entryID
  }
  data.entryID++;
  data.entries.push(entry);
  $form.reset();
  hideModal();
  $tbody.prepend(tableRow(entry))
}

function tableRow(entry){
  var $tr = document.createElement('tr');

  var $td = document.createElement('td');
  $tr.appendChild($td);

  return $tr;
}



$addEntryBtn.addEventListener('click', showModal);
$form.addEventListener('submit', addEntry);
