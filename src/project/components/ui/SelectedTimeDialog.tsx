import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/project/components/ui/dialog.tsx";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  isDialogOpen: boolean;
  dialogOnClose: () => void;
  setSelectedTime: (time: string) => void;
};

const timeSlots = [
  { time: "9:20 - 9:30", status: "予定枚数終了", available: false },
  { time: "9:50 - 10:00", status: "残り 5人", available: true },
  { time: "10:20 - 10:30", status: "残り 10人", available: true },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  { time: "10:20 - 10:30", status: "予定枚数終了", available: false },
  // 必要に応じて追加
];

export function SelectedTimeDialog({
  isDialogOpen,
  setSelectedTime,
  dialogOnClose,
}: Props) {
  // fetch time slots from an API or define them statically
  return (
    <Dialog open={isDialogOpen} onOpenChange={dialogOnClose}>
      <DialogContent className="p-0 max-h-[80vh] overflow-y-auto">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>整理券または予約券を発券の時間選択</DialogTitle>
            <DialogDescription>
              整理券または予約券を発券する時間を選択してください。
              参加人数に応じて、時間枠が異なる場合があります。
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <div className="flex flex-col">
          {timeSlots.map((slot, i) => (
            <button
              key={i}
              className="w-full h-12 flex justify-between items-center px-4 py-2 border rounded"
              onClick={() => {
                setSelectedTime(slot.time);
                dialogOnClose();
              }}
              disabled={!slot.available}
            >
              <span className="font-bold">{slot.time}</span>
              <span
                className={`text-sm ${
                  slot.available ? "text-black" : "text-red-500"
                }`}
              >
                {slot.status}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
