function getSumOfInput() {
    const inputElement = document.getElementById("inputTask-1");
    const inputValue = inputElement.value;
  
    const sum = inputValue
      .split("") 
      .map(Number) 
      .reduce((acc, digit) => acc + digit, 0); 
  
    const spanElement = document.getElementById("sum-task-1");
    spanElement.textContent = sum;
  }
  

  function swapInputValues() {
    const input1 = document.querySelector(".input-1");
    const input2 = document.querySelector(".input-2");
  
    const tempValue = input1.value;
  
    input1.value = input2.value;
    input2.value = tempValue;
  }

  function changeBcg(button) {
    const input = button.previousElementSibling;
  
    input.style.backgroundColor = "green";
  }
  

  function lockInput() {
    const inputField = document.querySelector(".inputTask3");
    inputField.disabled = true; 
  }
  
  function unlockInput() {
    const inputField = document.querySelector(".inputTask3");
    inputField.disabled = false;  
  }
  