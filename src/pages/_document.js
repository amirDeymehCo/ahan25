import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyleSheetManager
                stylisPlugins={ctx?.locale !== "en" && [stylisRTLPlugin]}
              >
                <App {...props} />
              </StyleSheetManager>
            ),
        });
      const styleTags = sheet.getStyleElement();
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styleTags,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { __NEXT_DATA__ } = this.props;
    const dir = __NEXT_DATA__.locale !== "en" ? "rtl" : "ltr";
    return (
      <Html dir={dir} lang={__NEXT_DATA__.locale}>
        <Head>
          {this.props.styleTags}

          <link
            rel="preload"
            href={"/fonts/IRANYekan/IRANYekanWebExtraBlack.ttf"}
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={"/fonts/IRANYekan/IRANYekanWebExtraBold.ttf"}
            as="font"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href={"/fonts/IRANYekan/IRANYekanWebBold.ttf"}
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={"/fonts/IRANYekan/IRANYekanWebRegular.ttf"}
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={"/fonts/IRANYekan/IRANYekanWebLight.ttf"}
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={"/fonts/BTitr/BTitrBold.ttf"}
            as="font"
            crossOrigin="anonymous"
          />
          <title>آهن</title>
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
