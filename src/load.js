$(async () => {
  const auth = await isAuth();
  if (auth) {
    $("#auth").show();
    chrome.storage.sync.get(
      ["name", "email", "phone", "location", "autoSubmit"],
      item => {
        const form = document.getElementById("saveForm");
        form.name.value = item.name ? item.name : "";
        form.email.value = item.email ? item.email : "";
        form.phone.value = item.phone ? item.phone : "";
        form.location.value = item.location ? item.location : 0;
        form.autoSubmit.checked = item.autoSubmit ? true : false;
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
