from django import forms
from .models import Aluno, Plano, Matricula

class AlunoForm(forms.ModelForm):
    class Meta:
        model = Aluno
        fields = '__all__'

class PlanoForm(forms.ModelForm):
    class Meta:
        model = Plano
        fields = '__all__'

class MatriculaForm(forms.ModelForm):
    class Meta:
        model = Matricula
        fields = '__all__'
