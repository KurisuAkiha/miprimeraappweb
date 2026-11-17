'use client';

import { useActionState } from 'react';
import { login } from './actions';
import './login.css';

export default function LoginPage() {
    const [estado, accion, pendiente] = useActionState(login, null);

    return (
        <section className="login-contenedor">
            <div className="login-tarjeta">
                <h1 className="login-titulo">Iniciar sesión</h1>
                <p className="login-subtitulo">Ingresa tus datos para continuar</p>

                <form action={accion} className="login-form">
                    <div className="login-campo">
                        <label htmlFor="email">Correo</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tucorreo@ejemplo.com"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="login-campo">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    {estado?.error && (
                        <p className="login-error">{estado.error}</p>
                    )}

                    <button
                        type="submit"
                        className="login-boton"
                        disabled={pendiente}
                    >
                        {pendiente ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </section>
    );
}