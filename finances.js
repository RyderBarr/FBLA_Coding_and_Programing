var rows = 0

var finances = [
    {   "Expenditure" : $("<td>"), 
        "Date" : $("<td>"), 
        "Quantity" : $("<td>") ,
        "Cost" : $("<td>")},
]


// runs when document is loaded, attaching the event to the newcost button.
$(document).ready(function() {
    if (localStorage.getItem("finance") != null){
        var tablerow = $("<tr>", {id: "row" + rows})
        finances[0] = localStorage.getItem("finance")
        $("#Table").append(tablerow)
        for(i in finances){
            tablerow.append(i.Expenditure[0])
            tablerow.append(i.Date[0])
            tablerow.append(i.Quantity[0])
            tablerow.append(i.Cost[0])
        }
    }
    $("#NewCost").click(function(){
        rows++
        tablerow = $("<tr>", {id: "row" + rows})
        var deletebutton = $("<button></button>", {class: "button", buttonrows : rows})
            // all the info, using prompts for now but will have a proper form. RYDER TO-DO.
        finances[0].Expenditure.text(prompt("What is the Expenditure Name?"))
        finances[0].Date.text(prompt("When was the Expenditure Made?"))
        finances[0].Quantity.text(prompt("What is the Expenditure Quantity?"))
        finances[0].Cost.text(prompt("What is the Expenditure Cost?"))
        $("#Table").append(tablerow)
        // attaches all the table definitions to the table row
        console.log(finances)
        for(i of finances){
                tablerow.append(i.Expenditure[0])
                tablerow.append(i.Date[0])
                tablerow.append(i.Quantity[0])
                tablerow.append(i.Cost[0])

        }
        tablerow.append(deletebutton)
        eventassign()
        localStorage.setItem("finance", finances[0])
    })

    $("#myForm").on("click", function(){
        console.log("AAAAa")
        let data = $("#form").serializeArray()
        console.log(JSON.stringify(data))
    })
})

// called when we add a new expense. links the delete button to the delete function. when pressed, deletes the table row its connected to. 
function eventassign(){
    $(".button").each(function(){
        $(this).click(function(){

            console.log("WORMSS")
            $(this).parent().remove()
        })
    })
}

