import RunPage from "@/components/RunPage/RunPage";
import LocalSegment from "@/models/LocalSegment";
import Run from "@/models/Run";
import games from "@/static/games";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getRun } from "utils";

const Segment: NextPage = () => {
    const [run, setRun] = useState<Run | null>(null);
    const router = useRouter();

    // Validate route and set run for valid routes
    useEffect(() => {
        if (router.query.runName && router.query.segmentSlug) {
            const run: Run = getRun(router.query.runName as string);
            if (
                run &&
                games[run.gameSlug].segments
                    .map((segment: LocalSegment) => segment.slug)
                    .includes(router.query.segmentSlug as string)
            ) {
                setRun(run);
            } else {
                router.push("/");
            }
        }
    }, [router.query.runName, router.query.segmentSlug]);

    return (
        <>
            <Head>
                <title>{`NuzlockeDB | ${router.query.runName}`}</title>
            </Head>
            {run ? (
                <RunPage
                    gameSlug={run.gameSlug}
                    runName={router.query.runName as string}
                    segmentSlug={router.query.segmentSlug as string}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default Segment;
