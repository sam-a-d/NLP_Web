from sklearn import feature_extraction
import joblib
import pandas as pd
from collections import Counter
from django.http import HttpResponse


class Sentiment_analysis:
    
    nlp_model = joblib.load('static/nlp/trained_models/nlp_model.joblib')
   
    def get_sentence_analysis(self, sentence):
        
        '''
            this method analyse sentence from user input
        '''
        self.sentence = sentence
        res = self.nlp_model.predict([self.sentence])
        
        return res[0]


    def get_comment_analysis(self, comment):
        
        '''
            this method analyse comments from a specific post
        '''

        self.comments = comment
        res = self.nlp_model.predict(self.comments)
        sentiment_count =  Counter(res)
        return dict(sentiment_count)


    def get_bulk_analysis(self, comments):
        
        '''
            this method will analyse bulk comments given by a user (may be they upload a file)
        '''
        pass