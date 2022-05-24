//GLOBAL VARIABLES
const time_el = document.querySelector(".watch .time")//Select the time element wich is a child element of the watch element
const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");
const increase_btn = document.querySelector("#increment");
const decrease_btn = document.querySelector("#decrease");
let counter; 
let interval = null;
let hrs;
let mins;
let secs;
let increase;
let decrease;



//#Functions Part

//## Function run when the page is loaded
window.onload = () => {
    //Ask for a counter value to start with
    counter = Number(prompt("Starting time"));//convert the string prompt result to a number 
    //Format the value
    format();
};

//## Function used to format the countdown display
function format () {
    hrs = Math.floor(counter / 3600); //1hour = 3600seconds
    mins = Math.floor((counter - (hrs * 3600)) / 60); //1min = 60 seconds
    secs = counter % 60;

    if (secs < 10) {
        secs = "0" + secs
    };
    if (mins < 10) {
        mins = "0" + mins
    };
    if (hrs < 10) {
        hrs = "0" + hrs
    };

    time_el.innerText = `${hrs}:${mins}:${secs}`;
};


//## Timer function - called when start button is clicked

//If + button is clicked
function increaseTimer() {
    format();
    counter++;
};

//If - button is clicked
function decreaseTimer() {
    counter--;
    format();

    //When the counter is at 0, stop the function
    if (counter === 0) {
        clearInterval(interval);
    }
};


//__________________________________

//#Event Listeners 

//## EL - Increase button (+) is clicked. Will be used in combination with start_btn
increase_btn.addEventListener("click", () => {
    decrease = false;
    increase = true;
    
});

//## EL - decrease button (-) is clicked. Will be used in combination with start_btn
decrease_btn.addEventListener("click", () => {
    increase = false;
    decrease = true;
    
});


//## EL - start button
start_btn.addEventListener("click", () => {
    //if the counter is running, return
    if (interval) {
        return
    };
    //if increase_btn is clicked 
    if (increase) {
        interval = setInterval(increaseTimer, 1000);
    }
    //if decrease_btn is clicked 
    if (decrease) {
        interval = setInterval(decreaseTimer, 1000);
    }
});


//## EL - stop button
stop_btn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

//## EL - reset button
reset_btn.addEventListener("click", () => {
    time_el.innerText = `00:00:00`;
    clearInterval(interval);
    interval = null;
    window.onload();
});

