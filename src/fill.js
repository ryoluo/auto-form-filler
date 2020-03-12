const info = {
  auth: false,
  name: "",
  email: "",
  phone: null,
  location: 0,
  autoSubmit: false
};

chrome.storage.sync.get(
  ["auth", "name", "email", "phone", "location", "autoSubmit"],
  values => {
    info.auth = values.auth ? true : false;
    info.name = values.name ? values.name : "";
    info.email = values.email ? values.email : "";
    info.phone = values.phone ? values.phone : "";
    info.location = values.location ? values.location : 0;
    info.autoSubmit = values.autoSubmit ? true : false;
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
        location.reload();
      }, 1000);
    } else {
      $(inputs[0]).val(info.name);
      $(inputs[1]).val(info.email);
      $(inputs[2]).val(info.phone);
      $(inputs[3 + parseInt(info.location)]).prop("checked", true);
      $(inputs[7]).prop("checked", true);
      if (info.autoSubmit) {
        $(submitButton).click();
      }
    }
  }
});
