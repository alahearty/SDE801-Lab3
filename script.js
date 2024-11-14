class CounterApp {
    constructor() {
        // Initialize count variable
        this.count = 0;
        
        // Get references to the display and buttons using classes
        this.counterDisplay = document.querySelector('.counter-display');
        this.incrementButton = document.querySelector('.increment-button');
        this.decrementButton = document.querySelector('.decrement-button');
        this.resetButton = document.querySelector('.reset-button');
        
        // Set up event listeners
        this.initializeEventListeners();
        
        // Update the display with the initial count
        this.updateDisplay();
    }

    // Method to update the displayed count
    updateDisplay() {
        this.counterDisplay.innerText = this.count;
    }

    // Method to set up event listeners for the buttons
    initializeEventListeners() {
        this.incrementButton.addEventListener('click', () => this.increment());
        this.decrementButton.addEventListener('click', () => this.decrement());
        this.resetButton.addEventListener('click', () => this.reset());
    }

    // Method to increment the count
    increment() {
        this.count++;
        this.updateDisplay();
    }

    // Method to decrement the count
    decrement() {
        this.count--;
        this.updateDisplay();
    }

    // Method to reset the count
    reset() {
        this.count = 0;
        this.updateDisplay();
    }
}

// Initialize the CounterApp instance when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new CounterApp();
});