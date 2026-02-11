import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const lang = formData.get('lang');

    if (typeof email !== 'string' || !email.trim()) {
        return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const unsubscribeId = crypto.randomUUID();

    // Add contact to mailing list
    const { data: contactData, error: contactError } = await resend.contacts.create({
        email: email.trim(),
        unsubscribed: false,
        properties: {
            unsubscribe_id: unsubscribeId,
            lang: typeof lang === 'string' ? lang.trim() : 'en',
        },
    });

    // Send the confirmation email
    const { data: emailData, error: emailError } = await resend.emails.send({
        to: [email.trim()],
        template: {
            id: 'welcome-onboarding',
            variables: {
                email: email.trim(),
                id: unsubscribeId,
            },
        },
    });

    if (emailError) {
        const errorMessage = emailError.message ?? 'Unknown error';
        return Response.redirect(`/subscribe/error?error=${encodeURIComponent(errorMessage)}`);
    }

    if (contactError) {
        const errorMessage = contactError.message ?? 'Unknown error';
        return Response.redirect(`/subscribe/error?error=${encodeURIComponent(errorMessage)}`);
    }
    return Response.redirect('/subscribe/success');
}