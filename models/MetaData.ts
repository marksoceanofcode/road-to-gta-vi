export interface MetaData {
    description: string //Description of the page, also shown in SEO previews
    image: string //Image displayed when site/page is shared
    imageAlt: string //Alt text for the image
    siteName: string //Name of the site
    title: string //Title of the page found in the browsers tab
    twitterCard: string //summary, summary_large_image, app, player
    type: string //type | Ex: website
    url: string //The cannaicol URL so SEO engines know what URL to use preceisly Ex. https://mysite.com vs http://mysite.com
}