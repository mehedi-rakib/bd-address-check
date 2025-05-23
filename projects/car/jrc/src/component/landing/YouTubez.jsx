"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, Typography, Chip, Dialog, IconButton, Pagination, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import { motion } from "framer-motion"

const YoutubeGallery = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState({})
  const videosPerPage = 6

  const videos = [
    {
      id: "4m4UxbDgGhc",
      title: "Day in the Life of a Japanese Car Repair Worker in Toyota",
      videoUrl: "https://www.youtube.com/embed/4m4UxbDgGhc",
      tag: "Toyota",
    },
    {
      id: "S0XOQLNoy_w",
      title: "Day in the Life of a Japanese Mechanic",
      videoUrl: "https://www.youtube.com/embed/S0XOQLNoy_w",
      tag: "Mechanic",
    },
    {
      id: "5B6ZWKRGmFI",
      title: "Toyota Japan Factory Tour - How Japanese cars are made",
      videoUrl: "https://www.youtube.com/embed/5B6ZWKRGmFI",
      tag: "Factory",
    },
    {
      id: "-BARD36Z_1E",
      title: "How to Import Damaged Cars from Japan?",
      videoUrl: "https://www.youtube.com/embed/-BARD36Z_1E",
      tag: "Import",
    },
    {
      id: "QETELC1QI1Y",
      title: "How to export cars/parts from japan",
      videoUrl: "https://www.youtube.com/embed/QETELC1QI1Y",
      tag: "Export",
    },
    {
      id: "mcnLl6w2s2E",
      title: "How Japanese Cars are Exported From Japan",
      videoUrl: "https://www.youtube.com/embed/mcnLl6w2s2E",
      tag: "Export",
    },
    {
      id: "uZ5s5tIOyBY",
      title: "Sourcing Cars and Parts in Japan (Legitimately)",
      videoUrl: "https://www.youtube.com/embed/uZ5s5tIOyBY",
      tag: "Parts",
    },
    {
      id: "6c2io6b8E_s",
      title: "How They Build the Mighty Honda Civic Type R in Japan",
      videoUrl: "https://www.youtube.com/embed/6c2io6b8E_s",
      tag: "Honda",
    },
    {
      id: "F5vtCRFRAK0",
      title: "How Toyota Changed The Way We Make Things",
      videoUrl: "https://www.youtube.com/embed/F5vtCRFRAK0",
      tag: "Toyota",
    },
  ]

  // Calculate pagination
  const pageCount = Math.ceil(videos.length / videosPerPage)
  const currentVideos = videos.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage)

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Function to check if thumbnail exists and set fallback
  const checkThumbnail = (videoId) => {
    // Try different thumbnail qualities in order
    const qualities = ["maxresdefault", "sddefault", "hqdefault", "mqdefault", "default"]
    let currentQualityIndex = 0

    const tryLoadingThumbnail = () => {
      if (currentQualityIndex >= qualities.length) {
        // If all qualities failed, use a placeholder
        setThumbnailsLoaded((prev) => ({
          ...prev,
          [videoId]: `/placeholder.svg?height=720&width=1280`,
        }))
        return
      }

      const quality = qualities[currentQualityIndex]
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`

      img.onload = () => {
        // If image loads successfully, use this quality
        setThumbnailsLoaded((prev) => ({
          ...prev,
          [videoId]: img.src,
        }))
      }

      img.onerror = () => {
        // Try next quality
        currentQualityIndex++
        tryLoadingThumbnail()
      }
    }

    tryLoadingThumbnail()
  }

  // Check all thumbnails on component mount
  useEffect(() => {
    videos.forEach((video) => {
      checkThumbnail(video.id)
    })
  }, [])

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className="hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden h-full"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <div className="relative group cursor-pointer aspect-video" onClick={() => setSelectedVideo(video)}>
                  <div className="w-full h-full bg-gray-200">
                    {thumbnailsLoaded[video.id] ? (
                      <img
                        src={thumbnailsLoaded[video.id] || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <div className="animate-pulse w-8 h-8 rounded-full bg-gray-300"></div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <PlayCircleOutlineIcon
                      className="text-white transform scale-0 group-hover:scale-100 transition-transform duration-300"
                      sx={{ fontSize: 60 }}
                    />
                  </div>
                </div>
                <CardContent className="flex-1 p-4">
                  <Chip
                    label={video.tag}
                    size="small"
                    color="primary"
                    className="mb-2"
                    sx={{
                      backgroundColor: "#1a73e8",
                      color: "white",
                      "&:hover": { backgroundColor: "#1557b0" },
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="h3"
                    className="font-medium line-clamp-2 text-gray-800 mt-2"
                    sx={{ fontSize: "1rem", lineHeight: "1.5" }}
                  >
                    {video.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <Box className="flex justify-center mt-8">
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onClose={() => setSelectedVideo(null)} maxWidth="md" fullWidth>
          {selectedVideo && (
            <>
              <div className="relative">
                <IconButton
                  onClick={() => setSelectedVideo(null)}
                  className="absolute right-2 top-2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70"
                  sx={{ color: "white" }}
                >
                  <CloseIcon />
                </IconButton>
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`${selectedVideo.videoUrl}?autoplay=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </>
          )}
        </Dialog>
      </div>
    </div>
  )
}

export default YoutubeGallery;
