from django.shortcuts import render, redirect, get_object_or_404
from .models import Aluno, Plano, Matricula
from .forms import AlunoForm, PlanoForm, MatriculaForm

def aluno_list(request):
    alunos = Aluno.objects.all()
    return render(request, 'aluno_list.html', {'alunos': alunos})

def aluno_form(request, id=None):
    aluno = get_object_or_404(Aluno, pk=id) if id else None
    form = AlunoForm(request.POST or None, instance=aluno)
    if form.is_valid():
        form.save()
        return redirect('aluno_list')
    return render(request, 'aluno_form.html', {'form': form})

def aluno_delete(request, id):
    aluno = get_object_or_404(Aluno, pk=id)
    aluno.delete()
    return redirect('aluno_list')

def plano_list(request):
    planos = Plano.objects.all()
    return render(request, 'plano_list.html', {'planos': planos})

def plano_form(request, id=None):
    plano = get_object_or_404(Plano, pk=id) if id else None
    form = PlanoForm(request.POST or None, instance=plano)
    if form.is_valid():
        form.save()
        return redirect('plano_list')
    return render(request, 'plano_form.html', {'form': form})

def plano_delete(request, id):
    plano = get_object_or_404(Plano, pk=id)
    plano.delete()
    return redirect('plano_list')

def matricula_list(request):
    matriculas = Matricula.objects.select_related('aluno', 'plano')
    return render(request, 'matricula_list.html', {'matriculas': matriculas})

def matricula_form(request, id=None):
    matricula = get_object_or_404(Matricula, pk=id) if id else None
    form = MatriculaForm(request.POST or None, instance=matricula)
    if form.is_valid():
        form.save()
        return redirect('matricula_list')
    return render(request, 'matricula_form.html', {'form': form})

def matricula_delete(request, id):
    matricula = get_object_or_404(Matricula, pk=id)
    matricula.delete()
    return redirect('matricula_list')
