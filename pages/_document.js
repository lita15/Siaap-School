import React from "react";
import { Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <div>
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/{name}.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    </div>
  );
};

export default Document;
