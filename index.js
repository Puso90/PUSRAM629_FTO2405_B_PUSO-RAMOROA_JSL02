// LESSON:1 INTRODUCTION DOM
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// LESSON:2 SELECTING AND MANIPULATING ELEMENTS
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {   // The FUNCTION // This was new to me!
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    
    // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    
    // ⚠️ Hint 3: Code structure
    // You might want to wrap the duplicate-checking logic in an 'if' statement.
    
    // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
    // Focus on preventing duplicates for now.
    
     //goals = ["Banana", "Orange", "Apple", "Mango"]; example for myself

        
        // Tried to create some sort of logic from array
        // List the Entries
        // However, I am very confused
        // tool this from: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_entries
         
        // For Loop to shuffle goal inputs | Reference from personal project using fisherYateShuffle
        
        
    /*
            for (let x of goalList) {
            if (newGoal += x ) {
                alert('Cannot enter existing goal');
            } else {
                return true;
            }
        }   */

    const newGoal = document.createElement('li');
    newGoal.textContent = [goalInput];
    goalList.appendChild(newGoal);

    // Adding Event Listener to remove a goal when done.
    // Tried to create new remove button element from JS but reverted back to click actual list
    newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal);
    });

    

    
 console.log(goalList);
 console.log(newGoal);
 console.log(goalInput);

};
// I am doing something very wrong here, do not know what it is
for (let i = i < goalList.length - 1; i++;) {
    	
     if (goalList[i] === goalInput[i]) {
        // tried many variations here
      alert('You cannot write matching goals');
     break;
     } else {
        alert('kind of getting there');
     }
     
 }; 
 
// Tried many many variations of loops and is still not working well as should
// Stoping them from submitting empty input fields | It was really annoying me.
// However, please let me know WHY if I use 'goalInput.value.trim(), it does not run as should.


// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

/// LESSON 4 
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));




// LESSON 5
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();




// LESSON 6
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);




// LESSON 7
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
