const { hash } = window.location;
const msg = atob(hash.replace("#", ""));
if (msg) {
	const msgBox = document.querySelector("#showMsgBox");
	msgBox.classList.remove("hide");
	document.querySelector("#msgCard").classList.add("hide");
}

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	document.querySelector("#msgCard").classList.add("hide");
	document.querySelector("#linkCard").classList.remove("hide");
	const inputVal = document.querySelector("#message").value;
	const encryptesMsg = btoa(inputVal);
	const msg = document.querySelector("#link-input");
	msg.value = `${window.location}#${encryptesMsg}`;
	msg.select();
});
