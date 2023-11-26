//TASK 05
//DATE : 26/11/2023 


//01) json iterate over all for loops(for, forEach,for in ,for of)

//// for loop ----------------------------//

const jsonData = {
    "name": "Prakash",
    "age": 22,
    "city": "Chennai",
    "skills": ["JavaScript", "HTML", "CSS"]
};

const keys = Object.keys(jsonData);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
}


// forEach loop -------------------------

const jsonData = {
    "name": "Prakash",
    "age": 22,
    "city": "Chennai",
    "skills": ["JavaScript", "HTML", "CSS"]
};

Object.entries(jsonData).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// for in loop -----------------------------    

const jsonData = {
    "name": "Prakash",
    "age": 22,
    "city": "Chennai",
    "skills": ["JavaScript", "HTML", "CSS"]
};

for (const key in jsonData) {
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
}

//for of loop --------------------------------

const jsonData = {
    "name": "Prakash",
    "age": 22,
    "city": "Chennai",
    "skills": ["JavaScript", "HTML", "CSS"]
  };
  
  const values = Object.values(jsonData);
  
  for (const value of values) {
    console.log(value);
  }
  