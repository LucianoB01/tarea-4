import { Component } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Administrador' },
    { id: 2, nombre: 'Ana Gómez', email: 'ana@example.com', rol: 'Editor' },
    { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@example.com', rol: 'Espectador' }
  ];

  eliminarUsuario(id: number): void {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }

  agregarUsuarioSimulado(): void {
    const nuevoId = this.usuarios.length > 0 
      ? Math.max(...this.usuarios.map(u => u.id)) + 1 
      : 1;
      
    this.usuarios.push({
      id: nuevoId,
      nombre: `Nuevo Usuario ${nuevoId}`,
      email: `usuario${nuevoId}@example.com`,
      rol: 'Espectador'
    });
  }
}
