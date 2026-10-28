
//Array Higher-Order Methods
//1. forEach()
let num = [10,20,30,40,50,60,70,80,90,100];
num.forEach((c,i,t) => {
    console.log("Current Element : ",c);
    console.log("Index Number : ",i);
    console.log("Total Array : ",t);
});

//2. map()
let result = num.map((c,i,t) => {
        return c*5
});
console.log("Map : ",result);

//3. filter()
let num1 = [30,35,21,15,12,1,76,89];
let result1 = num1.filter((c,i,t) => {
        return c >= 20
});
console.log("Filter : ",result1);

//4. filter() - Employee salary less than or equal to ₹300,000
let employee = [
    {name : "Kavi Priya"   , salary : 200000},
    {name : "Suriya M"     , salary : 250000},
    {name : "Thangarasu G" , salary : 300000},
    {name : "Gowtham B T"  , salary : 320000}
    ];
let newFilter = employee.filter((c,i,t) => {
    return c.salary <= 300000
});
console.log("Less then Filter : ",newFilter);

//5. find()
let newFind = employee.find((c,i,t) => {
    return c.salary >= 200000
});
console.log("Find : ",newFind);

//6. reduce()
let newReduce = employee.reduce((acc,c,i,t) => {
    return acc + c.salary
},0);
console.log("Total : ",newReduce);

//7. some()
let num2 = [21,24,3,9,43,45,77];
let someNum = num2.some((c,i,t) => {
    return c%2 === 0
});
console.log("Result : ",someNum);

//8. every()
let everyNum = num2.every((c,i,t) => {
    return c > 0
});
console.log("Result : ",everyNum);

//9. sort() - Ascending order
let asc = num2.sort((a,b) => {
    return a - b
});
console.log("Asc : ",asc);

//10. sort() - Descending order
let des = num2.sort((a,b) => {
    return b - a
});
console.log("Des : ",des);

//String Methods
//11. charAt()
let str = "Thangarasu G";
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(4));
console.log(str.charAt(8));

//12. charCodeAt()
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(4));
console.log(str.charCodeAt(8));

//13. trim()
let str1 = "   Hello World    ";
result2 = str1.trim();
console.log("Trim : ",result2);

//14. toUpperCase() and toLowerCase()
console.log("Upper Case : ",str.toUpperCase());
console.log("Lower Case : ",str.toLowerCase());

//15. includes()
let message = "Hello This is Javascript";
console.log(message.includes("script"));

//16. startsWith() and endsWith()
console.log(message.startsWith("Java"));
console.log(message.endsWith("Script"));

//17. replaceAll()
let str2 = "java is easy, java is powerful";
console.log(str2.replaceAll("java","JavaScript"));

//18. split()
let str3 =  "html-css-javascript-react";
console.log(str3.split("-"));

//19. join()
let name = ["Thangarasu","Gowtham","Suriya","Kavi"];
console.log(name.join(","));

//20. slice()
console.log(str.slice(0,4));
console.log(str.slice(4));

//Date Methods
//21. Print current year, month, date and day
let today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

//22. Display the current month name
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let newMonth = new Date();
console.log(month[newMonth.getMonth()]);

//23. Print current hours, minutes and seconds
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

//24. Set year to 2003, month to January and date to 30

today.setFullYear(2003);
today.setMonth(0);
today.setDate(30);
console.log(today);

//Asynchronous JavaScript
//25. setTimeout()
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 1500);

//26. setInterval()
setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

//27. clearInterval()
let interval = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);
setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 8000);

//28. Understand asynchronous execution
function one() {
    console.log("One");
}
function two() {
    console.log("Two");
}
function three() {
    console.log("Three");
}
one();
setTimeout(two, 0);
three();

//29. Promise - Login successful
let login = new Promise((resolve, reject) => {
    resolve("Login successful");
});
login.then((message) => {
    console.log(message);
});

//30. Promise - Handle rejected login
let login1 = new Promise((resolve, reject) => {
    reject("Invalid password");
});
login1.catch((error) => {
    console.log(error);
});

//31. Promise - Use finally()
let process = new Promise((resolve, reject) => {
    resolve("Success");
});
process
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.warn(error);
    })
    .finally(() => {
        console.log("Process completed");
    });

//32. Fetch products and print all titles
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log(product.title);
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });

//33. Print product title, price and category
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------");
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });


//34. Handle API errors using catch()
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });

//35. Use finally() after API fetching
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });

//Real-Time Mini Tasks
//36. Employee salary report
let res = employee.filter((emp) => emp.salary <= 300000);

res.forEach((emp) => {
    console.log("Name:", emp.name);
    console.log("Salary:", emp.salary);
});

//37. Product price calculator using map()
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then((products) => {
        let result = products.map((product) => ({
            title: product.title,
            price: product.price
        }));

        console.log(result);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Price calculation completed");
    });

//38. Product search using filter()
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then((products) => {
        let result = products.filter(
            (product) => product.category === "electronics"
        );

        result.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });

//39. Number analysis using five methods
let numbers = [10, 15, 20, 25, 30];

//map() - Multiply by 2
let doubled = numbers.map((c,i,t) => {
    return c * 2
});
console.log("Doubled:", doubled);

//filter() - Get numbers greater than 20
let greater = numbers.filter((c,i,t) => {
    return c > 20});
console.log("Greater than 20:", greater);

//reduce() - Calculate total
let total = numbers.reduce((sum, num) => {
    return sum + num
}, 0);
console.log("Total:", total);

//some() - Check if at least one number is even
let hasEven = numbers.some((c,i,t) => {
    return c % 2 === 0});
console.log("Has even number:", hasEven);

//every() - Check if all numbers are positive
let allPositive = numbers.every((c,i,t) => {
    return c > 0});
console.log("All positive:", allPositive);

//40. Complete product listing with error handling
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------------");
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Product listing completed");
    });


