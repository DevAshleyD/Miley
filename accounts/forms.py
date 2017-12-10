from django import forms

class SignupForm(forms.Form):
    profile_type = forms.CharField(widget=forms.Select(choices=(
        (0, 'User'),
        (1, 'Perfomer'),
        (2, 'Studio'),
    )))
    username = forms.CharField()
    email = forms.CharField(widget=forms.EmailInput)
    password = forms.CharField(widget=forms.PasswordInput)

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
