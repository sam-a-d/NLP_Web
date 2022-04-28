from django.shortcuts import render
from django.http import HttpResponse

from .forms import Sentiment_form
from ml_models.nlp_models import predict_sentiment

# Create your views here.
def home(request):
    if request.method == "POST":

        form = Sentiment_form(request.POST)

        if form.is_valid():
            sentiment = form.cleaned_data['sentiment']
  
            res = predict_sentiment(sentiment)

            contexts = {
                'result': res,
                'input' : sentiment
            }

            return render(request, 'result.html', {'contexts': contexts}) 

    else:
        form = Sentiment_form()
        return render(request, 'index.html', {'form':form})