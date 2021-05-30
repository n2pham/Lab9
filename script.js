let calculateBtn = document.querySelector("#calculate");
calculateBtn.addEventListener("click", () => {
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

const consoleLog = errorBtns[0];
const consoleError = errorBtns[1];
const consoleDir = errorBtns[2];
const consoleXML = errorBtns[3];
const consoleGroup = errorBtns[4];
const consoleGroupEnd = errorBtns[5];
const consoleTable = errorBtns[6];
const consoleTime = errorBtns[7];
const consoleTimeEnd = errorBtns[8];
const consoleTrace = errorBtns[9];

// 0
consoleLog.addEventListener("click", () => {
  console.log("Console Log");
});
// 1
consoleError.addEventListener("click", () => {
  console.error("Console Error");
});
// 2
consoleDir.addEventListener("click", () => {
  console.dir(consoleDir);
});
// 3
consoleXML.addEventListener("click", () => {
  console.dirxml(document);
});
// 4
consoleGroup.addEventListener("click", () => {
  console.group("Console Group");
});
// 5
consoleGroup.addEventListener("click", () => {
  console.groupEnd("Console Group End");
});
// 6
consoleTable.addEventListener("click", () => {
  console.table([
    { id: "1", type: "Dragon" },
    { id: "2", type: "Chicken" },
  ]);
});
// 7
consoleTime.addEventListener("click", () => {
  console.time();
});
// 8
consoleTimeEnd.addEventListener("click", () => {
  console.timeEnd();
});
//9
consoleTrace.addEventListener("click", () => {
  const first = () => {
    second();
  };
  const second = () => {
    third();
  };
  const third = () => {
    fourth();
  };
  const fourth = () => {
    console.trace();
  };
  first();
});
