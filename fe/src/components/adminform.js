import { closeTicket } from "../api";
import { useNavigate } from "react-router-dom";

export default function Adminform({ id, setShowModal }) {
  const navigate = useNavigate();

  const handleCloseTicket = async () => {
    const res = await closeTicket(id, {});

    if (res && res.data && res.data.status === "CLOSED") {
      setShowModal(false);
      navigate("/");
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-100 bg-opacity-50">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="bg-white p-10 rounded shadow max-w-3xl mx-auto">
          <div class="space-y-8 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Ticket
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    Fill the form before closing the ticket
                  </p>
                </div>

                <div class="sm:col-span-6 mt-3">
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Specifics
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                      placeholder="Write a discription about the ticket"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-5">
            <div class="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                type="button"
                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseTicket}
                type="submit"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
