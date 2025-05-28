import { Clock, Minus, Plus, User } from "lucide-react";
import { useState } from "react";
import { SelectedTimeDialog } from "@/project/components/ui/SelectedTimeDialog.tsx";
import TicketConfirmDialog from "@/project/components/ui/TicketConfirmDialog.tsx";
import { Button } from "@/project/components/ui/button.tsx";

type Props = {
  ticketType?: "queueTicket" | "reserveTicket";
};

export function EventBoothTicketsIssuePage({ ticketType }: Props) {
  const [count, setCount] = useState(1);
  const [isSelectedTimeDialogOpen, setIsSelectedTimeDialogOpen] =
    useState(false);
  const [isTicketConfirmDialogOpen, setIsTicketConfirmDialogOpen] =
    useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
    setSelectedTime("");
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setSelectedTime("");
    }
  };

  const handleSelectedTimeOnClose = () => setIsSelectedTimeDialogOpen(false);
  const handleSetSelectedTime = (time: string) => setSelectedTime(time);

  const handleTicketConfirmOnClose = () => setIsTicketConfirmDialogOpen(false);

  return (
    <div className="max-w-sm mx-auto p-4 w-full">
      {/* カード全体 */}
      {/*h-[calc(100vh-8rem)]*/}
      <div className="rounded-xl shadow-md w-full border-1 border-solid border-gray-200">
        {/* 上部：ブース情報 */}
        <div className="flex items-center h-20 w-full border-b-1 border-solid border-gray-200">
          <div className="bg-blue-100 text-blue-900 py-1 h-full flex flex-col justify-center items-center rounded-tl-md w-22">
            <div className="text-sm font-bold">D-01</div>
          </div>
          <div className="flex items-center justify-between w-full p-4 h-full">
            <div className="text-sm font-semibold">ランクルオフロード体験</div>
            <div className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded">
              幼
            </div>
          </div>
        </div>

        {/* 参加人数 */}
        <div className="p-4 flex flex-col gap-4">
          <label className="text-base font-semibold">参加人数</label>
          <div className="flex items-center justify-between pl-4 h-13">
            <div className="flex gap-2 items-center h-6">
              <User className="h-6 w-6 text-primary" />
              <span className="text-xl font font-bold w-7 inline-block text-right">
                {count}
              </span>
              <span className="text-xl font font-bold">名</span>
            </div>
            <div className="flex items-center h-full">
              <button
                onClick={handleDecrement}
                className=" flex flex-col justify-center items-center text-gray-500 hover:text-black w-20 h-full border-solid border-1 border-gray-200 rounded-tl-md rounded-bl-md"
              >
                <Minus className="h-5 w-5" />
              </button>
              <button
                onClick={handleIncrement}
                className=" flex flex-col justify-center items-center text-gray-500 hover:text-black w-20 h-full border-solid border-1 border-gray-200 rounded-tr-md rounded-br-md"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            体験される方全員分のチケットをご用意ください
          </p>

          {/* 時間枠選択 */}
          <label className="text-base font-semibold">受付時間</label>
          <Button
            variant="outline"
            onClick={() => setIsSelectedTimeDialogOpen(true)}
            className="h-13"
          >
            {selectedTime === "" ? (
              "時間枠を選択"
            ) : (
              <div className="flex items-center gap-2">
                <Clock />
                <span>{selectedTime}</span>
              </div>
            )}
          </Button>
          <SelectedTimeDialog
            isDialogOpen={isSelectedTimeDialogOpen}
            dialogOnClose={handleSelectedTimeOnClose}
            setSelectedTime={handleSetSelectedTime}
          />

          {/* 発行ボタン */}
          <Button
            disabled={selectedTime === ""}
            onClick={() => {
              setIsTicketConfirmDialogOpen(true);
            }}
            className="h-13"
          >
            この内容で発行する
          </Button>
          <TicketConfirmDialog
            isDialogOpen={isTicketConfirmDialogOpen}
            dialogOnClose={handleTicketConfirmOnClose}
            ticketType="queueTicket"
          />
        </div>
      </div>
    </div>
  );
}
