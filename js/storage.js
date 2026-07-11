//Este archivo va a unificar las funciones de persistencia del carrito

const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};
