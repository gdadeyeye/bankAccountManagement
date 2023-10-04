
  
    function getAccountInfo(){
        document.getElementById("account").style.display ="block";
        document.getElementById("cash").style.display ="none";
        document.getElementById("withdraw").style.display ="none";
    }

    function getDepostInfo(){
        document.getElementById("account").style.display ="none";
        document.getElementById("cash").style.display ="block";
        document.getElementById("withdraw").style.display ="none";
    }
  
    function getWithdrawInfo(){
        document.getElementById("withdraw").style.display ="block";
        document.getElementById("cash").style.display ="none";
        document.getElementById("account").style.display ="none";
    }

    
// this section and fuction is meant for Savings Account
var balance = 0;
balance = Number(balance);
var deposit = document.getElementById('deposit');
deposit.addEventListener('click', depositCash);
var deposit = document.getElementById('withdrawS');
deposit.addEventListener('click', withdrawCash);

function depositCash() {
    var depositAmt = document.getElementById('bankBalance').value ;
    depositAmt = Number(depositAmt);
    balance = depositAmt + balance;
    document.getElementById("accountAmtS").innerHTML = balance;
    document.getElementById('bankBalance').value = "";
}

function withdrawCash() {
    var depositAmt = document.getElementById('WSamount').value ;
    depositAmt = Number(depositAmt);
    balance = balance - depositAmt ;
    document.getElementById("accountAmtS").innerHTML = balance;
    document.getElementById('WSamount').value = "";
}


// this section and function is meant for Checking Account
var balance_c = 0;
balance_c = Number(balance_c);
var depositchecking = document.getElementById('depositc');
depositchecking.addEventListener('click', depositCash_c);
var depositchecking = document.getElementById('WithdrawC');
depositchecking.addEventListener('click', withdrawCash_c);

function depositCash_c() {
    var depositAmtc = document.getElementById('bankBalc').value ;
    depositAmtc = Number(depositAmtc);
    balance_c = depositAmtc + balance_c;
    document.getElementById("accountAmtC").innerHTML = balance_c;
    document.getElementById('bankBalc').value = "";
    }

function withdrawCash_c() {
    var depositAmtc = document.getElementById('WCamount').value ;
    depositAmtc = Number(depositAmtc);
    balance_c = balance_c - depositAmtc ;
    document.getElementById("accountAmtC").innerHTML = balance_c;
    document.getElementById('WCamount').value = "";
}

        
         
       
  
 
  
    