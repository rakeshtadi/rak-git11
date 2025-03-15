# rak-git11
Implemented a JavaScript grading system using conditional statements to evaluate marks and assign grades (A, B, C, D, F).

let marks = 59;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 70 && marks < 90) {
    console.log("B");
} else if (marks >= 50 && marks < 70) {
    console.log("C");
} else if (marks >= 40 && marks < 50) {
    console.log("D");
} else {
    console.log("F");
}
