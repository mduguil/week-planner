var data = {
  entries: [],
  entryID: 1
};

var previousDataJSON = localStorage.getItem('weekly-planner');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function () {
  var dataJSON = JSON.stringify(data);

  localStorage.setItem('weekly-planner', dataJSON);
});
