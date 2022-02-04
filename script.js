function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        }
        else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;

        //var d = new Date();
        var year = new Date().getFullYear() + parseInt(years);

        document.getElementById("result").innerHTML = "<div>If you deposit <span class=\"decorate\">"+principal+"</span>,</br>at an interest rate of <span class=\"decorate\">"+rate+"%</span>.</br>You will receive an amount of <span class=\"decorate\">"+interest+"</span>,</br>in the year <span class=\"decorate\">"+year+"</span></div>";
    }

}

function rate_val(val){
    document.getElementById('rate').value=val;
}