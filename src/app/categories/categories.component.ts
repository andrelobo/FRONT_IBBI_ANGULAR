import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryForm: FormGroup;
  error: string = ''; // Inicializando a propriedade 'error'

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      // Simulação do envio do formulário (substitua com a lógica real)
      console.log('Formulário válido. Enviando dados...', this.categoryForm.value);
      this.error = ''; // Limpar qualquer erro anterior
    } else {
      // Exibir mensagem de erro se o formulário for inválido
      this.error = 'Por favor, preencha todos os campos corretamente.';
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.categoryForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Campo obrigatório';
    }
    // Adicione mais validações conforme necessário
    return '';
  }
}
