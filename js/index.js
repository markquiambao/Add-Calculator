function addNumbers() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var num3 = parseFloat(document.getElementById("num3").value);
        var num4 = parseFloat(document.getElementById("num4").value);
        var num5 = parseFloat(document.getElementById("num5").value);
        var num6 = parseFloat(document.getElementById("num6").value);
        // Check if either input is empty
        if (isNaN(num1) || isNaN(num2)) {
          alert("Please input a number");
          return;
        }

        var result = num1 + num2 + num3 + num4 + num5 + num6;
        var result = result.toLocaleString();
        document.getElementById("result").innerHTML = "<span> Total: </span> "  +  "  " + result;
      }
 function clearNum1() {
        document.getElementById("num1").value = "";
      }

      function clearNum2() {
        document.getElementById("num2").value = "";
      }
function clearNum3() {
        document.getElementById("num3").value = "";
      }
function clearNum4() {
        document.getElementById("num4").value = "";
      }
function clearNum5() {
        document.getElementById("num5").value = "";
      }
function clearNum6() {
        document.getElementById("num6").value = "";
      }