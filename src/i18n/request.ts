'use server'
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
    const cookieStore = await cookies();

    let locale = 'en';

    const languageCookie = cookieStore.get('language')?.value;
    if (languageCookie === 'ar') {
        locale = 'ar';
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});