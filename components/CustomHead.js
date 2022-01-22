import Head from "next/head"

const CustomHead = ({ children }) => {
    return (
        <Head>
            {children}
            <script async src="https://cdn.splitbee.io/sb.js"></script>
            <link rel="icon" href="https://ik.imagekit.io/o532f5vcp38/dfbdgd_KKx0shkUk?updatedAt=1633882179537" />
            <script async src="https://cdn.splitbee.io/sb.js"></script>
            <meta name="keywords"
                content="verdimeble, meble, meble tapicerowane, meble na wymiar, meble szczecin, verdimeble szczecin" />
            <meta name="robots" content="follow" />
            <meta name="author" content=".pablo.albino" />
            <meta name="copyright" content=".pablo.albino" />
            <meta name="description" content="Verdimeble szczecin. Meble tapicerowane" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
    )
}

export default CustomHead