document.addEventListener('DOMContentLoaded', function() {
    const buttonTextArray = ['No?', 'Seguro?', 'Seguro seguro?', 'PI', ';-; pq insistes que no..', 'No me hagas esto ;n;', 'Voy a pipipear', 'Mi corazoncito ;n;', 'PIIIIIII', 'PIPIPIPIPIPIPIPIPIPIPI', 'PIPIPIPIPIPIPIPIPIPIPIPIPIPIPI', 'Reconcideralo, vamos denuevo', 'No'];
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
  