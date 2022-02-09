function getData(){
    var list1 = document.getElementById('list1').value;
    var target = document.getElementById('list2').value;;
    const arr = list1.split(" ");
    var answer = "";
    var results = {};
    for (var i = 0; i < arr.length; i++) {

        var complement = target - parseInt(arr[i]);

        if (complement in results) {
            answer = results[complement].toString() + ", " + i.toString();
            document.getElementById('answer').innerHTML = "The answer is: " + answer;
        }
        else {
            results[parseInt(arr[i])] = i;
        }
    }

    if (answer === ""){
        document.getElementById('answer').innerHTML = "There is no answer.";
    }
}