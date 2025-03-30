
// gets the id of the user
    let gotUserID
    function getUserID(username, password)
    {

        let isUserName = false;
        let isPassword = false;
        let tempID = 0;

        Object.keys(database).forEach( key =>
        {
                let user = database[key]
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

    }

// change a transaction
    function changeTransactionBuyID(userID, id, newName=null, amount=null, date=null, record=null, details=null)
    {
        let isID = false;
        Object.keys(database).forEach( key =>
        {


            let user = database[key]
            Object.keys(user).forEach( key =>
            {

                let history = user[key]

                Object.keys(history).forEach( key =>
                {

                    let transaction = history[key]

                    Object.keys(transaction).forEach( key => 
                    {


                        if(transaction[key] == 'id'){

                            

                        }                           
                        
                    })

                })
    
            })
    
        })

    }

// change a transaction
    function changeTransactionBuyName(userID, Name, newName=null, amount=null, date=null, record=null, details=null)
    {
        
    }

// save a transaction
    function saveTransaction(newName=null, amount=null, date=null, record=null, details=null)
    {

    }

// create new user
    function newUser(firstname, lastname, password, username, balanced, phone, email)
    {

    }

// create transaction 
    function createTransaction(obj=database, id=1, amount=100, date='9/11/01', Ename='attack', record=false, details='')
    {

        Object.keys(obj).forEach( key => {

            let user = obj[key] 

            let isID = false
            Object.keys(user).forEach( key => {

                // console.log(key)
                let history = user[key]
                if(key == 'id' && user[key] == id)
                {

                    isID = true

                }

                if(isID)
                {

                    if( key = 'history')
                    {

                        
                        let userID = 0;
                        let userIDUpdated = false
                        
                        Object.keys(history).forEach( key => {

                            let transaction = history[key]
                            Object.keys(transaction).forEach( key => {
                               
                                if (key = 'id')
                                {
                                    
                                    if (transaction[key] > userID )
                                    {

                                        userIDUpdated = true
                                        userID = transaction[key]
        
                                    }
                                
                                }

                            })

                        })
                        
                        if(userIDUpdated){
                            let transactionName = `transaction${userID+2}`
                            let newTransaction = {
                                [transactionName]:{
                                    id:userID+1,    
                                    amount:amount,
                                    date:date,
                                    Ename:Ename,
                                    record:record,
                                    details:details,
                                }
                            }
                            Object.assign(history, newTransaction)
                        }
                        userIDUpdated = false
                        
                    }

                }
                
            })
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

// test code
    // getUserID('admin', 'admin1');console.log(gotUserID)

    // changeTransactionBuyID(1,0)

    createTransaction()
    console.log(database)

