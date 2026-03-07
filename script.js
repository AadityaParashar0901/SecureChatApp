function toggleChatDrawer() {
	const drawer_span = document.getElementById("drawer_span");
	const chats_list_pane = document.getElementById("chats-list-pane");
	if (drawer_span.innerHTML == "left_panel_close") {
		chats_list_pane.style.display = "none";
		drawer_span.innerHTML="left_panel_open";
	} else {
		chats_list_pane.style.display = "flex";
		drawer_span.innerHTML="left_panel_close";
	}
}

var result = document.getElementsByTagName("ul")[0];
function newChat(id) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + id, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let data = JSON.parse(xhr.responseText);
			console.log(data);
			result.innerHTML += `<li>${data.name}</li>`;
		}
	};
	xhr.send();
}
for (let i = 1; i <= 10; i++) newChat(i);
