$("#saveButton").on("click", () => {
  const form = document.getElementById("saveForm");
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const location = form.location.value;
  const autoSubmit = form.autoSubmit.checked;
  chrome.storage.sync.set({
    name: name,
    email: email,
    phone: phone,
    location: location,
    autoSubmit: autoSubmit
  });
  alert("データが保存されました");
});

$("#resetButton").on("click", () => {
  chrome.storage.sync.clear();
  $("#auth").hide();
  $("#unauth").show();
});
