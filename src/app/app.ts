import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';

/**
 * Componente principal (Root Component) de la aplicación.
 * Actúa como el layout maestro o "Shell" donde el Router inyectará las vistas secundarias.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  /** Título principal de la aplicación vinculado a la vista. */
  public title = 'Mi Portafolio Profesional';

  /** * Estado local para almacenar la respuesta del backend.
   * Inicializado en null para manejar el estado de carga en el Template.
   */
  public profileData: any = null;

  /** Inyección del servicio de datos proveído en el DI Container. */
  private api = inject(Api);

  /**
   * Hook del ciclo de vida (Lifecycle Hook) que se ejecuta tras la inicialización del componente.
   * Ideal para realizar llamadas HTTP iniciales sin bloquear el renderizado de la vista.
   */
  ngOnInit(): void {
    this.api.getProfileData().subscribe({
      next: (response) => {
        console.log('Datos recibidos del backend:', response);
        this.profileData = response;
      },
      error: (err) => {
        console.error('Error HTTP:', err);
      }
    });
  }
}
