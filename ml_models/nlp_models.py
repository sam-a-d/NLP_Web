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

        # return a caution text if the input text is not provided e.g. empty string
        if len(self.sentence) <= 0:
            sentimet_result = {'sentiment_class' : 'Please input some text'}
            return sentimet_result
        
        # predict the result according to the value inputed by the user
        res = self.nlp_model.predict([self.sentence])
        
        # create an object consisting of the result and return when it got request
        sentimet_result = {
            'sentiment_class' : res[0]
        }
        
        return sentimet_result
        # return res[0]


    def get_comment_analysis(self, comment):
        
        '''
            this method analyse comments from a specific post
        '''

        self.comments = comment
        if len(self.comments) == 0:
            self.comments = ['যা খুশি করেন']
        res = self.nlp_model.predict(self.comments)
        print(res)
        sentiment_count =  dict(Counter(res))
        
        sentiments = ['positive', 'neutral', 'negative']

        for review in sentiments:
            if review not in sentiment_count.keys():
                sentiment_count[review] = 0
        
        sentiment_count['percent_positive'] =  round(sentiment_count['positive'] * 100 / len(res), 2) 
        sentiment_count['percent_neutral'] =   round(sentiment_count['neutral']  * 100 / len(res), 2) 
        sentiment_count['percent_negative'] =  round(sentiment_count['negative'] * 100 / len(res), 2)
        sentiment_count['all_sentiments'] = list(res)
        return sentiment_count


    def get_bulk_analysis(self, comments):
        
        '''
            this method will analyse bulk comments given by a user (may be they upload a file)
        '''
        pass