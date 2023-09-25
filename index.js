
  
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

    var balance = 0;
    function  deposit() {
    var amount = document.getElementById("SAmount").value;
    balance =+ amount;
    document.getElementById("accountAmtS").innerHTML = balance;
}

function  depositC() {
    var amount = document.getElementById("CAmount").value;
    balance =+amount;
    document.getElementById("accountAmtC").innerHTML = balance;
}  

function  WithdrawS(){
    if(amount <= balance){
        balance =-amount;
    }
    var amount = document.getElementById("WSamount").value;
    
    document.getElementById("accountAmtS").innerHTML = balance;
}

function  WithdrawC() {
    var amount = document.getElementById("WCamount").value;
    balance =-amount;
    document.getElementById("accountAmtC").innerHTML = balance;
}

        
         
       
  
 
  
    