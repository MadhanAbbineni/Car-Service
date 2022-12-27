import { useEffect, useState } from "react";

import CreateTicket from "./create-ticket";
import TicketTable from "./TicketTable";
import { getAllTickets } from "../api";
import bookings from "../data/bookings.json"
const TicketPage = () => {
  const [search,setSearch]=useState("");
  const [tickets, setTickets] = useState([]);
  const [data, setData] = useState([]);

  const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = bookings;// await getAllTickets();
      // if (res && res.data) setTickets(res.data);
      setData(res);
      setTickets(res);
    };

    fetchTickets();
  }, [showCreateTicketModal]);
  console.log(data,tickets)
  useEffect(() => {
    setTickets(() => {
      return data.filter(ticket => ticket.place.toLowerCase().includes(search.toLowerCase())
      )
    })
  },[search])

  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-md mx-auto divide-y-2 divide-gray-200 md:max-w-7xl">
        <input type="text"  className="p-2 border-gray-500 border w-full rounded-lg" onChange={e => setSearch(e.target.value)}/>
        <div>
          <h2 className="text-3xl tracking-tight font-bold text-gray-500 sm:text-4xl">
            BOOKINGS
          </h2>
          <div className="mt-3 sm:mt-4 md:grid md:grid-cols-2 md:gap-5 md:items-center">
            <p className="text-xl text-gray-500">
              Here are the list of all bookings...
            </p>
            <div className="mt-6 flex flex-col sm:flex-row md:mt-0 md:justify-end">
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  onClick={() => setShowCreateTicketModal(true)}
                  type="button"
                  className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                >
                  {/* Create Ticket */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCreateTicketModal && (
        <CreateTicket setShowModal={setShowCreateTicketModal} />
      )}

      <TicketTable tickets={tickets} />
    </div>
  );
};

export default TicketPage;
