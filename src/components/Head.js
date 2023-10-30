import Head from "next/head";
/**
 * 
 * @param {string} param0 
 * @returns {component}
 * @author sayyid salim <mohsalim951@gmail.com>
 */
const HeadComponents = ({ title, description, image ,url}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og::title"
        content="how to become an SEO Expert (8 steps)"
      />
      <meta
        property="og::description"
        content="get from SEO newbie to SEO pro in 8 simple steps"
      />
      <meta property="org::image" content={image} />
      <meta property="og::ulr" content={url} />
      <meta property="og::type" content="article" />
      <meta property="og::locale" content="id-ID" />
      <meta property="twitter:card" content="@summary" />
      <meta property="twitter:site" content="@nytimesbits" />
      <meta property="twitter:creator" content="@nickbilton" />
    </Head>
  );
};
export default HeadComponents;
