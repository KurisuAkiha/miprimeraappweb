        'use client';

        import { useState } from 'react';
        import Image from 'next/image';
        import './tarjetaproducto.css';

        export default function TarjetaProducto({ producto }) {
            const [agregado, setAgregado] = useState(false);

            return (
                <article className="tarjeta">
                    {producto.Imagen && (
                        <div className="imagen">
                            <Image
                                src={producto.Imagen}
                                alt={producto.Nombre}
                                width={170}
                                height={200}
                            />
                        </div>
                    )}

                    <h2>{producto.Nombre}</h2>

                    <p>{producto.Descripción}</p>

                    <p className="precio">
                        ${producto.Precio}
                    </p>

                    <button
                        type="button"
                        onClick={() => setAgregado(!agregado)}
                    >
                        {agregado
                            ? 'Quitar del carrito'
                            : 'Agregar al carrito'}
                    </button>
                </article>
            );
        }