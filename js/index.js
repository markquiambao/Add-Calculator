function addNumbers() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);
  var num4 = parseFloat(document.getElementById("num4").value);
  var num5 = parseFloat(document.getElementById("num5").value);
  var num6 = parseFloat(document.getElementById("num6").value);
  // Check if either input is empty
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("num1").value = "0";
    document.getElementById("num2").value = "0";
    document.getElementById("num3").value = "0";
    document.getElementById("num4").value = "0";
    document.getElementById("num5").value = "0";
    document.getElementById("num6").value = "0";
    return;
  } else if (isNaN(num3)) {
    document.getElementById("num3").value = "0";
    document.getElementById("num4").value = "0";
    document.getElementById("num5").value = "0";
    document.getElementById("num6").value = "0";
    return;
  } else if (isNaN(num4)) {
    document.getElementById("num4").value = "0";
    document.getElementById("num5").value = "0";
    document.getElementById("num6").value = "0";
    return;
  } else if (isNaN(num5)) {
    document.getElementById("num5").value = "0";
    document.getElementById("num6").value = "0";
    return;
  } else if (isNaN(num6)) {
    document.getElementById("num6").value = "0";
    return;
  }

  var result = num1 + num2 + num3 + num4 + num5 + num6;
  var result = result.toLocaleString();
  document.getElementById("result").innerHTML =
    "<span> Total: </span> " + "  " + result;
}
function clearNum1() {
  document.getElementById("num1").value = "0";
}

function clearNum2() {
  document.getElementById("num2").value = "0";
}
function clearNum3() {
  document.getElementById("num3").value = "0";
}
function clearNum4() {
  document.getElementById("num4").value = "0";
}
function clearNum5() {
  document.getElementById("num5").value = "0";
}
function clearNum6() {
  document.getElementById("num6").value = "0";
}


<!--multiply-->
function multiplyNumbers() {
  var mult1 = parseFloat(document.getElementById("mult1").value);
  var mult2 = parseFloat(document.getElementById("mult2").value);
  
   if (isNaN(mult1) || isNaN(mult2)) {
    // document.getElementById("mult1").value = "0";
    // document.getElementById("mult2").value = "0";
  alert('Please input the total number');
    return;
  }
  
  var result1 = mult1 * mult2;
  var result1 = result1.toLocaleString();
  document.getElementById("result-1").innerHTML =
    "<span> Total: </span> " + "  " + result1;
}
function clearmult1() {
  document.getElementById("mult1").value = "0";
}

function clearmult2() {
  document.getElementById("mult2").value = "0";
}

/*Date*/
console.log(clearmult1);
$(function() {
			$("#date1").datepicker();
			var date1 = $("#date1")
		});
		$(function() {
			$("#date2").datepicker();
			var date2 = $("#date2")
		});

var date1Input = document.getElementById("date1");
var date2Input = document.getElementById("date2");

date1Input.addEventListener("input", func);
date2Input.addEventListener("input", func);

function func() {
    var date1 = new Date(date1Input.value);
    var date2 = new Date(date2Input.value);
  
    var milli_secs = date1.getTime() - date2.getTime();
			
    // Convert the milli seconds to Days
    var days = milli_secs / (1000 * 3600 * 24);
  
    if (!isNaN(days)) {
        document.getElementById("ans").innerHTML = "Total Nights: " + Math.round(days);
    }
}



function cleardate2() {
  document.getElementById("date2").value = "";
}
function cleardate1() {
  document.getElementById("date1").value = "";
}


/*Discount*/

function discNumbers() {
  var disc1 = parseFloat(document.getElementById("disc1").value);
  var disc2 = parseFloat(document.getElementById("disc2").value);

  if (isNaN(disc1) || isNaN(disc2)) {
    alert('Please input the values for both discounts');
    return;
  }

  // Calculate the discount amount
  var discountAmount = disc1 * (disc2 / 100);

  // Calculate the discounted price
  var discountedPrice = disc1 - discountAmount;

  // Display the results
  document.getElementById("result-2").innerHTML =
    "<span> Discount Amount: </span> " + "  " + discountAmount.toFixed(2);
  document.getElementById("result-3").innerHTML =
    "<span> Discount Percentage: </span> " + "  " + disc2 + "%";
  document.getElementById("result-4").innerHTML =
    "Discounted Price: <span>  " + "  " + discountedPrice.toFixed(2) + "</span>";
}

function cleardisc1() {
  document.getElementById("disc1").value = "0";
  clearResults();
}

function cleardisc2() {
  document.getElementById("disc2").value = "0";
  clearResults();
}

function clearResults() {
  document.getElementById("result-2").innerHTML = "";
  document.getElementById("result-3").innerHTML = "";
  document.getElementById("result-4").innerHTML = "";
}
