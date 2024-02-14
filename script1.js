document.addEventListener('DOMContentLoaded', function() {
    const buttonTextArray = ['No?', '100% sure?', 'Completely?', 'Padmasini please', 'Last chance', 'Hit yes', 'please', 'PLEASE', 'Tayavu ceytu', 'ur the worst', 'I never should have made this website', 'HIT YES', 'No'];
    const dynamicButton = document.getElementById('dynamicButton');
    const yesButton = document.getElementById('yesButton');
    let currentIndex = 0;
    let fontSize = 16;
  
    function updateButtonText() {
      dynamicButton.textContent = buttonTextArray[currentIndex];
      currentIndex = (currentIndex + 1) % buttonTextArray.length;
    }

    function increaseFontSize() {
        fontSize += 20; 
        yesButton.style.fontSize = `${fontSize}px`; 
      }
  
    dynamicButton.addEventListener('click', updateButtonText);
    document.getElementById('dynamicButton').addEventListener('click', increaseFontSize);

});
  
