import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';
import { Chart, registerables } from 'chart.js';

// Registramos todos los componentes internos de Chart.js
Chart.register(...registerables);

/**
 * Componente principal (Root Component) de la aplicación.
 * Gestiona la interfaz gráfica y la orquestación de llamadas a las diferentes APIs.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  public title = 'Arquitectura Multi-API: Portafolio';
  public activeBackend: string = 'ASP.NET';
  public responseData: any = null;
  public isLoading: boolean = true;

  /** Referencia a la instancia activa del gráfico para evitar duplicados en el DOM. */
  public chartInstance: any = null;

  private api = inject(Api);

  ngOnInit(): void {
    this.loadAspData();
  }

  loadAspData(): void {
    this.isLoading = true;
    this.activeBackend = 'ASP.NET';
    this.destroyChart();

    this.api.getProfileFromAsp().subscribe({
      next: (response) => {
        this.responseData = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error conectando con el servicio ASP.NET:', err);
        this.isLoading = false;
      }
    });
  }

  loadPythonData(): void {
    this.isLoading = true;
    this.activeBackend = 'Python';
    this.destroyChart();

    this.api.getFibonacciFromPython().subscribe({
      next: (response) => {
        this.responseData = response;
        this.isLoading = false;

        // AJUSTE 1: Subimos a 50ms para garantizar que el navegador ya dibujó físicamente el canvas
        setTimeout(() => this.renderChart(response.data), 50);
      },
      error: (err) => {
        console.error('Error conectando con el servicio Python:', err);
        this.isLoading = false;
      }
    });
  }

  private renderChart(data: any[]): void {
    const canvas = document.getElementById('fibonacciChart') as HTMLCanvasElement;
    if (!canvas) return;

    // AJUSTE 2: Limpiamos el registro interno profundo de Chart.js usando el ID.
    // Esto asegura que no haya "fantasmas" bloqueando el nuevo renderizado.
    const existingChart = Chart.getChart('fibonacciChart');
    if (existingChart) {
      existingChart.destroy();
    }

    const labels = data.map(item => `Iteración ${item.iteration}`);
    const values = data.map(item => item.value);

    this.chartInstance = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Crecimiento de Fibonacci',
          data: values,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66, 165, 245, 0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }

  private destroyChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }
  }
}
