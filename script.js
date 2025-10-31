// Create falling hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = ${Math.random() * 100}vw;
  heart.style.animationDuration = ${Math.random() * 3 + 5}s;
  heart.style.opacity = Math.random();
  document.querySelector('.hearts-bg').appendChild(heart);
  setTimeout(() => heart.remove(), 8000); // remove after 8s
}

// Create many hearts periodically
setInterval(createHeart, 300); 
$("#open").click(() => {
  $("#envelope").toggleClass('open close')
  setTimeout(() => {
    $("#page1").fadeOut(() => $("#nameForm").fadeIn());
  }, 1800);
});

function wellbeingResponse(response) {
  $("#nameForm").fadeOut(() => {
    let text;
    if (response === 'Good') {
      text = "yaaayy!I'm so happy to hear that from you, my love";
    } else {
      text = "awwee🥺 okay then, you must be really tired today my love. but it's alright, stay strong! because you are super duper amazing, my love. tell me about it later okay???";
    }
    $("#greetingText").text(text);
    $("#messageSection").fadeIn();
  })
}

function askMara() {
  $("#messageSection").fadeOut(() => $("#Mara").fadeIn());
}

function MaraResponse(response) {
  // Yes/No answers here can be given logic if needed
  $("#Mara").fadeOut(() => $("#SorrySection").fadeIn());
}

function sorryResponse(response) {
  $("#SorrySection").fadeOut(() => $("#apologySection").fadeIn());
}

$("#spotifyButton").click(() => {
  window.location.href = "https://open.spotify.com/playlist/50AJGxXZt8ShuNSbmpZ2Fk?si=5UByZGWWQquZMWuHJtsP9w&pi=4zIlRPUgTsqYQ";
});
