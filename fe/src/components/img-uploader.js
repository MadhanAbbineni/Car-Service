import Spinner from "./Spinner";
import { uploadImages } from "../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ImageUploader({ setShowModal, ticketId }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUploadImages = async () => {
    setLoading(true);
    await uploadImages(ticketId, images);
    setLoading(false);
    setImages([]);
    navigate(`/ticket/${ticketId}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="m-2 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <label className="text-lg font-medium uppercase leading-6 text-gray-900">
          Want to upload images?
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className="flex justify-center text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                {images.length ? (
                  <div className="flex flex-col">
                    <span className="text-center cursor-default">
                      {images.length} file(s) selected
                    </span>
                    <span className="text-center cursor-pointer">
                      Replace files
                    </span>
                  </div>
                ) : (
                  <span className="text-center cursor-pointer">
                    Upload files
                  </span>
                )}
                <input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => setImages(e.target.files)}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

        <div className="mt-4 flex justify-end items-center">
          <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
            <button
              onClick={() => {
                setShowModal(false);
                setImages([]);
                navigate(`/ticket/${ticketId}`);
              }}
              type="button"
              className="w-full bg-gray-400 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:inline-flex"
            >
              Cancel
            </button>
          </div>

          <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
            <button
              onClick={handleUploadImages}
              type="button"
              disabled={!images.length || loading}
              className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
            >
              {loading && <Spinner />}
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
