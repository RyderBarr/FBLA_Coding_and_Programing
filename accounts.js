
// gets the id of the user
    let gotUserID
    function getnewID(obj=database, username, password)
    {

        let isUserName = false;
        let isPassword = false;
        let tempID = 0;

        Object.keys(obj).forEach( key =>
        {
                let user = obj[key]
                Object.keys(user).forEach( key =>
                {
                   
                    
                    if (key == 'userName' && user[key] == username){isUserName = true}

                    if (key == 'password' && user[key] == password){isPassword = true}

                    if (key == 'id'){tempID = user[key]}

                })

            if(isPassword && isUserName){gotUserID = tempID}
            isPassword = false
            isUserName = false

        })

        // goes through all the users in the database
            Object.keys(database).forEach( key => {
                
                let User = database[key]    

                // goes through all the users data
                    Object.keys(User).forEach( key => {
                
                        // if the username is the same as the one entered
                            if(key == 'userName' && User[key] == username)
                            {

                                usernameRight = true;
 
                    
                            }

                        // if the password is the same as the one entered
                            if(key == 'password' && User[key] == password)
                            {

                                passwordRight = true;

                            }

                        // sets the temperary id variable to the id of the user
                            if(key == 'id')
                            {

                                ID = User[key];

                            }
                
                    })
            
                // if the password and username are right the id is saved outside of the function 
                    if(passwordRight && usernameRight)
                    {

                        gotUserID = ID

                    }

                // reseting varibles
                    passwordRight = false
                    usernameRight = false
                    ID = 0

            })

    }  

// deletes a transaction 
        

// change a transaction
    function changeTransactionBuyID(obj=database,transactionID=1, id=1, newName=null, amount=null, date=null, record=null, details=null)
    {
            // iterates through all the keys of the obj
                Object.keys(obj).forEach( key => {

                    let user = obj[key] 
    
                    // a varible to check if the user is the correct user
                        let isID = false
    
                    // iterates through the user data
                        Object.keys(user).forEach( key => {
    
                            let history = user[key]
    
                            // gets to the users id and checks if this user is the user by id
                                if(key == "id")
                                {

                                    if(user[key] == id)
                                    {
                                        isID = true

                                    }
                                    
                                }
                            // if this is the ID 
                                if(isID)
                                {
                                    
                                    // and if we are in history
                                    if( key == 'history')
                                    {

                                        // iterates through history 
                                            Object.keys(history).forEach( key => {
    
                                                let transaction = history[key]
                                                
                                                // to check is at the proper transation
                                                let isTransaction = false

                                                // iterates through a transaction
                                                    Object.keys(transaction).forEach( key => {
                                                    
                                                        // if we are looking at the right id
                                                        
                                                            if (key == 'id' && transaction[key] == transactionID)
                                                            {
                                                                
                                                                isTransaction = true
                                                            
                                                            }

                                                            if(isTransaction)
                                                            {

                                                                if(key == 'Ename' && newName != null)
                                                                {

                                                                    transaction[key] = newName
                                                                    console.log(transaction[key])
                                                                }

                                                                if(key == 'amount' && amount != null)
                                                                {

                                                                    transaction[key] = amount

                                                                }
                                                                
                                                                if(key == 'date' && newName != null)
                                                                {

                                                                    transaction[key] = date

                                                                }

                                                                if(key == 'record' && record != null)
                                                                {

                                                                    transaction[key] = record

                                                                }

                                                                if(key == 'details' && details != null)
                                                                {

                                                                    transaction[key] = details

                                                                }
                                                                   
                                                            }
    
                                                    })

                                                isTransaction = false
    
                                            })
                                        
                                    }
    
                                }
                            
                        })
    
                    // resettes the id check 
                        isID = false
    
                })

    }

// change a transaction
    function changeTransactionBuyName(obj=database, id=1, Name='2', newName=null, amount=null, date=null, record=null, details=null)
    {

        // iterates through all the keys of the obj
        Object.keys(obj).forEach( key => {

            let user = obj[key] 

            // a varible to check if the user is the correct user
                let isID = false

            // iterates through the user data
                Object.keys(user).forEach( key => {


                    let history = user[key]

                    // gets to the users id and checks if this user is the user by id
                        if(key == "id")
                        {

                            if(user[key] == id)
                            {
                                isID = true

                            }
                            
                        }
                    // if this is the ID 
                        if(isID)
                        {
                            
                            // and if we are in history
                            if( key == 'history')
                            {

                                // iterates through history 
                                    Object.keys(history).forEach( key => {

                                        let transaction = history[key]
                                        
                                        // to check is at the proper transation
                                        let isTransaction = false

                                        // iterates through a transaction
                                            Object.keys(transaction).forEach( key => {
                                            
                                                // if we are looking at the right id
                                                
                                                    if (key == 'Ename' && transaction[key] == Name)
                                                    {
                                                        
                                                        isTransaction = true
                                                    
                                                    }

                                                    if(isTransaction)
                                                    {

                                                        if(key == 'Ename' && newName != null)
                                                        {

                                                            transaction[key] = newName

                                                        }

                                                        if(key == 'amount' && amount != null)
                                                        {

                                                            transaction[key] = amount

                                                        }
                                                        
                                                        if(key == 'date' && newName != null)
                                                        {

                                                            transaction[key] = date

                                                        }

                                                        if(key == 'record' && record != null)
                                                        {

                                                            transaction[key] = record

                                                        }

                                                        if(key == 'details' && details != null)
                                                        {

                                                            transaction[key] = details

                                                        }
                                                           
                                                    }

                                            })

                                        isTransaction = false

                                    })
                                
                            }

                        }
                    
                })

            // resettes the id check 
                isID = false

        })

    }

