import ImageUploader from "./img-uploader";
import { createTicket } from "../api";
import { useState } from "react";

export default function Createticket({ setShowModal }) {
  const [ticketId, setTicketId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showImageUploader, setShowImageUploader] = useState(false);

  const handleCreateTicket = async () => {
    const res = await createTicket({ title, description });
    if (res && res.data) {
      setTitle("");
      setDescription("");
      setTicketId(res.data._id);
      setShowImageUploader(true);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-100 bg-opacity-50">
      {!showImageUploader ? (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium uppercase leading-6 text-gray-900">
                    Create Incident Ticket
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Here you can create a ticket stating your issues with the
                    car and we'll resolve it within given time.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="space-y-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="title"
                        id="title"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="Give a short one-liner of the problem"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          id="desc"
                          name="desc"
                          rows="3"
                          className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Explain about the problem you are facing"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end items-center">
                      <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                        <button
                          onClick={() => {
                            setTitle("");
                            setDescription("");
                            setShowModal(false);
                          }}
                          type="button"
                          className="w-full bg-gray-400 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:inline-flex"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                        <button
                          onClick={handleCreateTicket}
                          type="button"
                          disabled={!title.trim() || !description.trim()}
                          className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ImageUploader ticketId={ticketId} setShowModal={setShowModal} />
      )}
    </div>
  );
}
