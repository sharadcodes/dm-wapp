var flag = true;

function reply_click(clicked_id) {
  navigator.vibrate([100]);
  if (
    clicked_id != "backspace" &&
    document.getElementById("c-no").innerText.length <= 14
  ) {
    if (flag === true) {
      flag = false;
      document.getElementById("c-no").innerText = "";
      document.getElementById("c-no").innerText += clicked_id;
    } else {
      document.getElementById("c-no").innerText += clicked_id;
    }
  }
  if (clicked_id == "backspace") {
    var number = "" + document.getElementById("c-no").innerText;
    var new_number = number.substring(0, number.length - 1);

    document.getElementById("c-no").innerText = new_number;
  }
}

function sendDM() {
  navigator.vibrate([100]);
  var dm_input_num = document.getElementById("c-no").innerText;
  window.location.href = "https://api.whatsapp.com/send?phone=+91" + dm_input_num;
}
