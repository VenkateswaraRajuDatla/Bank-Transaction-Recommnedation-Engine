from flask import Flask,render_template,json,request,redirect,session,jsonify,flash
from flask_cors import CORS, cross_origin
import os, sys, time, random, base64
import unpickle as un
import arrangemet as arrange_values
import data_prep as dp
from pprint import pprint
import logging
import pickle
import ast
import pandas as pd
import numpy as np
app = Flask(__name__)

CORS(app, resources={r"*": {"origins": '*'}})
logging.getLogger('flask_cors').level = logging.DEBUG

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/loan_request", methods = ['POST'])
def loan_prediction():
    value = request.get_json()
    new_value = arrange_values.arrangemet(value)
    model = un.unpickle('save.p')
    result = model.predict([new_value])
    print(result)
    return jsonify({'result':result[0]})

@app.route("/bank_request", methods = ['POST'])
def bank_request():
    total_amount = 0
    value = request.get_json()
    file = request.files['file']
    df = dp.process_data(file)
    lst = df['balance']
    model = un.unpickle('gradBoost.p')
    y = model.predict(df)
    new_df = dp.append_dataframe_prediction(df,y)
    plot_result = dp.final_data(new_df)
    for (amount, prediction) in zip(lst, y):
        if prediction == 'yes':
            total_amount = total_amount + amount
    return json.dumps({'result':int(total_amount), 'plot_result':plot_result})





if __name__ == "__main__":
    app.run(debug=True)
