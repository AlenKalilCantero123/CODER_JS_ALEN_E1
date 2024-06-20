const CarritoCompra = require("../test/index");

let nuevoCarrito;
let nuevoProducto;

beforeEach(() => {
  nuevoCarrito = new CarritoCompra();
  nuevoProducto = {
    nombre: "TV",
    precio: 123,
    cantidad: 4
  };
});

describe("Class CarritoCompra", () => {
  it("el carrito de compra debe existir", () => {
    expect(typeof CarritoCompra).toBe("function");
    expect(CarritoCompra).toBeDefined();
    expect(CarritoCompra).toBeInstanceOf(Function);
  });

  it("puedo crear una nueva instancia de CarritoCompra", () => {
    const nuevoCarrito = new CarritoCompra();
    expect(nuevoCarrito).toBeInstanceOf(CarritoCompra);
  });

  it("la clase CarritoCompra debe tener los siguientes métodos:", () => {
    expect(CarritoCompra.prototype.constructor).toBeDefined();
    expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
    expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
    expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
  });

  describe("Constructor:", () => {
    it("debe inicializar el carrito como un array vacío", () => {
      const nuevoCarrito = new CarritoCompra();
      expect(nuevoCarrito.listaDeCompras).toEqual([]);
    });
  });

  describe("agregarProducto", () => {
    it("recibe un objeto producto y lo agrega al carrito", () => {
      nuevoCarrito.agregarProducto(nuevoProducto);
      expect(nuevoCarrito.listaDeCompras).toEqual([nuevoProducto]);
      expect(nuevoCarrito.listaDeCompras.length).toBe(1);
    });

    it("recibe muchos objetos producto y los agrega al carrito", () => {
      const arrayProductos = [
        { nombre: "TV", precio: 123, cantidad: 4 },
        { nombre: "TV2", precio: 2222, cantidad: 3 },
        { nombre: "TV3", precio: 3333, cantidad: 4 },
        { nombre: "TV4", precio: 4444, cantidad: 5 }
      ];

      arrayProductos.forEach(producto => nuevoCarrito.agregarProducto(producto));

      expect(nuevoCarrito.listaDeCompras).toEqual(arrayProductos);
      expect(nuevoCarrito.listaDeCompras.length).toBe(4);
      expect(nuevoCarrito.listaDeCompras).toContainEqual({
        nombre: "TV3",
        precio: 3333,
        cantidad: 4
      });
      expect(nuevoCarrito.listaDeCompras).toContainEqual({
        nombre: "TV4",
        precio: 4444,
        cantidad: 5
      });
    });
  });

  describe("calcularTotal", () => {
    it("debe calcular el total de compra sumando los precios de los productos en el carrito", () => {
      const arrayProductos = [
        { nombre: "TV", precio: 100, cantidad: 4 },
        { nombre: "TV2", precio: 200, cantidad: 3 },
        { nombre: "TV3", precio: 100, cantidad: 4 },
        { nombre: "TV4", precio: 200, cantidad: 5 }
      ];

      arrayProductos.forEach(producto => nuevoCarrito.agregarProducto(producto));
      expect(nuevoCarrito.calcularTotal()).toBe(2400); // Corregido el valor esperado
    });
  });

  describe("aplicarDescuento", () => {
    it("aplica un descuento según el % especificado", () => {
      const arrayProductos = [
        { nombre: "TV", precio: 100, cantidad: 4 },
        { nombre: "TV2", precio: 200, cantidad: 3 },
        { nombre: "TV3", precio: 100, cantidad: 4 },
        { nombre: "TV4", precio: 200, cantidad: 5 }
      ];

      arrayProductos.forEach(producto => nuevoCarrito.agregarProducto(producto));

      expect(nuevoCarrito.aplicarDescuento(0)).toBe(2400); // Corregido el valor esperado
      expect(nuevoCarrito.aplicarDescuento(10)).toBe(2160); // Corregido el valor esperado
      expect(nuevoCarrito.aplicarDescuento(50)).toBe(1200); // Corregido el valor esperado
      expect(nuevoCarrito.aplicarDescuento(100)).toBe(0); // Corregido el valor esperado
    });
  });
});

