$(document).ready(function(){
    $(".display").text("0");
    let savedVal = [];
    $(".input").on("click", function(event){
        event.preventDefault();
        let x = $(this).text();
        if ($(".display").text() == 0){
            x = x;
        }
        else {
            x = $(".display").text() + x;
        }
        
        $(".display").text(x);
    });
    $("#back").on("click", function(event){
        event.preventDefault();
        let x = $(".display").text();
        console.log(x);
        $(".display").text(x.substring(0, x.length-1));

    })
    $(".operator").on("click", function(event){
        event.preventDefault();
        let firstVal = $(".display").text();
        let operator = $(this).text().toLowerCase();
        // savedVal.push(1);
        console.log(operator);
        if (operator == "+"){
            // savedVal.push(1);
            if (savedVal.length === 0){
                savedVal.push(firstVal+operator);
            }
            else {
                let y = eval(savedVal[0] + firstVal); 
                savedVal[0] = y+operator;
            }
           
            
        }
        else if (operator == "-"){
            // savedVal.push(1);
            if (savedVal.length === 0){
                savedVal.push(firstVal+operator);
            }
            else {
                let y = eval(savedVal[0] + firstVal); 
                savedVal[0] = y+operator;
            }
            
            
        }
        else if (operator == "x"){
            if (savedVal.length === 0){
                savedVal.push(firstVal+"*");
            }
            else {
                let y = eval(savedVal[0] + firstVal); 
                savedVal[0] = y+"*";
            }
            
            
        }
        else if (operator == "/"){
            if (savedVal.length === 0){
                savedVal.push(firstVal+"/");
            }
            else {
                let y = eval(savedVal[0] + firstVal); 
                savedVal[0] = y+operator;
            }
            
        }
        else if (operator == "%"){
            if (savedVal.length === 0){
                savedVal.push(firstVal+operator);
            }
            else {
                let y = eval(savedVal[0] + firstVal); 
                savedVal[0] = y+operator;
            }
        }
        console.log(savedVal);
        $(".display").text("  ");
        
    });
    $("#result").on("click", function(event){
        event.preventDefault();
        savedVal.push($(".display").text());
        // console.log(eval(savedVal.join("")));
        $(".display").text(Math.round(eval(savedVal.join(""))*100)/100);
        // savedVal = savedVal.join("").split(/[+-/*%]/);
        console.log(savedVal);
        savedVal = [];
        
    });
    $("#reset").on("click", function(){
        event.preventDefault();
        savedVal = [];
        $(".display").text("0");
    });

});