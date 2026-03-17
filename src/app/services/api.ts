import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio centralizado para la comunicación HTTP con el backend.
 */
@Injectable({
  providedIn: 'root'
})
export class Api {

  /** Inyección de la dependencia HttpClient proveída en el DI Container global. */
  private http = inject(HttpClient);

  /** URL base de la API local de desarrollo. */
  private baseUrl = 'http://localhost:8000/api';

  /**
   * Realiza una petición GET para obtener los datos del perfil del portafolio.
   *
   * @returns Un flujo observable (Observable) con la respuesta JSON del servidor.
   */
  getProfileData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }
}
