'use client';

import { useRouter } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { EmptyState } from "@/components/empty-state";

import { DataTable } from "@/components/data-table";
import { columns } from "../components/columns";


export const MeetingsView = () => {
    const router = useRouter();

    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

    return (
        <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
            <DataTable
                data={data.items}
                columns={columns}
                onRowClick={(row) => router.push(`/meetings/${row.id}`)}
            />
           
            {data.items.length === 0 &&
                (<EmptyState
                    title="Create your first meeting"
                    description="Create a meeting."
                />)
            }
        </div>
    )
}