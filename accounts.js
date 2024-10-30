
class Account
{

    // variable for expences and incomes 
    changes = [];

    // balance variable
    balance = 0;

    // constructing the account
    // includes first name, last name, phone number, email address, and balance
    constructor ( fName = "" , lName = "" , phone = "" , email = "" , balance = 0 ){

        this.name = fName + " " + lName;
        this.firstName = fName;
        this.lastName = lName;

        //if phone number is writen like ***-***-****
        phonecheck:if ( phone.length == 12 ){
            phone = phone.substring(0,3) + phone.substring(4,6) + phone.substring(7); //cuting out the - or / in the number
            this.phone = phone;
        }
        
        //if phone is writen like **********
        phonecheck:if ( phone.length == 9 ){
            this.phone = phone;
        }

        this.email = email;

        this.balance = balance;

    }

    // set up the login information for the acount
    createLogin ( uName = "" , pWord = "" )
    {

        this.username = uName;
        this.password = pWord;

    }

    // adds an expense to the users account
    expense ( amount = 0 , record = true , date = "", eName = "")
    {

        negitveOne:if ( amount < 0 ) amount * -1

        // if the amount is zero or the amount is greater than the balance then it returns before any changes are made
        detailCheck:if (amount == 0 || amount > this.balance )
        {

            return;

        }

        // if the if above fails then the balance is subtracted by the amount
        else 
        {

            this.balance -= amount;

        }

        // if record is true then the following code will run
        record:if ( record )
        {

            //expenseList will contain "no details", the date and the amount * -1
            let expenseList = ["no details", date, amount * -1];

            // if the amount is less then ten catigorize as a tiny expense 
            amountCheck:switch(true){

                // if amount is less then 10 then add "tiny" expense" to expenseList then break out of the switch
                case amount < 10:
                    expenseList = [expenseList + "tiny expense"];
                    break;

                // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                case amount < 30:
                    expenseList = [expenseList + "small expense"];
                    break;

                // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                case amount < 60:
                    expenseList = [expenseList + "normal expense"];
                    break;

                // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                case amount < 100:
                    expenseList = [expenseList + "big expense"];
                    break;

                // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                case amount < 500:
                    expenseList = [expenseList + "large expense"];
                    break;

                // if it reaches here add "huge expense" to expenseList
                default:
                    expenseList = [expenseList + "huge expense"];    
            }

            //changes and expenseList are added to changes list
            this.changes = [changes, `${eName} : ${expenseList}`];

        }

    }

    //same as the expense above but includes a details string 
    expense ( amount = 0 , details = "", record = true , date = "", eName = "")
    {

        // fills in the info from the expense above
        this.expense(amount , false , date );

        // if record is true then the following code will run
        record:if ( record )
        {

            //expenseList will contain "no details", the date and the amount * -1
            let expenseList = [details, date, amount * -1]

            amountCheck:switch(true){

                // if amount is less then 10 then add "tiny" expense" to expenseList then break out of the switch
                case amount < 10:
                    expenseList = [expenseList + "tiny expense"];
                    break;

                // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                case amount < 30:
                    expenseList = [expenseList + "small expense"];
                    break;

                // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                case amount < 60:
                    expenseList = [expenseList + "normal expense"];
                    break;

                // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                case amount < 100:
                    expenseList = [expenseList + "big expense"];
                    break;

                // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                case amount < 500:
                    expenseList = [expenseList + "large expense"];
                    break;

                // if it reaches here add "huge expense" to expenseList
                default:
                    expenseList = [expenseList + "huge expense"];    
            }

            //changes and expenseList are added to changes list
            this.changes = [changes, `${eName} : ${expenseList}`];

        }

    }
    
    // adds an income to the users account
    income ( amount = 0 , record = true , date = "", eName = "")
    {

        negitveOne:if ( amount < 0 ) amount * -1

        // if the amount is zero then it returns before any changes are made
        detailCheck:if (amount == 0 )
        {

            return;

        }

        // if the if above fails then the balance is added with the amount
        else 
        {

            this.balance += amount;

        }

        // if record is true then the following code will run
        record:if ( record )
        {

            //incomeList will contain "no details", the date, +, and the amount 
            let incomeList = ["no details", date, " +" , amount]

            amountCheck:switch(true){

                // if amount is less then 10 then add "tiny" income" to incomeList then break out of the switch
                case amount < 10:
                    incomeList = [incomeList + "tiny income"];
                    break;

                // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                case amount < 30:
                    incomeList = [incomeList + "small income"];
                    break;

                // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                case amount < 60:
                    incomeList = [incomeList + "normal income"];
                    break;

                // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                case amount < 100:
                    incomeList = [incomeList + "big income"];
                    break;

                // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                case amount < 500:
                    incomeList = [incomeList + "large income"];
                    break;

                // if it reaches here add "huge income" to incomeList
                default:
                    incomeList = [incomeList + "huge income"];    
            }
            
            //changes and incomeList are added to changes list
            this.changes = [changes, `${eName} : ${incomeList}`];

        }

    }

    //same as the income above but includes a details string 
    income ( amount = 0 , details = "", record = true , date = "", eName = "")
    {

        // fills in the info from the income above
        this.income( amount , false , date );

        // if record is true then the following code will run
        record:if ( record )
        {

            //incomeList will contain "no details", the date, +, and the amount
            let incomeList = [details, date, " +" , amount]

            amountCheck:switch(true){

                // if amount is less then 10 then add "tiny" income" to incomeList then break out of the switch
                case amount < 10:
                    incomeList = [incomeList + "tiny income"];
                    break;

                // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                case amount < 30:
                    incomeList = [incomeList + "small income"];
                    break;

                // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                case amount < 60:
                    incomeList = [incomeList + "normal income"];
                    break;

                // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                case amount < 100:
                    incomeList = [incomeList + "big income"];
                    break;

                // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                case amount < 500:
                    incomeList = [incomeList + "large income"];
                    break;

                // if it reaches here add "huge income" to incomeList
                default:
                    incomeList = [incomeList + "huge income"];    
            }

            //changes and incomeList are added to changes list
            this.changes = [changes, `${eName} : ${incomeList}`];

        }

    }

    get balance(){
        return this.balance;
    }

    deleteChange( i = 0 ){

        delete this.changes[ i + 1 ];

    }

    deleteChange( eName = "" ){

        for ( let i of changes )
            {
    
                if (i.includes(eName))
                {

                    delete this.changes[ i + 1 ];

                }
    
            }
        

    }

    updateChange( eName = "" , amount = 0 , nEName = "" , date = "" ){

        for ( let i of changes )
        {

            if (i.includes(eName))
            {

            }

        }

    }

}
