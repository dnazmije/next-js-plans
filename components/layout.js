import Head from "next/head";

const Layout = (props) => (
    <div>
        <Head>
            <title>Pricing table Next.js</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
        </Head>
        {props.children}

        <style global jsx>{`
            body {
                font-family: Roboto, sans-serif;
                color: #444;
            }
            p {
                font-size: 15px;
            }
        `}</style>
    </div>
);

export default Layout;