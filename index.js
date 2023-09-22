var balance = 0;
  
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

    
   function  deposit() {
    var amount = document.getElementById("Amount").value;
        //try {
           //if (amount <= 0 || isNaN(amount)) {
            // console.log('Invalid deposit amount. Please enter a positive number.');
          // }
           balance =+ amount;
           //console.log(`Deposited $${amount}. New balance: $${balance}`);
         } //catch (error) {
           //console.log(`Error: ${error.message}`);
        // } finally {
         //  console.log('Deposit operation completed.');
        // }
         document.getElementById("demo").innerHTML = parseInt(balance);
       
  
 
  
    