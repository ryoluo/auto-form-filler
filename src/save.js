$("#saveButton").on("click", () => {
  const form = document.getElementById("saveForm");
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const location = form.location.value;
  const needReload = form.needReload.checked;
  const date = form.date.value;
  const time = form.time.value;
  chrome.storage.sync.set({
    name: name,
    email: email,
    phone: phone,
    location: location,
    needReload: needReload,
    date: date,
    time: time
  });
  alert("データが保存されました");
});

$("#resetButton").on("click", () => {
  chrome.storage.sync.clear();
  $("#auth").hide();
  $("#unauth").show();
});

$("#needReload").on("change", () => {
  const needReload = $("#needReload").prop("checked");
  $("#date").prop("disabled", !needReload);
  $("#time").prop("disabled", !needReload);
});
