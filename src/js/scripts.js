// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const myDictionary = {
    James: "Grieve",
    Golden: "Delicious",
    Granny: "Smith",
    Red: "Delicious",
    "Cox's": "Orange",
    Fuji: "Apple",
  };

  output(myDictionary["James"]);
  output(myDictionary.James);

  output(myDictionary["Cox's"]);

  myDictionary["Test"] = "Test123";
  output(myDictionary.Test);

  myDictionary.Test = "Test456";
  output(myDictionary.Test);

  delete myDictionary.Test;
  output(myDictionary.Test);

  myDictionary.James = undefined;
  output(myDictionary.James);

  output(Object.keys(myDictionary));
  output(Object.values(myDictionary));

  delete myDictionary.James;

  output(Object.keys(myDictionary));
  output(Object.values(myDictionary));

  output(Object.entries(myDictionary));
  output(Object.entries(myDictionary).join("\n"));

  const myArray = [1, 2, 3, 4];
  myArray[9] = 10;
  output(myArray);
  output(myArray[20]);
}
