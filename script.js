sumIntervals( [
    [1,4],
    [7, 10],
    [3, 5]
 ] );

 function sumIntervals(intervals) {
    var sum = 0;
    console.log(intervals.sort());
    var arr = [];
    var a = intervals[0][1];
    var b = intervals[1][0];
    if(a > b) {
        arr.push([intervals[0][0], intervals[1][1]]);
    }
    arr.push([7,10]);
    console.log(arr.sort());

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
       sum += (element[1]-element[0]);
    }
    console.log(sum);
 }
 