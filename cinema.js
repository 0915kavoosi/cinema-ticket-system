
function getTicketPrice(age, isWeekend) {
    if (typeof age !== "number") {
        return null;
    } else if (age < 0 || age > 120) {
        return null
    } else if (typeof (isWeekend) !== "boolean") {
        return null
    } else if (Number.isInteger(age) === false) {
        return null
    }
    let price;

    if (age <= 12) {
        price = 50000;
    } else if (age <= 17) {
        price = 80000;
    } else if (age <= 64) {
        price = 120000;
    } else {
        price = 70000;
    }

    if (isWeekend) {
        price = price + 20000;
    }

    return price;
}

function createTicket(name, age, isWeekend) {
    let price = getTicketPrice(age, isWeekend);
    if (price === null) {
        return "Invalid ticket information!"
    } else {
        return `Hello ${name}! Your cinema ticket costs ${price} Tomans. Enjoy the movie!`;
    }
}
function calculateGroupTotal(ages, isWeekend) {
    let Total = 0;
    for (let i = 0; i < ages.length; i++) {
        let myAges = ages[i];
        let TicketPrice = getTicketPrice(myAges, isWeekend);
        if (TicketPrice === null) {
            return null
        }
        Total = Total + TicketPrice;
    }
    return Total;
}
function countChildren(ages) {
    let Counter = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] <= 12) {
            Counter++;
        }
    }
    return Counter;
}
function findOldestCustomer(ages) {
  if (!ages || ages.length === 0) {
    return null
  }
  let oldest = ages[0];
  for (let i = 1; i < ages.length; i++) {
    if (ages[i] > oldest) {
        oldest = ages[i];
    }
  }
  return oldest
}
function getGroupDiscount(ages, isWeekend) {
  const total = calculateGroupTotal(ages, isWeekend); 
  
  if (total === null) return null; 
  
  if (ages.length >= 5) {
    return total * 0.9; 
  }
  return total;
}
function printAllTickets(names, ages, isWeekend) {
  for (let i = 0; i < names.length; i++) {
    const ticket = createTicket(names[i], ages[i], isWeekend);
    
    if (ticket !== null) {
      console.log(ticket);
    } else {
      console.log("Invalid data for: " + names[i]);
    }
  }
}


console.log(getTicketPrice(10, false));  // 50000
console.log(getTicketPrice(25, true));   // 140000
console.log(getTicketPrice("hello", false)); // null
console.log(getTicketPrice(25, "yes"));  // null
console.log(createTicket("Alex", 20, true));
console.log(createTicket("Sam", -1, false)); // Invalid ticket information!
console.log(calculateGroupTotal([10, 16, 25, 70], false)); // 320000
console.log(calculateGroupTotal([10, 16, 25, 70], true));  // 400000
console.log(countChildren([5, 16, 8, 30, 12])); // 3