//Problem from "O'Reilly Data Structures and Algorithms with JS"

//create class student object that stores, adds, and calculates average grades.
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


//create array of words and display them forewards and backwards.
var words = ["Hello", "I", "am", "backwards"];
console.log(words.join(' '));
console.log(words.reverse().join(' '));


//create a temperature object and calculate monthly average, specific week's average, and all the weeks' averages.

class Temp {
    constructor() {
        this.week1 = [];
        this.week2 = [];
        this.week3 = [];
        this.week4 = [];
        this.week5 = [];
        this.month = [];
    }

    add1(temp, temp2, temp3, temp4, temp5, temp6, temp7) {
        this.week1.push(temp);
        this.week1.push(temp2);
        this.week1.push(temp3);
        this.week1.push(temp4);
        this.week1.push(temp5);
        this.week1.push(temp6);
        this.week1.push(temp7);
        this.month.push(this.week1);
    }

    add2(temp, temp2, temp3, temp4, temp5, temp6, temp7) {
        this.week2.push(temp);
        this.week2.push(temp2);
        this.week2.push(temp3);
        this.week2.push(temp4);
        this.week2.push(temp5);
        this.week2.push(temp6);
        this.week2.push(temp7);
        this.month.push(this.week2);
    }
    add3(temp, temp2, temp3, temp4, temp5, temp6, temp7) {
        this.week3.push(temp);
        this.week3.push(temp2);
        this.week3.push(temp3);
        this.week3.push(temp4);
        this.week3.push(temp5);
        this.week3.push(temp6);
        this.week3.push(temp7);
        this.month.push(this.week3);
    }
    add4(temp, temp2, temp3, temp4, temp5, temp6, temp7) {
        this.week4.push(temp);
        this.week4.push(temp2);
        this.week4.push(temp3);
        this.week4.push(temp4);
        this.week4.push(temp5);
        this.week4.push(temp6);
        this.week4.push(temp7);
        this.month.push(this.week4);
    }
    add5(temp, temp2, temp3, temp4, temp5, temp6, temp7) {
        this.week5.push(temp);
        this.week5.push(temp2);
        this.week5.push(temp3);
        this.week5.push(temp4);
        this.week5.push(temp5);
        this.week5.push(temp6);
        this.week5.push(temp7);
        this.month.push(this.week5);
    }

    clear() {
        this.week1.length = 0;
        this.week2.length = 0;
        this.week3.length = 0;
        this.week4.length = 0;
        this.week5.length = 0;
        this.month.length = 0;
    }

    avg1() {
        let total = 0;
        for(var i = 0; i < 7; i++) {
            total += this.week1[i];
        }
        return total/7;
    }
    avg2() {
        let total = 0;
        for(var i = 0; i < 7; i++) {
            total += this.week2[i];
        }
        return total/7;
    }
    avg3() {
        let total = 0;
        for(var i = 0; i < 7; i++) {
            total += this.week3[i];
        }
        return total/7;
    }
    avg4() {
        let total = 0;
        for(var i = 0; i < 7; i++) {
            total += this.week4[i];
        }
        return total/7;
    }
    avg5() {
        let total = 0;
        for(var i = 0; i < 7; i++) {
            total += this.week5[i];
        }
        return total/7;
    }
    avgMonth() {
        let total = 0;
        for(var i = 0; i < this.month.length; i++) {
            for(var j = 0; j < 7; j++) {
                total += this.month[i][j];
            }
        }
        return total/this.month.length;
    }
    avgAll() {
        var a = avg1(); 
        var b = avg2(); 
        var c = avg3(); 
        var d = avg4(); 
        var e = avg5();
        console.log(a, b, c, d, e);
    }
}
var week = new Temp();
week.add1(1,1,1,1,1,1,1);
week.add2(1,1,1,1,1,1,1);
week.add3(1,1,1,1,1,1,1);
week.add4(1,1,1,1,1,1,1);
week.add5(1,1,1,1,1,1,1);
console.log(week.avgAll());
