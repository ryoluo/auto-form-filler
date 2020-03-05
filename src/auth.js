const button = $("#loginButton");
button.on("click", () => {
  const email = $("#loginEmail").val();
  const password = $("#loginPassword").val();
  if (email == "" || password == "") {
    alert("メールアドレス・パスワードを入力してください。");
    return;
  }
  button.prop("disabled", true);
  button.html('<span class="spinner"></span>');
  const url = buildURL(email, password);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 && JSON.parse(xhr.responseText).auth) {
        loginSuccess();
      } else {
        loginFailed();
      }
    }
  };
  xhr.send();
});

function buildURL(email, password) {
  const apiURL =
    "https://script.google.com/macros/s/AKfycby0pW9euRLnPR0wcpFBb6WHk2EBNoyPpoEdJCAeh5k9gFdiNwi4/exec";
  const hashedPass = hash(password);
  return `${apiURL}?email=${email}&password=${hashedPass}`;
}

function hash(str) {
  const shaObj = new jsSHA("SHA-256", "TEXT");
  shaObj.update(str);
  return shaObj.getHash("HEX");
}

function loginSuccess() {
  chrome.storage.sync.set({
    auth: true
  });
  $("#unauth").hide();
  $("#auth").show();
}

function loginFailed() {
  button.html("Activate");
  button.prop("disabled", false);
  $("#loginPassword").val("");
  alert(
    "ログインに失敗しました。\nメールアドレスもしくはパスワードが間違っています。"
  );
}
