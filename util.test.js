const sum = require("./util");

test("should output name and age", () => {
  const text = sum("Atul", 25);

  expect(text).toEqual("Atul you are 25 years old");
});


// ${name} you are ${age} years old