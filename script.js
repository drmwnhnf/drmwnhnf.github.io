const textElement = document.getElementById('desc');
const textsToAnimate = [
  'full-stack developer',
  'ui/ux designer',
  'social media designer',
  'computer engineer'
];
let currentTextIndex = 0;
const typingSpeed = 100; // in milliseconds
const deletionSpeed = 50; // in milliseconds
const pauseBetweenActions = 1500; // in milliseconds

function typeText() {
  let i = 0;
  const currentText = textsToAnimate[currentTextIndex];
  const typingInterval = setInterval(() => {
    textElement.textContent += currentText[i];
    i++;

    if (i === currentText.length) {
      clearInterval(typingInterval);

      // Pause before deleting
      setTimeout(deleteText, pauseBetweenActions);
    }
  }, typingSpeed);
}

function deleteText() {
  const currentText = textsToAnimate[currentTextIndex];
  const deletionInterval = setInterval(() => {
    const currentTextContent = textElement.textContent;
    textElement.textContent = currentTextContent.slice(0, -1);

    if (currentTextContent.length === 0) {
      clearInterval(deletionInterval);

      // Move to the next text or start over
      currentTextIndex = (currentTextIndex + 1) % textsToAnimate.length;

      // Pause before typing the next text
      setTimeout(typeText, 50);
    }
  }, deletionSpeed);
}

// Start the animation
typeText()