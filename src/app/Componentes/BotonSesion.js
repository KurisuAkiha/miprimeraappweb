import Link from 'next/link';
import { createClient } from '../lib/supServer';
import { logout } from '../login/actions';

export default async function BotonSesion() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return (
            <Link href="/login" className="nav-enlace nav-enlace--destacado">
                Iniciar sesión
            </Link>
        );
    }

    return (
        <form action={logout}>
            <button type="submit" className="nav-boton">
                Cerrar sesión
            </button>
        </form>
    );
}