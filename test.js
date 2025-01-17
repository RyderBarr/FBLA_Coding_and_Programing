changes = [];

eName = "first"
expenseList = ["these are the details for the first", "1/1/2025", "+", "20", "small income"]

eName2 = "second"
expenseList2 = ["these are the details for the second", "2/2/2025", "+", "5", "tiny income"]

eName3 = "third"
expenseList3 = ["these are the details for the third", "3/3/2025", "-", "20", "small expense"]

changes.push(`${eName} : ${expenseList}`);
changes.push(`${eName2} : ${expenseList2}`);
changes.push(`${eName3} : ${expenseList3}`);

// this is the same as deleteChange but it is by name - untested
    function incomeDeleteChange( Name ){

        // this is for loop to look through the changes
            Deletefor:for ( let i of changes )
            {

                // if the change that the loop is on, has the name inputed in is on the change  
                    setDelete:if ( i.includes( Name = "" ) )
                    {

                        if( i > -1 )
                        {
                
                            // cuts out the i entered from the changes array
                                changes.splice( i-1 , i );

                                console.log("it reaches");
                
                        }
                
                    }

            }
    

    }

// the same as above but instead it is replaceing information rather then deleting - untested
    function incomeUpdateChange( eName , amount , nEName , date )
    {

        updateFor:for ( let i of changes )
        {

            setUpdate:if (i.includes(eName))
            {

                incomeList[0] = "no details";
                incomeList[1] = date;
                incomeList[2] = " + ";
                incomeList[3] = amount;

                amountCheck:switch(true)
                {

                    // if amount is less then 10 then add "tiny" income" to incomeList then break out of the switch
                        case amount < 10:
                            incomeList[4] = "tiny income";
                            break;

                    // if amount is less then 30 then add "small income" to incomeList then break out of the switch
                        case amount < 30:
                            incomeList[4] = "small income";
                            break;

                    // if amount is less then 60 then add :normal income" to incomeList then break out of the switch
                        case amount < 60:
                            incomeList[4] = "normal income";
                            break;

                    // if amount is less then 100 then add "big income" to incomeList then break out of the switch
                        case amount < 100:
                            incomeList[4] = "big income";
                            break;

                    // if amount is less then 500 then add "large income" to incomeList then break out of the switch
                        case amount < 500:
                            incomeList [4] = "large income";
                            break;

                    // if it reaches here add "huge income" to incomeList
                        default:
                            incomeList[4] = "huge income";    
                }

                changes.push(`${nEName} : ${incomeList}`);

            }

        }

    }

// this is the same as incomeDeleteChange but for expense - untested
    function expenseDeleteChange( eName ){

        // this is for loop to look through the changes
        Deletefor:for ( let i of changes )
            {

                // if the change that the loop is on, has the name inputed in is on the change
                    setDelete:if (i.includes(eName))
                    {

                        delete changes[ i + 1 ];
                
                    } 

            }
    

    }

// the same as above but instead it is replaceing information rather then deleting - untested
    function expenseUpdateChange( eName , amount , nEName , date ){

        updateFor:for ( let i of changes )
        {

            setUpdate:if (i.includes(eName))
            {

                expenseList[0] = "no details";
                expenseList[1] = date;
                expenseList[2] = " + ";
                expenseList[3] = amount;

                amountCheck:switch(true)
                {

                    // if amount is less then 10 then add "tiny" expense" to expenseList then break out of the switch
                        case amount < 10:
                            expenseList[4] = "tiny expense";
                            break;

                    // if amount is less then 30 then add "small expense" to expenseList then break out of the switch
                        case amount < 30:
                            expenseList[4] = "small expense";
                            break;

                    // if amount is less then 60 then add :normal expense" to expenseList then break out of the switch
                        case amount < 60:
                            expenseList[4] = "normal expense";
                            break;

                    // if amount is less then 100 then add "big expense" to expenseList then break out of the switch
                        case amount < 100:
                        expenseList[4] = "big expense";
                            break;

                    // if amount is less then 500 then add "large expense" to expenseList then break out of the switch
                        case amount < 500:
                            expenseList[4] = "large expense";
                            break;

                    // if it reaches here add "huge expense" to expenseList
                        default:
                            expenseList[4] = "huge expense"; 

                }

                changes.push(`${nEName} : ${expenseList}`);

            }

        }

    }

// console.log(changes);

incomeDeleteChange("second")

console.log(changes);
