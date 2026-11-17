"use client";
import { useState } from "react";
import "./contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="contact-wrapper">
      <form className="contact-card" onSubmit={handleSubmit}>
        <h1>Contacto</h1>
        <p className="subtitle">Escríbenos y te responderemos pronto</p>

        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          value={form.correo}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          placeholder="Escribe tu mensaje..."
          value={form.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}