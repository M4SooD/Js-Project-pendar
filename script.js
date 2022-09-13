document.getElementById('submit').onclick = function () {
  const table = document.getElementById('table');
  const row = table.insertRow(-1);
  const name = row.insertCell(0);
  const family = row.insertCell(1);
  const age = row.insertCell(2);

  name.innerHTML = document.getElementById('name').value;
  family.innerHTML = document.getElementById('family').value;
  age.innerHTML = document.getElementById('age').value;
};
