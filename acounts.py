
# feeling cute might delete later :)
# a class that is used to exicute and keep 
# track of the acounts transactions 
# including information like the amount, 
# category, and date 
#   |
#   V
class transaction:
#transaction information

        # Whether the transaction is a withdraw or deposite
        # true is deposite V 
    transaction_category = True

        # the amount of money withdrew or deposited with a transaction V
    transaction_amount = 0.00

        # will save the date of a transaction V
    transaction_date = ""

        # the day that a transaction has happened 1-2 digit V
    transaction_day = 0

        # the day that a transaction has happened 1-2 digit V
    transaction_month = 00

        # the day that a transaction has happened 2 or 4 digit
        # if its 2 digit we assume that it is the 2000's V
    transaction_year = 0000

#transaction information

# transaction constroctor
    def transaction(category, amount, day, month, year):
        transaction_category = category
        transaction_amount = amount
        transaction_day = day
        transaction_month = month
        transaction_year = year
# transaction constroctor

#functions

#converts an imputed date to a string
    def date_to_string():
        day = transaction_day
        month = transaction_month
        year = transaction_year
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

            # converst the date to a string
        date = str(month) + "/" + str(day) + "/" + str(year)

            #assighns the day, month, and year to there class conterpars 
        transaction_day = day
        transaction_month = month
        transaction_year = year
        transaction_date = date

            #returns a date in the form of a string
        return date
#converts an imputed date to a string

    # a class that has all the acount information 
    # such as acount name, balance, acount_income, acount_expense
    #   |
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

 #acount information

#acount_class constrocter
    def acount_class(name, balance, income, expense, date):    
        acount_name = name
        acount_balance = balance
        acount_income = income
        acount_expense = expense
        acount_date = date
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
            acount_expense.insert(amount)
            acount_expense.sort()

        elif category == True and amount > 2000:
            return transaction_fails

        else:  
            # adds the amount to the balance
            acount_balance += amount

            # adds this to the list of incomes
            acount_income.insert(amount)
            acount_income.sort()

            # converst the date to a string
        date = str(month) + "/" + str(day) + "/" + str(year)

            #returns a date in the form of a string
        return date
# transaction 

# uses the lists acount_expense and acount_income to form a summary
    def daily_summaries():
        
        income = acount_income
        expense = acount_expense

            #income portion start
        large_income = 1000
       
        num_large_income = income.count(large_income)
        num_small_income = income.count() - income.count(large_income)

        income_num = income.count()
            #income portion end

            #expense portion start
        large_expense = 1000
       
        num_large_expense = expense.count(large_expense)
        num_small_expense = expense.count() - expense.count(large_expense)

        expense_num = expense.count()
            #expense portion end

        summary = """ daily summary
        there were """ + str(income_num) + incomes"""
        there were """ + str(num_large_income) + """ incomes that exceded $1000 
        there were  """  + str(num_small_income) +  """ incomes that are below $1000
        there were """ + str(expense_num) + expenses"""
        there were """ + str(num_large_expense) + """ expenses that exceded $1000 
        there were  """  + str(num_small_expense) +  """ expenses that are below $1000
         """ 
        return summary
    
    
    def weekly_summaries():

        income = acount_income
        expense = acount_expense

            #income portion start
        large_income = 1000
       
        num_large_income = income.count(large_income)
        num_small_income = income.count() - income.count(large_income)

        income_num = income.count()
            #income portion end

            #expense portion start
        large_expense = 1000
       
        num_large_expense = expense.count(large_expense)
        num_small_expense = expense.count() - expense.count(large_expense)

        expense_num = expense.count()
            #expense portion end

        summary = """ weekly summary
        there were """ + str(income_num) + incomes"""
        there were """ + str(num_large_income) + """ incomes that exceded $1000 
        there were  """  + str(num_small_income) +  """ incomes that are below $1000
        there were """ + str(expense_num) + expenses"""
        there were """ + str(num_large_expense) + """ expenses that exceded $1000 
        there were  """  + str(num_small_expense) +  """ expenses that are below $1000
         """ 
        return summary
    
    
    def monthly_summaries():

        income = acount_income
        expense = acount_expense

            #income portion start
        large_income = 1000
       
        num_large_income = income.count(large_income)
        num_small_income = income.count() - income.count(large_income)

        income_num = income.count()
            #income portion end

            #expense portion start
        large_expense = 1000
       
        num_large_expense = expense.count(large_expense)
        num_small_expense = expense.count() - expense.count(large_expense)

        expense_num = expense.count()
            #expense portion end

        summary = """ monthly summary
        there were """ + str(income_num) + incomes"""
        there were """ + str(num_large_income) + """ incomes that exceded $1000 
        there were  """  + str(num_small_income) +  """ incomes that are below $1000
        there were """ + str(expense_num) + expenses"""
        there were """ + str(num_large_expense) + """ expenses that exceded $1000 
        there were  """  + str(num_small_expense) +  """ expenses that are below $1000
         """ 
        return summary
    
    def yearly_summaries():

        income = acount_income
        expense = acount_expense

            #income portion start
        large_income = 1000

        num_large_income = income.count(large_income)
        num_small_income = income.count() - income.count(large_income)

        income_num = income.count()
            #income portion end

            #expense portion start
        large_expense = 1000
       
        num_large_expense = expense.count(large_expense)
        num_small_expense = expense.count() - expense.count(large_expense)

        expense_num = expense.count()
            #expense portion end

        summary = """ yearly summary
        there were """ + str(income_num) + incomes"""
        there were """ + str(num_large_income) + """ incomes that exceded $1000 
        there were  """  + str(num_small_income) +  """ incomes that are below $1000
        there were """ + str(expense_num) + expenses"""
        there were """ + str(num_large_expense) + """ expenses that exceded $1000 
        there were  """  + str(num_small_expense) +  """ expenses that are below $1000
         """ 
        return summary
# uses the lists acount_expense and acount_income to form a summary