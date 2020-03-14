$(async () => {
  const auth = await isAuth();
  if (auth) {
    $("#auth").show();
    chrome.storage.sync.get(
      ["name", "email", "phone", "location", "needReload", "date", "time"],
      item => {
        const form = document.getElementById("saveForm");
        form.name.value = item.name ? item.name : "";
        form.email.value = item.email ? item.email : "";
        form.phone.value = item.phone ? item.phone : "";
        form.location.value = item.location ? item.location : 0;
        form.needReload.checked = item.needReload ? true : false;
        form.date.value = item.date ? item.date : null;
        form.time.value = item.time ? item.time : null;
        const needReload = form.needReload.checked;
        $("#date").prop("disabled", !needReload);
        $("#time").prop("disabled", !needReload);
      }
    );
  } else {
    $("#unauth").show();
  }
});

function isAuth() {
  return new Promise(resolve => {
    chrome.storage.sync.get("auth", item => {
      resolve(item.auth == true);
    });
  });
}
