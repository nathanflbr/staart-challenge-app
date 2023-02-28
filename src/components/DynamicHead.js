import Head from "next/head";

export default function DynamicHead({ title }) {
  return (
    <Head>
      <title>{title} | Tekapta</title>
      <meta
        name="description"
        content="Aprenda em seu próprio ritmo e avance através dos níveis de certificação para provar suas habilidades."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
