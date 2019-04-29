import pandas as pd
import numpy as np
import os


def process_data(file):
    df = pd.read_csv(file)
    return df

def append_dataframe_prediction(df, array):
    df['prediction'] = pd.Series(array)
    new_df = df.loc[df['prediction']=='yes']
    return new_df

def data_plot(df,cat_dictionary, col_name):
    result_job = dict()
    for i in cat_dictionary.keys():
        result_job[cat_dictionary[i]] = df[df[col_name] == int(i)]['balance'].sum()
    return result_job


def final_data(df):
    data_dict = plot_result = dict()
    data_dict['job'] = {'0':'Admin', '1':'Blue Collar', '2': 'Enterprenuer', '4': 'Management', '5':'Retired','6':'Self-Employed', '7':'Services', '8':'Student', '9':'Technician','10':'Unemployed','11':'Unknown'}
    data_dict['month'] = {'4':'January','1':"August", '10':'October', '5':'July', '8':'May', '6':'December', '3':'February', '7':'March','9':'November', '10':'September', '0':'April'}
    for i in data_dict.keys():
        plot_result[i] = data_plot(df,data_dict[i],i)
    plot_result['age'] = age_differentialtion(df)
    return plot_result

def age_differentialtion(df):
    result_age = dict()
    for i in range(10,90,10):
        result_age[i+10] = df.loc[(df['age']>=i) & (df['age']<i+10),'balance'].sum()
    return result_age
