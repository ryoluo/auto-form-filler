document.getElementById("saveButton").onclick = () => {
  const form = document.getElementById("form");
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
};
