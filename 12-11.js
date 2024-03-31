//12-11 Multiple conditions, fulfill both conditions, else if

var getJob = true;
var savedCapital = 5000;

//Both logic will have to match &&
if (getJob == true && savedCapital > 200000) {
    console.log('Come here! We will go to see a lady to get married.');
} else {
    console.log('Sorry, you don\'t need to merry');
}

//One logic will have to match ||
if (getJob == true || savedCapital > 200000) {
    console.log('Come here! We will go to see a lady to get married.');
} else {
    console.log('Sorry, you don\'t need to merry');
}

//If one logic miss then another logic will be set
if (getJob == true && savedCapital > 200000) {
    console.log('Come here! We will go to see a lady to get married.');
}else if(getJob == true){
    console.log('You need to try hard!')
} 
else {
    console.log('Sorry, you don\'t need to merry');
}