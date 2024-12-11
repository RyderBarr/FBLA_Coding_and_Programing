
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

    // constructing the account includes first name, last name, phone number, email address, and balance --- tested
        constructor ( fName = "" , lName = "" , phone = "" , email = "" , balance = 0, username = "", password = "" )
        {
            newUser = "{ ";
            newUser += "\"username\":" + username;
            newUser += ", "
            newUser += "\"password\":" + username;
            newUser += ", "

            this.fName = fName;
            this.lName = lName;

            
                //if phone number is writen like ***-***-****
                    phonecheck:if ( phone.length == 12 )
                    { 

                        phone = phone.substring(0,3) + phone.substring(4,7) + phone.substring(8); //cuting out the - or / in the number
                        this.phone = phone;
                        
                    }
        
                //if phone is writen like **********
                    phonecheck:if ( phone.length == 10 )
                    {

                       this.phone = phone;

                    }

            this.email = email;

            this.balance = balance;

            this.password = password;

            this.username = username;
                    
        }

    // get and sets --- tested

        // get set first name --- tested
            get getFName()
            {

                return this.fName;

            }

            set setFName( fName )
            {

                this.fName = fName;

            }

        // get set second name --- tested
            get getLName()
            {

                return this.lName;

            }

            set setLName( lName )
            {

                this.lName = lName; 

            }
        
        // get set phone --- tested
            get getPhone()
            {

                return this.phone;

            }

            set setPhone( phone )
            {

                //if phone number is writen like ***-***-****
                    phonecheck:if ( phone.length == 12 )
                    {

                        phone = phone.substring(0,3) + phone.substring(4,7) + phone.substring(8); //cuting out the - or / in the number
                        this.phone = phone;

                    }
    
                //if phone is writen like **********
                    phonecheck:if ( phone.length == 10 )
                    {

                        this.phone = phone;

                    }

            }

        // get set email --- tested
            get getEmail()
            {

                return this.email;

            }

            set setEmail( email )
            {

                this.email = email;

            }

        //get set balance --- tested               
            get getBalance()
            {

                return this.balance;

            }

            set setBalance( balance )
            {

                this.balance = balance;

            }

        // get set username --- tested
            get getUsername()
            {

                return this.username;

            }

            set setUsername( username )
            {

                this.username = username;

            }

        //get set password --- tested               
            get getPassword()
            {

                return this.password;

            }

            set setPassword( password )
            {

                this.password = password;

            }

    // adds an expense to the users account --- convert to json
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
                                this.expenseList.push("tiny expense");
                                break;

                        // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                            case amount < 30:
                                this.expenseList.push("small expense");
                                break;

                        // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                            case amount < 60:
                                this.expenseList.push("normal expense");
                                break;

                        // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                            case amount < 100:
                                this.expenseList.push("big expense");
                                break;

                        // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                            case amount < 500:
                                this.expenseList.push("large expense");
                                break;

                        // if it reaches here add "huge expense" to expenseList
                            default:
                                this.expenseList.push("huge expense");    
                        }

                //changes and expenseList are added to changes list
                    this.changes.push(`${eName} : ${this.expenseList}`);

                }

        }
    
    // adds an income to the users account --- convert to json
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
                                this.incomeList.push("tiny income");
                                break;

                        // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                            case amount < 30:
                                this.incomeList.push("small income");
                                break;

                        // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                            case amount < 60:
                                this.incomeList.push("normal income");
                                break;

                        // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                            case amount < 100:
                                this.incomeList.push("big income");
                                break;

                        // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                            case amount < 500:
                                this.incomeList.push("large income");
                                break;

                        // if it reaches here add "huge income" to incomeList
                            default:
                                this.incomeList.push("huge income");    
                    }
            
                    //changes and incomeList are added to changes list
                        this.changes.push( `${eName} : ${this.incomeList}`);

                }

        }


    // i is the index number of the change that the user wants to delete --- tested --- convert to json
        deleteChange( i = 0 ){
            
            if( i > -1 )
            {

                // cuts out the i entered from the changes array
                    this.changes.splice( i -1 , i );

            }

        }

    // this is the same as deleteChange but it is by name --- this is what i am working on
    // this is the same as deleteChange but it is by name --- this is what i am working on
    // this is the same as deleteChange but it is by name --- this is what i am working on
    // this is the same as deleteChange but it is by name --- this is what i am working on
    // this is the same as deleteChange but it is by name --- this is what i am working on
        incomeDeleteChange( eName = "" ){

            // this is for loop to look through the changes
                Deletefor:for ( let i of this.changes )
                {
    
                    // if the change that the loop is on, has the name inputed in is on the change 
                    // when using json try if(json[i].name == ename) 
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

const Acc = new Account("ryder","barr","602-989-1312","ryderbarr2008@gmail.com",200,"rbbar271","552271");

console.log(Acc.balance)

Acc.expense(10, "bought a shirt", record = true , date = "12/9/2024" , eName = "test1" )

console.log(Acc.balance)

console.log(Acc.changes)

Acc.income(10, "bought a shirt", record = true , date = "12/9/2024" , eName = "test2" )

console.log(Acc.balance)

console.log(Acc.changes)

Acc.incomeDeleteChange("test1")

console.log(Acc.changes)


// test area

