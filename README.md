
# Cinema Ticket System 🎬

A simple and clean JavaScript project built for the "Super Cinema" mission. This program calculates ticket prices based on customer age and whether it is the weekend, while also handling invalid inputs safely.

## 🚀 Features

- Ticket Pricing: Calculates the ticket price based on age groups and weekend surcharges.
- Validation: Rejects invalid inputs (non-numbers, out-of-range ages, decimal ages, and non-boolean weekend flags).
- Ticket Generation: Creates a formatted ticket message for valid customers.
- Group Calculations: Calculates the total price for a group of customers using loops.
- Child Counting: Counts the number of children (age 12 and under) in a group.
- Bonus Features: 
  - Finds the oldest customer without using Math.max().
  - Applies a 10% discount for groups of 5 or more.
  - Prints tickets for all members of a group.

## 🛠️ Technologies Used

- Pure JavaScript (ES6) - No external libraries or frameworks.
- Node.js - Used to run and test the file in the terminal.

## 📂 How to Run

1. Clone this repository or download the cinema.js file.
2. Make sure you have [Node.js](https://nodejs.org/) installed.
3. Open your terminal and navigate to the project folder.
4. Run the following command:
   `bash
   node cinema.js