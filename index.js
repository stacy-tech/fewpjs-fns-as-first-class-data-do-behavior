/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// greeting function using 24hr time 
function greet(timeString) {
  const newTime = parseInt(timeString, 10);
  // if time is earlier than 12pm/noon
  if (newTime < 12) {
    return "Good Morning";
  }
  // if time is between 12pm and 5pm  
  if (newTime < 17) {
    return "Good Afternoon";
  }
  // if time is later than 5pm 
  if (newTime > 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
// doesn't return anything 
function displayMessage(string) {
  document.getElementById("greeting").innerText = string;

}
