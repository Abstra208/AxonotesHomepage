import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const id = formData.get('id');

    if (typeof email !== 'string' || !email.trim()) {
        return Response.json({ message: 'Email is required' }, { status: 400 });
    }

    if (typeof id !== 'string' || !id.trim()) {
        return Response.json({ message: 'Unsubscribe ID is required' }, { status: 400 });
    }

    // Unsubscribe contact from mailing list
    const { data: contactData, error: contactError } = await resend.contacts.update({
        email,
        unsubscribed: true,
        properties: {
            unsubscribe_id: '',
        },
    });

    const { data: contactProperties } = await resend.contacts.get({
        email
    });

    const lang = contactProperties?.properties?.lang;
    const langPrefix = typeof lang === 'string' && lang !== 'en' ? `/${lang}` : '';
    return Response.redirect(new URL(`${langPrefix}/unsubscribe/success`).toString());
}