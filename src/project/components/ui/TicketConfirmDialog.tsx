import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/project/components/ui/dialog.tsx";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/project/components/ui/button.tsx";

type Props = {
  ticketType?: "queueTicket" | "reserveTicket";
  isDialogOpen: boolean;
  dialogOnClose: () => void;
};

function TicketConfirmDialog({
  ticketType,
  isDialogOpen,
  dialogOnClose,
}: Props) {
  let confirmMessage: string;
  switch (ticketType) {
    case "queueTicket":
      confirmMessage = "上記内容の整理券を確定します。\n" + "よろしいですか？";
      break;
    case "reserveTicket":
      confirmMessage =
        "上記内容の予約チケットを確定します。\n" + "よろしいですか？";
      break;
    default:
      confirmMessage =
        "不正な値が入っているので一度戻って再度発券を行ってください。";
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={dialogOnClose}>
      <DialogContent className="p-0 max-h-[80vh] overflow-y-auto">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>整理券または予約券を発券の最終確認</DialogTitle>
            <DialogDescription>
              内容を確認の上、発券を行ってください。
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <div className="flex flex-col">
          <div className="flex items-center w-full border-b-1 border-solid border-gray-200">
            <div className="bg-blue-100 text-blue-900 py-1 h-full flex flex-col justify-center items-center rounded-tl-md w-22">
              <div className="text-sm font-bold">{"D - 01"}</div>
            </div>
            <div className="flex flex-col w-full p-4 h-full">
              <div className="text-sm font-semibold">
                {"ランクルオフロード体験"}
              </div>
              <div>
                <span>所要時間</span> <span>{10}分</span>
              </div>
              <div>
                <span>受付時間</span> <span>{"9:50~10:00"}</span>
              </div>
              <div>
                <span>参加人数</span> <span>{3}人</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div>{confirmMessage}</div>
            <div className="flex justify-between">
              <Button variant="outline">戻る</Button>
              <Button>確定する</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TicketConfirmDialog;
