from django.urls import path
from . import views

urlpatterns = [
    path('', views.aluno_list, name='aluno_list'),
    path('aluno/', views.aluno_list, name='aluno_list'),
    path('aluno/novo/', views.aluno_form, name='aluno_create'),
    path('aluno/<int:id>/editar/', views.aluno_form, name='aluno_update'),
    path('aluno/<int:id>/excluir/', views.aluno_delete, name='aluno_delete'),

    path('plano/', views.plano_list, name='plano_list'),
    path('plano/novo/', views.plano_form, name='plano_create'),
    path('plano/<int:id>/editar/', views.plano_form, name='plano_update'),
    path('plano/<int:id>/excluir/', views.plano_delete, name='plano_delete'),

    path('matricula/', views.matricula_list, name='matricula_list'),
    path('matricula/novo/', views.matricula_form, name='matricula_create'),
    path('matricula/<int:id>/editar/', views.matricula_form, name='matricula_update'),
    path('matricula/<int:id>/excluir/', views.matricula_delete, name='matricula_delete'),
]
