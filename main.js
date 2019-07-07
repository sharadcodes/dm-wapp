function sendDM() {
    var dm_input_num = document.getElementById('dm-in').value;
    window.location.href = "https://api.whatsapp.com/send?phone=" + dm_input_num;
}