import Head from 'next/head';
import Script from 'next/script';

export function GoogleAnalytics(props) {
    return (
        <>
            <Head>
                <script
                    async
                    src={
                        'https://www.googletagmanager.com/gtag/js?id=' +
                        props.trackingId
                    }
                    key="google-analytics"
                ></script>
            </Head>
            <Script
                id="google-analytics-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', '${props.trackingId}');
                    `,
                }}
            />
        </>
    );
}
