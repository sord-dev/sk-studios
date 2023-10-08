import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components'


export default function BookingPreview() {
    return (
        <>
            <Head>
                <title>SK Studios - Booking a session</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </>
    )
}
