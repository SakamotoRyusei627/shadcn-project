import { Outlet, Route, Routes } from "react-router-dom";
import { EventBoothsDefault } from "@/project/components/EventBoothsDefault.tsx";
import { CircleUser, Menu } from "lucide-react";
import { TemplatePage } from "@/project/pages/TemplatePage.tsx";

function DefaultLayout() {
  return (
    <>
      <div className="h-12 bg-primary flex items-center justify-between p-2">
        <div className="flex items-center gap-1">
          <CircleUser className="text-neutral-50" />
          <h1 className="text-xl text-neutral-50">Header</h1>
        </div>
        <Menu className="text-neutral-50" />
      </div>
      <Outlet />
    </>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/eventnew" element={<DefaultLayout />}>
        {/*<Route path=":eventId" element={<EventTopPage />} />*/}
        {/*<Route path=":eventId/tickets" element={<EventMyTicketsPage />} />*/}
        <Route path=":eventId/booth/*" element={<EventBoothsDefault />} />
      </Route>
      {/*<Route*/}
      {/*    path="ticket-usage-status/:eventId"*/}
      {/*    element={*/}
      {/*      <UserContextProvider>*/}
      {/*        <TicketUsageStatusContainer />*/}
      {/*      </UserContextProvider>*/}
      {/*    }*/}
      {/*/>*/}
      <Route path="/template" element={<TemplatePage />} />
    </Routes>
  );
}

export default App;
