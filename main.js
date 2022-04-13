//Programming Challenge
            //On Your Own:    ch. 4
            //Description:
			//Create a html web page that will display a countdown to a rocket blasting off. 
			//Use a button to start the countdown. 
			//The countdown sequence should display on the web page and should display BLASTOFF! at the end. 
			//You can, if you wish, add a rocket image. 
			//Save the page as blastoff.html and be sure to include an appropriate page title.
                        
            //Created by: Jerry French  
						//csc240
            //Created on: 3/23/2022,
			



// Select Countdown container
const countContainer = document.getElementById("countdown-number");

// Select action buttons
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Select timeout Audio element
const timeoutAudio = document.getElementById("timeout_audio");

// variable to store count
var remainingTime = 30;

// variable to store time interval
var timer;

// Variable to track whether timer is running or not
var isStopped = true;

// Function to start Timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Function to stop Timer
const stopTimer = () => {
  isStopped = true;
  if (timer) {
    clearInterval(timer);
  }
};

// Function to reset Timer
const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = 30;
  countContainer.innerHTML = remainingTime;
};

// Initialize timeout sound
timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();

// Attach onclick event to buttons
startButton.onclick = startTimer;
resetButton.onclick = resetTimer;
stopButton.onclick = stopTimer;

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = remainingTime;
  // timeout on zero
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    // Play audio on timeout
    timeoutAudio.play();
	document.getElementById("blastOff").innerHTML= "BLASTOFF! ";
    remainingTime = 30;
	
  }
};
