import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import { EventBoothTicketsIssuePage } from "@/project/pages/EventBoothTicketsIssuePage.tsx";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { TicketType } from "@/project/models/Ticket.ts";

export const EventBoothsDefault = () => {
  const navigate = useNavigate();
  const [ticketType, setTicketType] = useState<TicketType>("queueTicket"); // 仮に固定値を入れる
  // const isBooths = useMatch("/eventnew/:eventId/booths");
  const isInfo = useMatch("/eventnew/:eventId/booth/info/:boothIndex");
  const isTicketsIssue = useMatch(
    "/eventnew/:eventId/booth/:boothIndex/tickets/issue",
  );
  const isShowBackIcon = isInfo || isTicketsIssue;

  return (
    <div>
      <div className="relative flex items-center h-12">
        {isShowBackIcon && (
          <ChevronLeft
            className="absolute left-2 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        )}
        {ticketType === "queueTicket" && (
          <h2 className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 text-center text-base font-semibold">
            整理券発行
          </h2>
        )}
        {ticketType === "reserveTicket" && (
          <h2 className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 text-center text-base font-semibold">
            予約券発行
          </h2>
        )}
      </div>
      <Routes>
        {/*<Route path="list" element={<EventBoothsListPage />} />*/}
        {/*<Route path="info/:boothIndex" element={<EventBoothInfoPage />} />*/}
        <Route
          path=":boothIndex/tickets/issue"
          element={<EventBoothTicketsIssuePage ticketType={"queueTicket"} />}
        />
      </Routes>
    </div>
  );
};
