window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script5 = function()
{
  var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
script.onload = function() {
    
 
    trigger2();
};
head.appendChild(script);

function trigger2() {
    var bDay = document.querySelector('input[aria-label="bDay"]');
    
    bDay.addEventListener('input', function(e) {
        var value = bDay.value;
        var numbers = value.replace(/\D/g, '');

        var chars = numbers.split('');
        var formattedValue = '';

        for (var i = 0; i < chars.length; i++) {
            if (i === 2 || i === 4) {
                formattedValue += '.';
            }
            formattedValue += chars[i];
        }

        bDay.value = formattedValue.substring(0, 10);
    });
}

}

window.Script6 = function()
{
  var player = GetPlayer();
var inputPhone = document.querySelector('input[aria-label="phone"]');
console.log(inputPhone);

inputPhone.addEventListener('input', function(e) {
    var value = inputPhone.value;
    var numbers = value.replace(/\D/g, '');


    numbers = numbers.substring(0, 11);

    var formattedValue = '8';
    for (var i = 1; i < numbers.length; i++) {
        if (i === 1) {
            formattedValue += '';
        } else if (i === 4) {
            formattedValue += '';
        }
        formattedValue += numbers[i];
    }
    
    inputPhone.value = formattedValue;
});
}

window.Script7 = function()
{
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 var player = GetPlayer();
 var email=player.GetVar("userEmail"); 
 
  var isValidate=false;
  if (reg.test(email))
  {
   var isValidate=true;
  }
  else
  {
   var isValidate=false;
  }
     player.SetVar("userEmailValidation",isValidate);
}

window.Script8 = function()
{
  var input = document.querySelector('textarea[aria-label="issue_date"]');
    
    input.addEventListener('input', function(e) {
        var value = input.value;
        var numbers = value.replace(/\D/g, '');

        
        var chars = numbers.split('');
        var formattedValue = '';


        for (var i = 0; i < chars.length; i++) {
            if (i === 2 || i === 4) {
                formattedValue += '.';
            }
            formattedValue += chars[i];
        }

        input.value = formattedValue.substring(0, 10);
    });
}

window.Script9 = function()
{
  var iframes = document.querySelectorAll("iframe");
console.log(iframes);
iframes.forEach(function(iframe) {
    iframe.contentWindow.postMessage("blurInputs", "*");
});
}

window.Script10 = function()
{
  var iframes = document.querySelectorAll("iframe");
iframes.forEach(function(iframe) {
    iframe.contentWindow.postMessage("blurInputs", "*");
});
}

window.Script11 = function()
{
  var iframes = document.querySelectorAll("iframe");
iframes.forEach(function(iframe) {
    iframe.contentWindow.postMessage("blurInputs", "*");
});
}

};
