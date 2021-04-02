var $addEntryBtn = document.querySelector('.add-btn');
var $modal = document.querySelector('.modal-container');
var $form = document.querySelector('form');
var $tbody = document.querySelector('tbody');
var $trList = document.querySelectorAll('tr');

function showModal(event) {
  $modal.className = 'modal-container';
}

function hideModal(event) {
  $modal.className = 'modal-container hidden';
}

function removeRow(event) {
  for (var i = $trList.length - 1; i > 0; i--) {
    $trList[i].remove();
    break;
  // var lastIndex = $trList.length - 1;
  // $trList[lastIndex].remove();
  }
}

function addEntry(event) {
  event.preventDefault();
  var entry = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryID: data.entryID
  };
  data.entryID++;
  data.entries.push(entry);
  $form.reset();
  hideModal();
  $tbody.prepend(tableRow(entry));
  removeRow();

}

function tableRow(entry) {
  var $tr = document.createElement('tr');

  var $td1 = document.createElement('td');
  $td1.textContent = entry.time;

  var $td2 = document.createElement('td');
  $td2.textContent = entry.description;
  $tr.append($td1, $td2);

  return $tr;
}

$addEntryBtn.addEventListener('click', showModal);
$form.addEventListener('submit', addEntry);
