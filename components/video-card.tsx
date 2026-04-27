"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw, RotateCw } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { ProjectActionButton } from "@/components/project-action-button";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

interface Project {
  id: number;
  year: string;
  thumbnail: string;
  video: string;
  githubUrl?: string;
  moreInfoUrl?: string;
  projectName?: string;
  company?: string;
  shortDescription?: string;
  fullDescription?: string;
  tech?: string[];
}

interface VideoCardProps {
  project: Project;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
}

const EASE = "cubic-bezier(0.4,0,0.2,1)";
const DURATION = 800;

export function VideoCard({
  project,
  isHovered,
  onHoverChange,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isManuallyPausedRef = useRef(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      isManuallyPausedRef.current = false;
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      isManuallyPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const skip = useCallback((seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(
      0,
      Math.min(video.duration || 0, video.currentTime + seconds),
    );
  }, []);

  const handleScrub = useCallback((value: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.currentTime = value * video.duration;
  }, []);

  useEffect(() => {
    if (isHovered) {
      setShouldLoadVideo(true);
    }
  }, [isHovered]);

  useEffect(() => {
    if (isHovered && videoRef.current && shouldLoadVideo) {
      isManuallyPausedRef.current = false;
      const timer = setTimeout(() => {
        if (videoRef.current && !isManuallyPausedRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (videoRef.current && !isHovered) {
      isManuallyPausedRef.current = false;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isHovered, shouldLoadVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    const onTimeUpdate = () => {
      const dur = video.duration;
      const curr = video.currentTime;
      if (Number.isFinite(dur) && dur > 0) {
        setProgress(curr / dur);
      }
      setCurrentTime(curr);
    };

    const onLoadedMetadata = () => {
      if (Number.isFinite(video.duration)) {
        setDuration(video.duration);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.readyState >= 1) onLoadedMetadata();

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [shouldLoadVideo]);

  useEffect(() => {
    if (!isHovered) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      if (e.key === "ArrowLeft") skip(-5);
      else skip(5);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered, skip]);

  const isActive = isHovered;

  const videoControls = isActive && (
    <div
      data-video-controls
      className="absolute bottom-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-1.5 bg-black/50 backdrop-blur-sm cursor-pointer transition-opacity duration-300"
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip(-5);
        }}
        className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Back 5 seconds"
      >
        <RotateCcw className="size-4" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          togglePlayPause();
        }}
        className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip(5);
        }}
        className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Forward 5 seconds"
      >
        <RotateCw className="size-4" />
      </button>
      <div className="flex-1 flex items-center gap-3 min-w-0">
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={progress}
          onChange={(e) => handleScrub(parseFloat(e.target.value))}
          className="flex-1 h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
        />
        <span className="text-xs text-white/90 font-mono tabular-nums shrink-0">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden",
        "w-full",
        "will-change-transform",
        !isActive && "opacity-90",
      )}
      style={{
        transition: `opacity ${DURATION}ms ${EASE}, box-shadow ${DURATION}ms ${EASE}`,
        boxShadow: isActive
          ? "0 25px 50px -12px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)"
          : undefined,
      }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      data-video-card-id={project.id}
    >
      {/* Video region */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-black transition-[height] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          isHovered ? "h-[75vw] sm:h-[445px]" : "h-[202px]",
        )}
      >
        {shouldLoadVideo ? (
          <>
            <video
              ref={videoRef}
              poster={project.thumbnail || undefined}
              className={cn(
                "absolute inset-0 h-full w-full transition-all duration-700",
                isActive ? "object-contain lg:object-cover" : "object-cover",
                !isActive && "grayscale brightness-10",
              )}
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={project.video} type="video/mp4" />
            </video>
            {videoControls}
          </>
        ) : (
          <img
            src={project.thumbnail || "/placeholder-user.jpg"}
            alt={project.projectName || "Project thumbnail"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-700",
              !isActive && "grayscale brightness-10",
            )}
          />
        )}
      </div>

      {/* Content block */}
        <div
          className={cn(
            "relative z-30 overflow-hidden transition-[margin-top] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
            isHovered ? "mt-0" : "-mt-[202px]",
          )}
        >
        <div
          className={cn(
            "absolute inset-0 bg-background border-t border-border rounded-b-2xl sm:rounded-b-[2.5rem] transition-opacity duration-0",
            isHovered ? "opacity-100 delay-[800ms]" : "opacity-0 delay-0",
          )}
        />

        <div className="relative px-4 sm:px-8 flex flex-col justify-center min-h-[162px] py-5">
          {project.year && (
            <div
              className={cn(
                "font-mono text-xs tracking-widest uppercase pb-1 transition-colors duration-[800ms]",
                isHovered ? "text-muted-foreground" : "text-white/60",
              )}
            >
              {project.year}
            </div>
          )}

          <div className="space-y-3">
            {project.projectName && (
              <h3
                className={cn(
                  "font-mono text-lg sm:text-xl uppercase font-medium leading-tight transition-colors duration-[800ms]",
                  isHovered ? "text-foreground" : "text-white",
                )}
              >
                {project.projectName}
              </h3>
            )}
            {project.company && (
              <div className="flex items-center gap-4 flex-wrap">
                <p
                  className={cn(
                    "font-mono text-sm tracking-[0.15em] uppercase leading-relaxed transition-colors duration-[800ms]",
                    isHovered ? "text-muted-foreground" : "text-white/80",
                  )}
                >
                  {project.company}
                </p>
                {isHovered && project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-border bg-secondary px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {project.shortDescription && (
            <div className="flex items-start justify-between gap-4 sm:gap-6 pt-4">
              <p
                className={cn(
                  "flex-1 sm:flex-[0_0_70%] text-sm leading-tight transition-colors duration-[800ms]",
                  isHovered
                    ? "text-muted-foreground"
                    : "text-white/70 line-clamp-2 md:line-clamp-none",
                )}
              >
                {project.shortDescription}
              </p>
              <div className="flex shrink-0 items-center justify-end ml-auto">
                <ProjectActionButton
                  icon={<GithubIcon className="size-5" />}
                  url={project.githubUrl}
                  expanded={isHovered}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
