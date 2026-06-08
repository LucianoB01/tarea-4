import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Producto, Productos } from '../services/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  imports: [
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos {
  private router = inject(Router)
  productosList: Producto[] = [];

  private productosService = inject(Productos)

  ngOnInit(): void{
    this.cargarProductos()
  }

  cargarProductos():void{
    this.productosList = this.productosService.getProductos()
  }

  agregarProductoSimulado(): void {
    const nombres_ejemplo = [
      'Producto 1',
      'Producto 2',
      'Producto 3'
    ]

    const nombre_aleatorio = nombres_ejemplo[Math.floor(Math.random() * nombres_ejemplo.length)]

    const precio_aleatorio = Math.floor(Math.random() * (1000 - 1) + 1 )
    const stock_aleatorio = Math.floor(Math.random() * (100 - 1) + 1 )

    const producto_simulado: Omit<Producto, 'id'> = {
      nombre: nombre_aleatorio,
      precio: precio_aleatorio,
      stock: stock_aleatorio,
      fechaAlta: new Date()
    }

    this.productosService.addProducto(producto_simulado)
    
    this.cargarProductos()
  }

  eliminarProducto(id: number): void {
    const seElimino = this.productosService.deleteProductoById(id)

    if(seElimino){
      this.cargarProductos()
    }
  }

  verDetalleProducto(id: number): void {
    this.router.navigateByUrl('productos/' + id)
  }
}
