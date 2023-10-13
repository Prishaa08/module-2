//jquery

$(document).ready(function(){

    //catch body
    var body=$('body');

    // now make a array of your color
    //add more color

    var color= [
        'red',
        'green',
        'blue',
        'magenta',
        'yellow',
        'orange',
        'violet',
        'ash',
        'brown',
        'cyan',
        'crimson',
        '#00b894',
        '#0984e3',
        '#e84393',
        'FF9801',
        '00bcd4',
    ];
    var i=0;
    
    //make a function
    function changeColor(){

        //add css to body
        body.css('background',color[i]);

        //change value of i
        i++;
        if(i>=color.length){
        i=0;
        }
    }

    //call function
    //changeColor();

    //now change the value of i and call function

    setInterval(changeColor,1000);
    

})