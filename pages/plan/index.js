import React from 'react';
import Head from 'next/head';
import PlanLayout from '../../components/plan-layout';
import Intro from '../../features/intro';

const PlanPage = () => {
    return (
        <>
            <Head>
                <title>Page Plan</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Intro />
        </>
    );
};
PlanPage.getLayout = function getLayout(page) {
    return <PlanLayout>{page}</PlanLayout>
}
export default PlanPage;