import Head from "next/head"
import { MetaData } from "@/models/MetaData"

type CustomHeadProps = {
    pageMetaData: MetaData
}

const CustomHead = ({pageMetaData}: CustomHeadProps) => {
    const pmd = pageMetaData;

    return (
        <Head>
            <title>{pmd.title}</title>
            <link rel="canonical" href={pmd.url}/>
            <meta name="description" content={pmd.description} />
            <meta property="og:description" content={pmd.description} />
            <meta property="og:image" content={pmd.image} />
            <meta property="og:image:alt" content={pmd.imageAlt} />
            <meta property="og:site_name" content={pmd.siteName} />
            <meta property="og:title" content={pmd.title} />
            <meta property="og:type" content={pmd.type} />
            <meta property="og:url" content={pmd.url} />
            <meta name="twitter:card" content={pmd.twitterCard} />
            <meta name="twitter:description" content={pmd.description} />
            <meta name="twitter:image" content={pmd.image} />
            <meta name="twitter:title" content={pmd.title} />
        </Head>
    )
}

export default CustomHead