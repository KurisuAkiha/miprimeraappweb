'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createClient } from '../lib/supServer';

export async function login(estadoPrevio, formData) {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (error) {
        return { error: 'Correo o contraseña incorrectos' };
    }

    revalidatePath('/', 'layout');
    redirect('/productos');
}

export async function logout() {
    const supabase = await createClient();

    await supabase.auth.signOut({ scope: 'local' });

    revalidatePath('/', 'layout');
    redirect('/login');
}