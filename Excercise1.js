//Problem from "O'Reilly Data Structures and Algorithms with JS"
class Student {
    constructor() {
    this.grades = [];
    }

     add(grade) {
        this.grades.push(grade);
    }

    average() {
        var total = 0;
        this.grades.forEach(element => {
            total += element;
        });
        return total / this.grades.length;
    }

}

var s1 = new Student();

s1.add(100);
s1.add(50);
s1.add(100);
s1.add(50);
console.log(s1.average());



var words = ["Hello", "I", "am", "backwards"];
console.log(words.join(' '));
console.log(words.reverse().join(' '));