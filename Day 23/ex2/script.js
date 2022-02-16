let key = document.querySelector('#key-pressed');
let keyId = document.querySelector('#key-id');

document.body.addEventListener('keypress', e => {
	key.textContent = `Did you just pressed ${e.key}?`;
	keyId.textContent = e.keyCode;
})