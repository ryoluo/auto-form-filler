const info = {
  auth: false,
  name: "",
  email: "",
  phone: null,
  location: 0
};

chrome.storage.sync.get(
  ["auth", "name", "email", "phone", "location", "autoSubmit"],
  values => {
    info.auth = values.auth ? true : false;
    info.name = values.name ? values.name : "";
    info.email = values.email ? values.email : "";
    info.phone = values.phone ? values.phone : "";
    info.location = values.location ? values.location : 0;
  }
);

$(() => {
  if (info.auth) {
    const inputs = $("input").filter((i, el) => {
      return $(el).attr("type") != "hidden" && $(el).css("display") != "none";
    });
    const submitButton = $("input").filter((i, el) => {
      return $(el).attr("type") == "submit";
    })[0];
    if (inputs.length < 5) {
      setTimeout(() => {
        tryReload();
      }, 1000);
      setInterval(() => {
        tryReload();
      }, 1000 * 5);
    } else {
      $(inputs[0]).val(info.name);
      $(inputs[1]).val(info.email);
      $(inputs[2]).val(info.phone);
      $(inputs[3 + parseInt(info.location)]).prop("checked", true);
      $(inputs[7]).prop("checked", true);
      $(submitButton).click();
    }
  }
});

function tryReload() {
  chrome.storage.sync.get(["needReload", "date", "time"], values => {
    const needReload = values.needReload ? true : false;
    const date = values.date ? values.date : null;
    const time = values.time ? values.time : null;
    if (needReload) {
      const now = new Date();
      const ymd = date.split("-");
      ymd[1]--;
      const hi = time.split(":");
      const ymdhi = ymd.concat(hi);
      const start = new Date(...ymdhi);
      if (now.getTime() >= start.getTime()) {
        location.reload();
      }
    }
  });
}
