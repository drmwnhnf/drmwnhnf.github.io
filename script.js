const textElement = document.getElementById('desc');
const textsToAnimate = [
  'full-stack developer',
  'graphic designer',
  'videographer',
  'computer engineer',
  'goofy ahh'
];
let currentTextIndex = 0;
const typingSpeed = 100; // in milliseconds
const deletionSpeed = 50; // in milliseconds
const pauseBetweenActions = 1500; // in milliseconds

function hideElementOnNarrowViewport() {
    const element = document.getElementById('sneakpeek');
    const viewportWidth = window.innerWidth;

    // Adjust the width threshold as needed
    const thresholdWidth = 800;

    // Check if the viewport width is less than or equal to the threshold
    if (viewportWidth <= thresholdWidth) {
        element.style.display = 'none';
    } else {
        element.style.display = 'block'; // or 'inline' or 'inline-block' depending on your element type
    }
}

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

typeText();
hideElementOnNarrowViewport();
window.addEventListener('resize', hideElementOnNarrowViewport);
