function checkSubarraySum() {
    var arrInput = document.getElementById("input").value;
    var targetInput = document.getElementById("targetInput").value;

    var arr = arrInput.split(",").map(function(item) {
        return parseInt(item.trim(), 10);
    });
    var target = parseInt(targetInput.trim(), 10);

    var result = document.getElementById("result");

    if (subarraySum(arr, target)) {
        result.textContent = "True";
    } else {
        result.textContent = "False";
    }
}

function subarraySum(arr, target) {
    var start = 0;
    var currentSum = 0;

    for (var end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}
