import { useEffect, useState } from "react";

import AdminForm from "./adminform";
import { HiHashtag } from "react-icons/hi";
import auth from "../auth";
import { getTicketById } from "../api";
import moment from "moment";
import { useParams } from "react-router-dom";

const TicketDetails = ({}) => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showCloseTicketForm, setShowCloseTicketForm] = useState(false);

  useEffect(() => {
    const fetchTicket = async () => {
      const res = await getTicketById(id);
      console.log(res);
      if (res && res.data) {
        setTicket(res.data);
      }
    };

    fetchTicket();
  }, [id]);

  return ticket ? (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="h-72 grid grid-cols-2 gap-1">
        <div>
          <div className="h-4/6">
            {ticket.images.length ? (
              <img src={ticket.images[selectedImage]} className="h-full" />
            ) : (
              <div className="h-full bg-gray-300 text-center text-gray-500 flex items-center justify-center">
                No Images Available!!
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 w-4/5 overflow-hidden">
            {ticket.images.map((image, i) => (
              <img
                key={image}
                src={image}
                height="100px"
                width="100px"
                onClick={() => setSelectedImage(i)}
                className={
                  i === selectedImage
                    ? "object-cover border-2 ring border-indigo-500"
                    : "cursor-pointer"
                }
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold uppercase text-2xl text-gray-700">
                {ticket.title}
              </h2>
              <div className="flex items-center p-1 text-gray-400">
                <HiHashtag size={20} />
                <span>{ticket._id}</span>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end">
              <span className="bg-indigo-300 p-1 rounded text-white">
                {ticket.status}
              </span>
              <div className="text-gray-500">
                created {moment(ticket.created_at).fromNow()}
              </div>
            </div>
          </div>

          <span className="mt-2 text-gray-600 overflow-y-auto">
            {ticket.description}
          </span>
        </div>
      </div>
      {auth.user.role === "ADMIN" && (
        <div className="flex justify-end">
          <button
            onClick={() => setShowCloseTicketForm(true)}
            className="p-2 bg-red-400 text-white rounded cursor-pointer"
          >
            Close Ticket
          </button>
        </div>
      )}

      {showCloseTicketForm && (
        <AdminForm id={id} setShowModal={setShowCloseTicketForm} />
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default TicketDetails;
