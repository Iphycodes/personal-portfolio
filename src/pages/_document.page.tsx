import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Palanquin&family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Jost&family=Palanquin&display=swap" rel="stylesheet"></link> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@800&family=Palanquin&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Jost:wght@800&family=Joti+One&family=Palanquin&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
