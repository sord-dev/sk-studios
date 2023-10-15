import styles from '@/styles/Home.module.css'
import { Footer, Gallery, Hero, SEO, Services } from '@/components'

import services from '../config/services.json'
import galleryItems from '../config/gallary.json'

export default function Home() {
  return (
    <>
      <SEO title="SK Studios" description="Your custom description here." />

      <Hero />

      <main className={`${styles.container}`}>
        <Services {...{ data: services }} />
        <Gallery pictures={galleryItems} />
      </main>

      <Footer />
    </>
  )
}
