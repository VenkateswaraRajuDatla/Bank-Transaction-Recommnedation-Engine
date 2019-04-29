import os, sys, time, random, base64

#
# {'applicant_income': '100000',
#  'co_applicant_income': '0',
#  'creditHistory': 1,
#  'dependents': 0,
#  'education': 1,
#  'gender': 1,
#  'loanAmountTerm': '60',
#  'loan_amount': '1000000',
#  'married': 0,
#  'property_area': 1,
#  'self_employed': 1}




def arrangemet(values):
    expected_keys = ['gender','married','dependents','education','self_employed','applicant_income','co_applicant_income','loan_amount','loanAmountTerm','creditHistory','property_area' ]
    new_value = list()
    for i in expected_keys:
        new_value.append(values.get(i,0))
    return new_value
