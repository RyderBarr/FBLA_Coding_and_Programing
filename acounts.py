# discription of class
    # a class that has all the acount information 
    # such as acount name, balance, acount_income, 
    # acount_expense, acount_date and acount_dates
    # as well as having many methods for 
    # transactions and summaries
    #   V
class acount_class:
#acount information

        # the name of the person who made the account V
    acount_name = ""

        # the current balance of the account V
    acount_balance = 0.00

        # all income of the account V
    acount_income = [0, 0, 0]

        # every expense of the account V
    acount_expense = [0, 0, 0]

        # will save the date of an account creation 
    acount_date = ""

        # will save pars of dates and transaction amounts
    acount_dates = {}

 #acount information

#acount_class constrocter
    def acount_class(name, balance, income, expense, date):    
        acount_name = name
        acount_balance = balance
        acount_income = income
        acount_expense = expense
        acount_date = date
        acount_dates = dates
#acount_class constrocter
    
#functions V

# transaction 
    def transaction(category, amount, day, month, year):
             # these if-statments makes sure the the date is correct
        #day check
        if day > 31 or month < 0:
            return "the day stated is incorrect"
        #month check
        if month > 12 or month < 0:
            return "the month stated is incorrect"
        #year check
        if year > 2025 or year < 1900 and year > 99:
            return "the year stated is incorrect"
        if year < 100 and year >= 0:
            year = 2000 + year

            #now we check the amount
        #an error message
        transaction_fails = " this transaction is to much "
        if amount < 0:
            # makes amount positive
            amount * -1

        if category == False and amount > acount_balance:
            return transaction_fails

        elif category == False:
            # subtracts the amount by the balance
            acount_balance -= amount

            # adds this to the list of expenses
            acount_expense.append(amount)
            acount_expense.sort()

        elif category == True and amount > 2000:
            return transaction_fails

        else:  
            # adds the amount to the balance
            acount_balance += amount

            # adds this to the list of incomes
            acount_income.append(amount)
            acount_income.sort()

            # converst the date to a string
            
        date = str(month) + "/" + str(day) + "/" + str(year)
        dates.update({"date": amount})
            #returns a date in the form of a string
        return date
# transaction 

# uses the lists acount_expense and acount_income to form a summary
    def summaries():
        
        income = acount_income
        expense = acount_expense

            #income portion start
        income.sort()
        # need to use a for loop to see how many in a list are greater than a sertent num
        large_in = [i for i in income if i>1000]
        
        num_large_income = len(large_in)
        num_small_income = len(income) - len(large_in)

        income_num = len(income)
            #income portion end

            #expense portion start
        large_ex = [i for i in expense if i>1000]
       
        num_large_expense = len(large_ex)
        num_small_expense = len(expense) - len(large_ex)

        expense_num = len(expense)
            #expense portion end

        summary = '''
        summary
        there were ''' + str(income_num) + ''' incomes
        there were ''' + str(num_large_income) + ''' incomes that exceded $1000 
        there were  '''  + str(num_small_income) +  ''' incomes that are below $1000
        there were ''' + str(expense_num) + ''' expenses
        there were ''' + str(num_large_expense) + ''' expenses that exceded $1000 
        there were  '''  + str(num_small_expense) +  ''' expenses that are below $1000
         ''' 
        return summary
# uses the lists acount_expense and acount_income to form a summary