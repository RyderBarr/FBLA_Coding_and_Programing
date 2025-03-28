
// gets the id of the user
    function getUserID(username, password)
    {
        Object.keys(database).forEach( key =>
            {
                console.log(key + 'value' + database[key])
            }
        ) 

    }

    function changeTransaction(id)
    {
        return null
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

    console.log(getUserID('admin','admin1'))