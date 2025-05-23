"use client"
  import { useState } from 'react';

  const videos = [
    {
      id: "4m4UxbDgGhc",
      title: "Day in the Life of a Japanese Car Repair Worker in Toyota",
      videoUrl: "https://www.youtube.com/embed/4m4UxbDgGhc",
      thumbnail: "https://img.youtube.com/vi/4m4UxbDgGhc/maxresdefault.jpg",
      tag: "Toyota",
    },
    {
      id: "S0XOQLNoy_w",
      title: "Day in the Life of a Japanese Mechanic",
      videoUrl: "https://www.youtube.com/embed/S0XOQLNoy_w",
      thumbnail: "https://img.youtube.com/vi/S0XOQLNoy_w/maxresdefault.jpg",
      tag: "Mechanic",
    },
    {
      id: "5B6ZWKRGmFI",
      title: "Toyota Japan Factory Tour - How Japanese cars are made",
      videoUrl: "https://www.youtube.com/embed/5B6ZWKRGmFI",
      thumbnail: "https://img.youtube.com/vi/5B6ZWKRGmFI/maxresdefault.jpg",
      tag: "Factory",
    },
    {
      id: "-BARD36Z_1E",
      title: "How to Import Damaged Cars from Japan?",
      videoUrl: "https://www.youtube.com/embed/-BARD36Z_1E",
      thumbnail: "https://img.youtube.com/vi/-BARD36Z_1E/maxresdefault.jpg",
      tag: "Import",
    },
    {
      id: "QETELC1QI1Y",
      title: "How to export cars/parts from japan",
      videoUrl: "https://www.youtube.com/embed/QETELC1QI1Y",
      thumbnail: "https://img.youtube.com/vi/QETELC1QI1Y/maxresdefault.jpg",
      tag: "Export",
    },
    {
      id: "mcnLl6w2s2E",
      title: "How Japanese Cars are Exported From Japan",
      videoUrl: "https://www.youtube.com/embed/mcnLl6w2s2E",
      thumbnail: "https://img.youtube.com/vi/mcnLl6w2s2E/maxresdefault.jpg",
      tag: "Export",
    },
    {
      id: "uZ5s5tIOyBY",
      title: "Sourcing Cars and Parts in Japan (Legitimately)",
      videoUrl: "https://www.youtube.com/embed/uZ5s5tIOyBY",
      thumbnail: "https://img.youtube.com/vi/uZ5s5tIOyBY/maxresdefault.jpg",
      tag: "Parts",
    },
    {
      id: "6c2io6b8E_s",
      title: "How They Build the Mighty Honda Civic Type R in Japan",
      videoUrl: "https://www.youtube.com/embed/6c2io6b8E_s",
      thumbnail: "https://img.youtube.com/vi/6c2io6b8E_s/maxresdefault.jpg",
      tag: "Honda",
    },
    {
      id: "F5vtCRFRAK0",
      title: "How Toyota Changed The Way We Make Things",
      videoUrl: "https://www.youtube.com/embed/F5vtCRFRAK0",
      thumbnail: "https://img.youtube.com/vi/F5vtCRFRAK0/maxresdefault.jpg",
      tag: "Toyota",
    },
  ]


export default function VideoGalleryWithPopup() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  // Calculate pagination
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 bg-blue-900 text-white py-4 rounded-lg">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentVideos.map((video) => (
          <div key={video.id} className="rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full cursor-pointer hover:opacity-90"
              onClick={() => setSelectedVideo(video)}
            />
            <div className="p-4">
              <span className="text-sm text-white bg-blue-500 rounded px-2 py-1 mr-2">{video.tag}</span>
              <h3 className="text-lg font-semibold mt-2 text-blue-900">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => paginate(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-blue-900 text-white hover:bg-blue-800'
          }`}
        >
          First
        </button>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-blue-900 text-white hover:bg-blue-800'
          }`}
        >
          Previous
        </button>
        
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-900 text-white hover:bg-blue-800'
          }`}
        >
          Next
        </button>
        <button
          onClick={() => paginate(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-900 text-white hover:bg-blue-800'
          }`}
        >
          Last
        </button>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-3xl w-full rounded-lg overflow-hidden relative">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold bg-gray-200 rounded-full px-2 hover:bg-gray-300"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <div className="w-full aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-blue-600">
              <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
