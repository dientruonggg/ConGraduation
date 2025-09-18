"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function GraduationCelebration() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-purple-800/10" />

      <div className="absolute top-10 left-10 text-4xl md:text-6xl animate-bounce">🎓</div>
      <div className="absolute top-20 right-20 text-3xl md:text-4xl animate-pulse">✨</div>
      <div className="absolute bottom-20 left-20 text-4xl md:text-5xl animate-bounce">🎉</div>
      <div className="absolute bottom-10 right-10 text-3xl md:text-4xl animate-pulse">🌟</div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-balance">
            Chúc Mừng Tốt Nghiệp!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hôm nay đánh dấu khởi đầu của hành trình tuyệt vời. Bạn đã học tập chăm chỉ, và giờ là lúc để ăn mừng thành
            tựu tuyệt vời này! 🎓✨
          </p>
        </div>

        <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-2xl">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              playsInline
              muted
              autoPlay
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/graduation-video.mp4" type="video/mp4" />
              <source src="/graduation-video.webm" type="video/webm" />

              <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl md:text-8xl">🎓</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Ngày Tốt Nghiệp!</h2>
                  <p className="text-white/80">Video kỷ niệm của bạn sẽ phát ở đây</p>
                  <p className="text-sm text-white/60">Thêm file video của bạn vào thư mục public/</p>
                </div>
              </div>
            </video>

            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlay}
                className="text-white hover:text-purple-300 hover:bg-white/20 h-8 w-8 p-0"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="text-white hover:text-purple-300 hover:bg-white/20 h-8 w-8 p-0"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Bạn Đã Làm Được!</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Tất cả những đêm thức khuya và công sức đã được đền đáp. Bạn nên tự hào về bản thân!
            </p>
          </Card>

          <Card className="p-6 text-center bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Cuộc Phiêu Lưu Mới</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Thế giới đầy cơ hội đang chờ đợi một người như bạn.
            </p>
          </Card>

          <Card className="p-6 text-center bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800">
            <div className="text-4xl mb-3">💫</div>
            <h3 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Tương Lai Tươi Sáng</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Đây chỉ là khởi đầu của tất cả những điều tuyệt vời bạn sẽ đạt được.
            </p>
          </Card>
        </div>

        <div className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Chúc mừng thành công của bạn! 🥳🎊
        </div>
      </div>
    </div>
  )
}
