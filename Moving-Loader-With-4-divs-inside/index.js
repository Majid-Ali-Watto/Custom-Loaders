const text = "Loading";
const typingSpeed = 500; // 1 second for each dot
let index = 0;
let dotCount = 0;
const maxDots = 3;
const typingTextElement = document.getElementById("typing-text");

function typeText() {
	typingTextElement.innerHTML = text + ".".repeat(dotCount);
	dotCount++;

	if (dotCount > maxDots) {
		dotCount = 0; // Reset dot count after reaching 3 dots
	}

	setTimeout(typeText, typingSpeed);
}

window.onload = typeText;
