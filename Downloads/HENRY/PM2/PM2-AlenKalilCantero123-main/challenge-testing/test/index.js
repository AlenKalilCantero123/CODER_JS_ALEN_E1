// index.js
class CarritoCompra {
    constructor() {
      this.listaDeCompras = [];
    }
  
    agregarProducto(producto) {
      this.listaDeCompras.push(producto);
    }
  
    calcularTotal() {
      return this.listaDeCompras.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    }
  
    aplicarDescuento(descuentoPorcentaje) {
      const total = this.calcularTotal();
      const descuento = (total * descuentoPorcentaje) / 100;
      return total - descuento;
    }
  }
  
  module.exports = CarritoCompra;
  