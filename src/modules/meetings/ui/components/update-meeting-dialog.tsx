import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";


interface NewAgentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialValue: MeetingGetOne
};

export const UpdateMeetingDialog = ({ open, onOpenChange, initialValue }: NewAgentDialogProps) => {

    return (
        <ResponsiveDialog
            title="Update Meeting"
            description="Edit the meeting details"
            open={open}
            onOpenChange={onOpenChange}
        >
            <MeetingForm
                onSuccess={() => onOpenChange(false)}
                onCancel={() => onOpenChange(false)}
                initialValues={initialValue}
            />
        </ResponsiveDialog>
    )
}