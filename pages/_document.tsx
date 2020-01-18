import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="viewport" />
          <link rel="shortcut icon" href="/img/logo.png" key="shortcutIcon" />
          <meta name="theme-color" content="#5D9FFF" key="themeColor" />
          <meta name="description" content="João 8:13" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;