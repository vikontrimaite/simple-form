function compareEmailValues() {
    const email1 = document.getElementById('email');
    const email2 = document.getElementById('email-repeat');
    if (email1.value !== email2.value) {
        alert('Two emails must match!');
        return false;
    }
}

function addNickname() {
    if (document.getElementById('yesNickname').checked) {
        document.getElementById('nickDiv').style.display = 'inline';
        document.getElementById('nickname').setAttribute('required', true);
    } else {
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nickDiv').style.display = 'none';
    }
}