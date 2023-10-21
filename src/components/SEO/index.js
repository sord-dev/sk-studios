import Head from 'next/head';

export const SEO = ({ title, description, ogImage = "/sk-logo-bg.png", ogUrl = "http://localhost:3000" }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/sk-logo-bg.png" />
            {/* Open Graph meta tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} /> {/* URL to the image you want to display */}
            <meta property="og:url" content={ogUrl} /> {/* URL of the page being shared */}
            <meta property="og:type" content="website" />
        </Head>
    );
};
