// Przykładowa lista znajomych
const friends = ["JanKowalski", "AnnaNowak", "MarekZielinski"];

// Funkcja do generowania listy znajomych
function generateFriendsList() {
    const friendsList = document.getElementById("friendsList");
    friendsList.innerHTML = "<h3>Twoi znajomi:</h3>";
    const ul = document.createElement("ul");
    friends.forEach(friend => {
        const li = document.createElement("li");
        li.textContent = friend;
        ul.appendChild(li);
    });
    friendsList.appendChild(ul);
}

// Wywołanie funkcji przy załadowaniu strony
window.onload = generateFriendsList;

// Obsługa dodawania znajomego
document.getElementById("addFriendForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const friendUsername = document.getElementById("friend_username").value;
    if (friendUsername.trim() !== "") {
        friends.push(friendUsername);
        generateFriendsList();
        document.getElementById("friend_username").value = "";
    }
});
