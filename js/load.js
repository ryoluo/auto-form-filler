chrome.storage.sync.get(
  ["name", "email", "phone", "location", "autoSubmit"],
  values => {
    const form = document.getElementById("form");
    form.name.value = values.name ? values.name : "";
    form.email.value = values.email ? values.email : "";
    form.phone.value = values.phone ? values.phone : "";
    form.location.value = values.location ? values.location : 0;
    form.autoSubmit.checked = values.autoSubmit ? true : false;
  }
);
