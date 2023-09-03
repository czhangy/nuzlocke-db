import CareerPage from "@/components/Career/CareerPage/CareerPage";
import type { NextPage } from "next";
import Head from "next/head";

const Career: NextPage = () => {
    return (
        <>
            <Head>
                <title>NuzlockeDB // Career</title>
            </Head>
            <CareerPage />
        </>
    );
};

export default Career;
