
class Account
{

    // variable for expences and incomes 
        changes = [];

    // balance variable
        balance = 0;

    //incomelist
        incomeList = [];

    //expenselist
        expenseList = [];

    // constructing the account includes first name, last name, phone number, email address, and balance
        constructor ( fName = "" , lName = "" , phone = "" , email = "" , balance = 0 ){

            this.fName = fName;
            this.lName = lName;

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

    // get and sets

        // get set first name
            get getFName()
            {

                return this.fName;

            }

            set setFName( fName )
            {

                this.fName = fName;

            }

        // get set second name
            get getLName()
            {

                return this.lName;

            }

            set setLName( lName )
            {

                this.lName = lName; 

            }
        
        // get set phone
            get phone()
            {

                return this.phone;

            }

            set phone( phone )
            {

                //if phone number is writen like ***-***-****
                    phonecheck:if ( phone.length == 12 )
                    {

                        phone = phone.substring(0,3) + phone.substring(4,6) + phone.substring(7); //cuting out the - or / in the number
                        this.phone = phone;

                    }
    
                //if phone is writen like **********
                    phonecheck:if ( phone.length == 9 )
                    {

                        this.phone = phone;

                    }

            }

        // get set email
            get email()
            {

                return this.email;

            }

            set email( email )
            {

                this.email = email;

            }

        //get set balance
            get balance()
            {

                return this.fName;

            }

            set balance( balance )
            {

                this.fName = fName;

            }
    
    // set up the login information for the acount
        createLogin ( uName , pWord )
        {

            this.username = uName;
            this.password = pWord;

        }

    // adds an expense to the users account
        expense ( amount , record , date , eName )
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
                        this.expenseList[0] = "no details";
                        this.expenseList[1] = date;
                        this.expenseList[2] = " + ";
                        this.expenseList[3] = amount;

                    // if the amount is less then ten catigorize as a tiny expense 
                        amountCheck:switch(true){

                        // if amount is less then 10 then add "tiny" expense" to expenseList then break out of the switch
                            case amount < 10:
                                this.expenseList = [this.expenseList + "tiny expense"];
                                break;

                        // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                            case amount < 30:
                                this.expenseList = [this.expenseList + "small expense"];
                                break;

                        // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                            case amount < 60:
                                this.expenseList = [this.expenseList + "normal expense"];
                                break;

                        // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                            case amount < 100:
                                this.expenseList = [this.expenseList + "big expense"];
                                break;

                        // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                            case amount < 500:
                                this.expenseList = [this.expenseList + "large expense"];
                                break;

                        // if it reaches here add "huge expense" to expenseList
                            default:
                                this.expenseList = [this.expenseList + "huge expense"];    
                        }

                //changes and expenseList are added to changes list
                    this.changes = [changes, `${eName} : ${this.expenseList}`];

                }

        }

    //same as the expense above but includes a details string 
        expense ( amount , details , record , date , eName )
        {

            // fills in the info from the expense above
                this.expense(amount , false , date );

            // if record is true then the following code will run
                record:if ( record )
                {

                    //expenseList will contain "no details", the date and the amount * -1
                        this.expenseList[0] = details;
                        this.expenseList[1] = date;
                        this.expenseList[2] = " + ";
                        this.expenseList[3] = amount;

                    amountCheck:switch(true)
                    {

                        // if amount is less then 10 then add "tiny" expense" to expenseList then break out of the switch
                            case amount < 10:
                                this.expenseList = [this.expenseList + "tiny expense"];
                                break;

                        // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                            case amount < 30:
                                this.expenseList = [this.expenseList + "small expense"];
                                break;

                        // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                            case amount < 60:
                                this.expenseList = [this.expenseList + "normal expense"];
                                break;

                        // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                            case amount < 100:
                                this.expenseList = [this.expenseList + "big expense"];
                                break;

                        // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                            case amount < 500:
                                this.expenseList = [this.expenseList + "large expense"];
                                break;

                        // if it reaches here add "huge expense" to expenseList
                            default:
                                this.expenseList = [this.expenseList + "huge expense"];    
                    }

                    //changes and expenseList are added to changes list
                        this.changes = [changes, `${eName} : ${this.expenseList}`];

                }

        }
    
    // adds an income to the users account
        income ( amount , record , date , eName )
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
                        this.incomeList[0] = "no details";
                        this.incomeList[1] = date;
                        this.incomeList[2] = " + ";
                        this.incomeList[3] = amount;

                    amountCheck:switch(true)
                    {

                        // if amount is less then 10 then add "tiny" income" to incomeList then break out of the switch
                            case amount < 10:
                                this.incomeList = [this.incomeList + "tiny income"];
                                break;

                        // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                            case amount < 30:
                                this.incomeList = [this.incomeList + "small income"];
                                break;

                        // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                            case amount < 60:
                                this.incomeList = [this.incomeList + "normal income"];
                                break;

                        // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                            case amount < 100:
                                this.incomeList = [this.incomeList + "big income"];
                                break;

                        // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                            case amount < 500:
                                this.incomeList = [this.incomeList + "large income"];
                                break;

                        // if it reaches here add "huge income" to incomeList
                            default:
                                this.incomeList = [this.incomeList + "huge income"];    
                    }
            
                    //changes and incomeList are added to changes list
                        this.changes = [changes, `${eName} : ${this.incomeList}`];

                }

        }

    //same as the income above but includes a details string 
        income ( amount , details , record , date , eName )
        {

            // fills in the info from the income above
                this.income( amount , false , date );

            // if record is true then the following code will run
                record:if ( record )
                    {

                        //incomeList will contain "no details", the date, +, and the amount
                            this.incomeList[0] = details;
                            this.incomeList[1] = date;
                            this.incomeList[2] = " + ";
                            this.incomeList[3] = amount;

                            amountCheck:switch(true)
                            {

                                // if amount is less then 10 then add "tiny" income" to incomeList then break out of the switch
                                    case amount < 10:
                                        this.incomeList = [this.incomeList + "tiny income"];
                                        break;

                                // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                                    case amount < 30:
                                        this.incomeList = [this.incomeList + "small income"];
                                        break;

                                // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                                    case amount < 60:
                                        this.incomeList = [this.incomeList + "normal income"];
                                        break;

                                // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                                    case amount < 100:
                                        this.incomeList = [this.incomeList + "big income"];
                                        break;

                                // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                                    case amount < 500:
                                        this.incomeList = [this.incomeList + "large income"];
                                        break;

                                // if it reaches here add "huge income" to incomeList
                                    default:
                                        this.incomeList = [this.incomeList + "huge income"];    
                            }

                        //changes and incomeList are added to changes list
                            this.changes = [this.changes, `${eName} : ${this.incomeList}`];

                    }

        }

    // i is the index number of the change that the user wants to delete
        deleteChange( i ){

            delete this.changes[ i + 1 ];

        }

    // this is the same as deleteChange but it is by name
        incomeDeleteChange( eName ){

            // this is for loop to look through the changes
                Deletefor:for ( let i of changes )
                {
    
                    // if the change that the loop is on, has the name inputed in is on the change 
                        setDelete:if (i.includes(eName))
                        {

                            delete this.changes[ i + 1 ];
                    
                        }
    
                }
        

        }

    // the same as above but instead it is replaceing information rather then deleting
        incomeUpdateChange( eName , amount , nEName , date )
        {

            updateFor:for ( let i of changes )
            {

                setUpdate:if (i.includes(eName))
                {

                    this.incomeList[0] = "no details";
                    this.incomeList[1] = date;
                    this.incomeList[2] = " + ";
                    this.incomeList[3] = amount;

                    this.changes = [this.changes, `${nEName} : ${this.incomeList}`];

                }

            }

        }

    // this is the same as incomeDeleteChange but for expense 
        expenseDeleteChange( eName ){

            // this is for loop to look through the changes
            Deletefor:for ( let i of changes )
                {
    
                    // if the change that the loop is on, has the name inputed in is on the change
                        setDelete:if (i.includes(eName))
                        {

                            delete this.changes[ i + 1 ];
                    
                        } 
    
                }
        

        }

    // the same as above but instead it is replaceing information rather then deleting
        expenseUpdateChange( eName , amount , nEName , date ){

            updateFor:for ( let i of changes )
            {

                setUpdate:if (i.includes(eName))
                {

                    this.expenseList[0] = "no details";
                    this.expenseList[1] = date;
                    this.expenseList[2] = " + ";
                    this.expenseList[3] = amount;

                    this.changes = [this.changes, `${nEName} : ${this.expenseList}`];

                }

            }

    }

}


// test area

const Acc = new Account("ryder","barr","999-999-9999","ryderbarr2008@gmail.com",200);
console.log(Acc.getFName);

// test area