function send() {
  const form = document.getElementById("register");
  const nameVal = form.ae1cef65dee18a06fa58a46bb65a051e.value;
  const emailVal = form.a0d2b002bc6f257b401ca114404171c2.value;
  const phoneVal = form.b6b8ca5b8c59b0442f8bb041979bc2b8.value;
  if (form.agree.checked) {
    const title = "[Test] フォームが送信されました。";
    const name = `Name: ${nameVal}`;
    const email = `Email: ${emailVal}`;
    const phone = `Phone: ${phoneVal}`;
    const location = `Location: ${form.area.value}`;
    const msgs = [title, name, email, phone, location];
    res = msgs.join("\n");
    alert(res);
  } else {
    alert("規約への同意が必要です。");
  }
}
