document.getElementById('sbt-btn').addEventListener('click', (e) => {
  // debugger;
  // console.log("formSubmitClick")
});

function onSubmit(e) {
  // debugger;
  // console.log("formSubmitEvent")
  e.preventDefault();
}
// document.getElementById('form1').addEventListener('submit', onSubmit)
let formCount = 1;

function addForm() {
  // Increment form count
  formCount++;

  // Create a new form element
  let form = document.createElement('form');
  form.name = `form${formCount}`;

  // Create the input fields
  let nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = `name${formCount}`;
  nameInput.name = `name${formCount}`;
  let phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.id = `phone${formCount}`;
  phoneInput.name = `phone${formCount}`;

  // Create the select field
  let genderSelect = document.createElement('select');
  genderSelect.id = `gender${formCount}`;
  genderSelect.name = `gender${formCount}`;
  let maleOption = document.createElement('option');
  maleOption.value = 'male';
  maleOption.innerHTML = 'Male';
  let femaleOption = document.createElement('option');
  femaleOption.value = 'female';
  femaleOption.innerHTML = 'Female';
  let otherOption = document.createElement('option');
  otherOption.value = 'other';
  otherOption.innerHTML = 'Other';
  genderSelect.appendChild(maleOption);
  genderSelect.appendChild(femaleOption);
  genderSelect.appendChild(otherOption);

  // Create the submit button
  let submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';

  // Add the input fields and button to the form
  form.appendChild(nameInput);
  form.appendChild(phoneInput);
  form.appendChild(genderSelect);
  form.appendChild(submitButton);
  form.addEventListener('submit', onSubmit);

  // Add the form to the DOM
  document.body.appendChild(form);
}
