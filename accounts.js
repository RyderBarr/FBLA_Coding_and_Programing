
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

    

    // adds an expense to the users account
        expense ( amount = 0 , details = "" , record = false , date = "" , eName = "" )
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

                    //expenseList will contain details, the date and the amount * -1
                        this.expenseList[0] = details;
                        this.expenseList[1] = date;
                        this.expenseList[2] = " + ";
                        this.expenseList[3] = amount;

                    // if the amount is less then ten catigorize as a tiny expense 
                        amountCheck:switch(true){

                        // if amount is less then 10 then add "tiny" expense" to expenseList then break out of the switch
                            case amount < 10:
                                this.expenseList[4] = "tiny expense";
                                break;

                        // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                            case amount < 30:
                                this.expenseList[4] = "small expense";
                                break;

                        // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                            case amount < 60:
                                this.expenseList[4] = "normal expense";
                                break;

                        // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                            case amount < 100:
                                this.expenseList[4] = "big expense";
                                break;

                        // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                            case amount < 500:
                                this.expenseList[4] = "large expense";
                                break;

                        // if it reaches here add "huge expense" to expenseList
                            default:
                                this.expenseList[4] = "huge expense";    
                        }

                //changes and expenseList are added to changes list
                    this.changes.push(`${eName} : ${this.expenseList}`);

                }

        }
    
    // adds an income to the users account
        income ( amount = 0 , details = "", record = false , date = "" , eName = "" )
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

                    //incomeList will contain details, the date, +, and the amount 
                        this.incomeList[0] = details;
                        this.incomeList[1] = date;
                        this.incomeList[2] = " + ";
                        this.incomeList[3] = amount;

                        amountCheck:switch(true)
                        {
    
                            // if amount is less then 10 then add "tiny" income" to incomeList then break out of the switch
                                case amount < 10:
                                    this.incomeList[4] = "tiny income";
                                    break;
    
                            // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                                case amount < 30:
                                    this.incomeList[4] = "small income";
                                    break;
    
                            // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                                case amount < 60:
                                    this.incomeList[4] = "normal income";
                                    break;
    
                            // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                                case amount < 100:
                                    this.incomeList[4] = "big income";
                                    break;
    
                            // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                                case amount < 500:
                                    this.incomeList [4] = "large income";
                                    break;
    
                            // if it reaches here add "huge income" to incomeList
                                default:
                                    this.incomeList[4] = "huge income";    
                        }
            
                    //changes and incomeList are added to changes list
                        this.changes.push( `${eName} : ${this.incomeList}`);

                }

        }


    // i is the index number of the change that the user wants to delete 
        deleteChange( i = 0 ){
            
            if( i > -1 )
            {

                // cuts out the i entered from the changes array
                    this.changes.splice( i -1 , i );

            }

        }

    // this is the same as deleteChange but it is by name 
        incomeDeleteChange( eName = "" ){

            // this is for loop to look through the changes
                Deletefor:for ( let i of this.changes )
                {
    
                    // if the change that the loop is on, has the name inputed in is on the change  
                        setDelete:if ( i.includes( eName = "" ) )
                        {

                            if( i > -1 )
                            {
                    
                                // cuts out the i entered from the changes array
                                    this.changes.splice( i-1 , i );
                    
                            }
                    
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

                    amountCheck:switch(true)
                    {

                        // if amount is less then 10 then add "tiny" income" to incomeList then break out of the switch
                            case amount < 10:
                                this.incomeList[4] = "tiny income";
                                break;

                        // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                            case amount < 30:
                                this.incomeList[4] = "small income";
                                break;

                        // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                            case amount < 60:
                                this.incomeList[4] = "normal income";
                                break;

                        // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                            case amount < 100:
                                this.incomeList[4] = "big income";
                                break;

                        // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                            case amount < 500:
                                this.incomeList [4] = "large income";
                                break;

                        // if it reaches here add "huge income" to incomeList
                            default:
                                this.incomeList[4] = "huge income";    
                    }

                    this.changes.push(`${nEName} : ${this.incomeList}`);

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

                    amountCheck:switch(true)
                    {

                        // if amount is less then 10 then add "tiny" expense" to expenseList then break out of the switch
                            case amount < 10:
                                this.expenseList[4] = "tiny expense";
                                break;

                        // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                            case amount < 30:
                                this.expenseList[4] = "small expense";
                                break;

                        // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                            case amount < 60:
                                this.expenseList[4] = "normal expense";
                                break;

                        // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                            case amount < 100:
                            this.expenseList[4] = "big expense";
                                break;

                        // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                            case amount < 500:
                                this.expenseList[4] = "large expense";
                                break;

                        // if it reaches here add "huge expense" to expenseList
                            default:
                                this.expenseList[4] = "huge expense"; 

                    }

                    this.changes.push(`${nEName} : ${this.expenseList}`);

                }

            }

        }

}