// create new user
    function newUser(obj=database, firstname='john', lastname='doe', Password='A0000!', username='johnDoe', Balanced=0, Phone='000-000-0000', Email='johnDoe@gmail.com')
    {

        let newID = 0;
                                    
        // a check for is the new ID is updated
            let newIDUpdated = false
        
        // iterates through obj 
            Object.keys(obj).forEach( key => {

                let user = obj[key]
                
                // iterates through a user
                    Object.keys(user).forEach( key => {
                    
                        // if we are looking at the id
                            if (key == 'id')
                            {
                                
                                // if the id is greater the newID
                                    if (user[key] > newID )
                                    {

                                        // set update to true
                                            newIDUpdated = true
                                        
                                        // sets new ID to the bigger id 
                                            newID = user[key]
        
                                    }
                            
                            }

                    })

            })
        
        // sees if the new ID was updated
            if(newIDUpdated){
        
                let userName = `exampleUser${newID+1}`

                // creates the new user
                    let User = {
                        [userName]:{
                            id:newID+1,
                            firstName:firstname,
                            lastName:lastname,
                            userName:username,
                            password:Password,
                            balance:Balanced,
                            phone:Phone,
                            email:Email,
                            history:{
                                transaction1:{   
                                    id:0,
                                }
                            },
                        }
                    }
                    console.log(User)

                // addes the new transaction to the history
                    Object.assign(obj, User)
            }

            console.log(obj)
        
        // resets the check
            newIDUpdated = false
        
    }

// create transaction 
    function createTransaction(obj=database, id=1, amount=100, date='9/11/01', Ename='attack', record=false, details='')
    {
        // iterates through all the keys of the obj
            Object.keys(obj).forEach( key => {

                let user = obj[key] 

                // a varible to check if the user is the correct user
                    let isID = false

                // iterates through the user data
                    Object.keys(user).forEach( key => {

                        let history = user[key]

                        // gets to the users id and checks if this user is the user by id
                            if(key == 'id' && user[key] == id)
                            {

                                isID = true

                            }

                        // if this is the ID 
                            if(isID)
                            {

                                // and if we are in history
                                if( key == 'history')
                                {

                                    let newID = 0;
                                    
                                    // a check for is the new ID is updated
                                        let newIDUpdated = false
                                    
                                    // iterates through history 
                                        Object.keys(history).forEach( key => {

                                            let transaction = history[key]
                                            
                                            // iterates through a transaction
                                                Object.keys(transaction).forEach( key => {
                                                
                                                    // if we are looking at the id
                                                        if (key == 'id')
                                                        {
                                                            
                                                            // if the id is greater the newID
                                                                if (transaction[key] > newID )
                                                                {

                                                                    // set update to true
                                                                        newIDUpdated = true
                                                                    
                                                                    // sets new ID to the bigger id 
                                                                        newID = transaction[key]
                                    
                                                                }
                                                        
                                                        }

                                                })

                                        })
                                    
                                    // sees if the new ID was updated
                                        if(newIDUpdated){
                                    
                                            let transactionName = `transaction${newID+2}`

                                            // creates the new transaction
                                                let newTransaction = {
                                                    [transactionName]:{
                                                        id:newID+1,    
                                                        amount:amount,
                                                        date:date,
                                                        Ename:Ename,
                                                        record:record,
                                                        details:details,
                                                    }
                                                }

                                            // addes the new transaction to the history
                                                Object.assign(history, newTransaction)
                                        }
                                    
                                    // resets the check
                                        newIDUpdated = false
                                    
                                }

                            }
                        
                    })

                // resettes the id check 
                    isID = false

            })

    }

// test data base 
    database = {

        exampleUser1:{
            
            id:1,
            firstName:'ryder',
            lastName:'barr',
            userName:'admin',
            password:'admin1',
            balance:50,
            phone:'602-989-1312',
            email:'ryderbarr2008@gmail.com',

            history:
            {

                transaction1:
                {   
                    id:0,    
                    amount:-99999,
                    date:'09/83/56',
                    Ename:'1',
                    record:true,
                    details:'i put all my money on black',
                
                },

                transaction2:
                {
        
                    id:1,    
                    amount:-99,
                    date:'05/8555/5',
                    Ename:'2',
                    record:true,
                    details:'i put all my money on black again',
            
                },

                transaction3:
                {
                        
                    id:2,    
                    amount:-25,
                    date:'09/83/56',
                    Ename:'3',
                    record:true,
                    details:'i put all my money on black for the last time',
            
                },
            
            },
        
        },

        exampleUser2:
        {

            id:2,
            firstName:'monte',
            lastName:'mcgumery',
            userName:'big_dumb',
            password:'5318008',
            balance:50,
            phone:'777-666-1000',
            email:'monteemail@gmail.com',

            history:{
        
                transaction1:
                {
                        
                    id:0,    
                    amount:1000,
                    date:'09/83/56',
                    Ename:'4',
                    record:true,
                    details:'i put all my money on black',
        
                },

                transaction2:
                {
                        
                    id:1,    
                    amount:1,
                    date:'01/01/01',
                    Ename:'5',
                    record:true,
                    details:'i found a dollar',
        
                },

                transaction3:
                {
                        
                    id:2,    
                    amount:-5645674,
                    date:'120/245633/276',
                    Ename:'6',
                    record:false,
                    details:'',
        
                },
        
            },
        
        },

    };
