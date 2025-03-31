
// gets the id of the user
    let gotUserID

// get user ID is the function that gets the user id after 
    function getUserID(username, password)
    {
        
        let passwordRight = false;
        let usernameRight = false;
        let ID = 0;

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
    function deleteTransaction(id)
    {

        // goes through all the users in the database
            Object.keys(database).forEach( key => {

                let User = database[key]    

                // goes through all the users data
                    Object.keys(User).forEach( key => {

                        // if the key is history
                            if(key == 'history')
                            {

                                let tranHist = User[key]

                                // goes through all the transaction history
                                    Object.keys(tranHist).forEach( key=> {

                                        let tran = tranHist[key]

                                        // goes through all the data in the transaction
                                            Object.keys(tran).forEach( key => {

                                                // if the transaction = key 
                                                    if ( key == 'id' && tran[key] == id )
                                                    {
                                                    
                                                        // deletes the transaction
                                                            delete tranHist.tran
                                            
                                                    }

                                            })
                                    
                                    })
                        
                            }
            
                        
                    })

            })
        
    }

// change a transaction - this is what im working on
    function changeTransaction(id, newName=null , newAmount = null, )
    
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
        
                transaction4:
                {
                        
                    id:3,    
                    amount:1000,
                    date:'09/83/56',
                    Ename:'4',
                    record:true,
                    details:'i put all my money on black',
        
                },

                transaction5:
                {
                        
                    id:4,    
                    amount:1,
                    date:'01/01/01',
                    Ename:'5',
                    record:true,
                    details:'i found a dollar',
        
                },

                transaction6:
                {
                        
                    id:5,    
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
    // getUserID('admin','admin1');console.log(gotUserID)

    deleteTransaction(0)
