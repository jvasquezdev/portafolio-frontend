import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio centralizado Multi-API.
 * Orquesta la comunicación HTTP con los distintos microservicios del portafolio.
 */
@Injectable({
  providedIn: 'root'
})
export class Api {

  private http = inject(HttpClient);

  private aspUrl = 'http://localhost:5000/api';
  private pythonUrl = 'http://localhost:8000/api';
  private laravelUrl = 'http://localhost:8081/api';

  /**
   * Realiza una petición GET al backend de ASP.NET para obtener los datos del perfil.
   * @returns Un flujo observable (Observable) con la respuesta JSON del servidor.
   */
  getProfileFromAsp(): Observable<any> {
    return this.http.get(`${this.aspUrl}/profile`);
  }

  /**
   * Realiza una petición GET al backend de Python para obtener la secuencia matemática.
   * @returns Un flujo observable (Observable) con la serie de Fibonacci en formato JSON.
   */
  getFibonacciFromPython(): Observable<any> {
    return this.http.get(`${this.pythonUrl}/fibonacci`);
  }

  /**
   * Realiza una petición GET al backend de Laravel (Puerto 8081)
   * para obtener la colección de proyectos desde la base de datos MySQL.
   * * @returns {Observable<any>} Un flujo observable que emite la respuesta HTTP
   * conteniendo un objeto JSON con metadatos y el arreglo de proyectos.
   */
  getProjectsFromLaravel(): Observable<any> {
    return this.http.get(`${this.laravelUrl}/projects`);
  }

}
