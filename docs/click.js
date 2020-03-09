function send() {
  const form = document.getElementById("signup");
  if (form.agree.checked) {
    const title = "[Test] フォームが送信されました。";
    const name = `Name: ${form.name.value}`;
    const email = `Email: ${form.email.value}`;
    const phone = `Phone: ${form.phone.value}`;
    const location = `Location: ${form.location.value}`;
    const msgs = [title, name, email, phone, location];
    res = msgs.join("\n");
    alert(res);
  } else {
    alert("規約への同意が必要です。");
  }
  return false;
}
