import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import { EventBoothQueueTicketPage } from "@/project/pages/EventBoothQueueTicketPage.tsx";
import { EventBoothReserveTicketPage } from "@/project/pages/EventBoothReserveTicketPage.tsx";
import { ChevronLeft } from "lucide-react";

export const EventBoothsDefault = () => {
  const navigate = useNavigate();
  // const isBoths = useMatch("/eventnew/:eventId/booths");
  const isInfo = useMatch("/eventnew/:eventId/booth/info/:boothIndex");
  const isQueue = useMatch("/eventnew/:eventId/booth/:boothIndex/queueTicket");
  const isReservation = useMatch(
    "/eventnew/:eventId/booth/:boothIndex/reserveTicket",
  );
  const isBooth = isInfo || isQueue || isReservation;

  return (
    <div>
      <div className="relative flex items-center h-12">
        {isBooth && (
          <ChevronLeft
            className="absolute left-2 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        )}
        {isQueue && (
          <h2 className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 text-center text-base font-semibold">
            整理券発行
          </h2>
        )}
      </div>
      <Routes>
        {/*<Route path="list" element={<EventBoothsListPage />} />*/}
        {/*<Route path="info/:boothIndex" element={<EventBoothInfoPage />} />*/}
        <Route
          path=":boothIndex/queueTicket"
          element={<EventBoothQueueTicketPage />}
        />
        <Route
          path=":boothIndex/reserveTicket"
          element={<EventBoothReserveTicketPage />}
        />
      </Routes>
    </div>
  );
};
