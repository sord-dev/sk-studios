import Head from 'next/head';

export const SEO = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/sk-logo-bg.png" />
        </Head>
    );
};
