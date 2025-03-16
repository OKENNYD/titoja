"use server";
import Data from "./Data"
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
  const currentProduct = await response.json()
  const data = currentProduct.filter(_ => _.id == slug[0])
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    title: data[0].name,
    description: data[0].description,
    icons: {
      icon: data[0].image,
      shortcut: "titoja",
      apple: data[0].image,
      other: {
        rel: "apple-touch-icon-precomposed",
        url: data[0].image,
      },
    },
    manifest: "/manifest.json",
    openGraph: {
      title: data[0].name,
      description: data[0].description,
      url: "",
      siteName: "Titoja",
      images: [
        {
          url: data[0].image, // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: data[0].image, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: data[0].name,
        },
      ],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "titoja",
      title: data[0].name,
      description: data[0].description,
      siteId: data[0].id,
      creator: "Fixxage technologies",
      creatorId: 6,
      images: {
        url: data[0].image,
        alt: data[0].name,
      },
      // app: { 
      //   name: "Titoja",
      //   id: {
      //     iphone: "Titoja://iphone",
      //     ipad: "Titoja://ipad",
      //     googleplay: "Titoja://googleplay",
      //   },
      //   url: {
      //     iphone: "https://iphone_url",
      //     ipad: "https://ipad_url",
      //   },
      // },
    },
  };
}

export default async function Item({ params }) {
  const { slug } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
  const currentProduct = await response.json()
  const productResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
  const product = await productResponse.json()
  const data = currentProduct.filter(_ => _.id == slug[0])
  return (
    <div>
      <Data id={slug[0]} current={data[0]} products={product} />
    </div>
  );
}