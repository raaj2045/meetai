import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { MeetingIdView } from "@/modules/meetings/ui/views/meeting-id-view";

interface Props {
    params: Promise<{ meetingId: string }>
}

const Page = async ({ params }: Props) => {
    const { meetingId } = await params;

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.meetings.getOne.queryOptions({ id: meetingId })
    );

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<LoadingState title="Loading Meeting" description="This may take a few seconds" />}>
                <ErrorBoundary fallback={<ErrorState title="Error Loading Meeting" description="Something went wrong" />}>
                    <MeetingIdView meetingId={meetingId} />
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    )
}

export default Page;
