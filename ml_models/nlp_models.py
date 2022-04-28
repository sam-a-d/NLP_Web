from sklearn import feature_extraction
import joblib
import pandas as pd

from django.http import HttpResponse


def predict_sentiment(text):

    nlp_model = joblib.load('static/nlp/trained_models/nlp_model.joblib')
  
    test_data = [text]
    res = nlp_model.predict(test_data)
    
    return res[0]