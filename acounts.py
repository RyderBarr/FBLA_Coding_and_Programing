
# a class that is used to exicute and keep 
# track of the acounts transactions 
# including information like the amount, 
# category, and date 
#   |
#   V
class transaction:
    #first: transaction information

    # Whether the transaction is a withdraw or deposite V 
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

    #second:functions
    #
    def date_tostring(day, month, year):

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
    
# a class that has all the acount information 
# such as acount name, balance, acount_income, acount_expense
#   |
#   V
class acount_class:
    # first: acount information

    # the name of the person who made the account V
    acount_name = ""

    # the current balance of the account V
    acount_balance = 0.00

    # all income of the account V
    acount_income = [0, 0, 0]

    # every expense of the account V
    acount_expense = [0, 0, 0]

    # will save the date of a transaction 
    # share the same variable as in the acount_transaction class V
    acount_transaction_date = ""
    
    # second:functouns
    # user will input a list of the incomes
    # user will input a list of expenses 
    # the user will input a date V
    def daily_summaries(income,expense,date):
        large_income = 1000
        small_income = 0
        num_large_income = income.count(large_income)
        num_small_income = income.cont(0-999)
        income_num = income.index()


        summary = """"""
        return summary
    
    # user will input a inital date(i_date)
    # user will input a final date(f_date) V
    def weekly_summaries(income,expense, i_date, f_date):
        summary = ""
        return summary
    
    # user will input a inital date(i_date)
    # user will input a final date(f_date) V
    def monthly_summaries(income,expense, i_date, f_date):
        summary = """

"""
        return summary
    
    # user will input a inital date(i_date)
    # user will input a final date(f_date) V
    def yearly_summaries(income,expense, i_date, f_date):
        summary = ""
        return summary