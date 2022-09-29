import Head from "next/head"
import siteTitle from "../lib/statics"

function Layout({children}) {
    return (
        <div>
            <Head>
                <link rel="icon" hred="/favicon.ico" />
                <meta name="description" content="storybook practice" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default Layout