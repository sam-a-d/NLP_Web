from django import forms 

class Sentiment_form(forms.Form):
    sentiment = forms.CharField(max_length=1000, widget=forms.TextInput(attrs={'class': 'form-control form-control-lg mb-4'}))

