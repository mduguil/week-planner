var $addEntryBtn = document.querySelector('.add-btn');
var $modal = document.querySelector('.modal-container');
var $form = document.querySelector('form');
var $tbody = document.querySelector('tbody');
var $trList = document.querySelectorAll('tr');

// $addEntryBtn.addEventListener('click', showModal);
// $form.addEventListener('submit', addEntry);

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
  };
  data.entryID++;
  data.entries.push(entry);
  $form.reset();
  hideModal();
  $tbody.prepend(tableRow(entry));
  console.log(entry);
  // removeRow();

}

function tableRow(entry) {
  var $tr = document.createElement('tr');
  $tr.setAttribute('class', 'dom-row');
  $tr.setAttribute('data-day', $form.elements.day.value);

  var $td1 = document.createElement('td');
  $td1.textContent = entry.time;

  var $td2 = document.createElement('td');
  $td2.textContent = entry.description;
  $tr.append($td1, $td2);

  return $tr;
}

var $domRow = document.querySelectorAll('dom-row');
console.log($domRow);

function removeRow(event) {
  var lastIndex = $trList.length - 1;
  $trList[lastIndex].remove();

}

window.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < data.entries.length; i ++) {
    $tbody.appendChild(tableRow(data.entries[i]));
  }
});



$addEntryBtn.addEventListener('click', showModal);
$form.addEventListener('submit', addEntry);
