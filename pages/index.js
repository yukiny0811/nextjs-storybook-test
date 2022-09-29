import Head from 'next/head'
import siteTitle from "../lib/statics"
import { Grid } from '../stories/grid/Grid'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Grid />
      </section>
    </Layout>
  )
}