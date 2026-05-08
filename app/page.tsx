"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { VideoCard } from "@/components/video-card";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [linkedVideoId, setLinkedVideoId] = useState<number | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  // Track mouse position and check hover on move/scroll (throttled for performance)
  useEffect(() => {
    let rafId: number | null = null;
    let pendingCheck = false;

    const checkHoveredCard = () => {
      const element = document.elementFromPoint(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
      );

      if (linkedVideoId !== null) {
        pendingCheck = false;
        return;
      }

      if (element) {
        // Find the video card element (might be nested)
        const videoCard = element.closest(
          "[data-video-card-id]",
        ) as HTMLElement;
        if (videoCard) {
          const cardId = parseInt(
            videoCard.getAttribute("data-video-card-id") || "0",
          );
          if (cardId > 0) {
            setHoveredId(cardId);
            pendingCheck = false;
            return;
          }
        }
      }

      // If no card is under cursor, clear hover state
      setHoveredId(null);
      pendingCheck = false;
    };

    const throttledCheck = () => {
      if (!pendingCheck) {
        pendingCheck = true;
        rafId = requestAnimationFrame(() => {
          checkHoveredCard();
          rafId = null;
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      throttledCheck();
    };

    const handleScroll = () => {
      throttledCheck();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [linkedVideoId]);

  useEffect(() => {
    const determineActiveSection = () => {
      const sections = sectionsRef.current.filter(Boolean) as HTMLElement[];
      if (sections.length === 0) return;

      // Find the section that is most visible in the viewport
      let maxVisibility = 0;
      let activeId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate visibility: how much of the section is in the viewport
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility =
          visibleHeight / Math.min(rect.height, viewportHeight);

        // Prefer sections that are near the top of the viewport
        const topProximity =
          rect.top >= 0 && rect.top < viewportHeight * 0.5 ? 1.2 : 1;
        const adjustedVisibility = visibility * topProximity;

        if (adjustedVisibility > maxVisibility) {
          maxVisibility = adjustedVisibility;
          activeId = section.id;
        }
      });

      // Map "test" section to "work" for navigation consistency
      const sectionId = activeId === "test" ? "work" : activeId;
      if (sectionId) {
        setActiveSection(sectionId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-in-up");
          }
        });
        // Determine active section whenever intersection changes
        determineActiveSection();
      },
      { threshold: [0, 0.1, 0.5, 1], rootMargin: "0px 0px -10% 0px" },
    );

    // Use setTimeout to ensure refs are set after render
    const timeoutId = setTimeout(() => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.observe(section);
          // Check if section is already in viewport
          const rect = section.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport) {
            section.classList.remove("opacity-0");
            section.classList.add("animate-fade-in-up");
          }
        }
      });
      // Initial determination
      determineActiveSection();
    }, 0);

    // Also check on scroll for more reliable updates
    const handleScroll = () => {
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const VIDEO_DEEP_LINK_OFFSET_VH = 0.17;
    const VIDEO_CARD_TRANSITION_MS = 850;
    let correctionTimerId: number | null = null;

    const scrollVideoIntoPosition = (
      target: HTMLElement,
      behavior: ScrollBehavior,
    ) => {
      const rect = target.getBoundingClientRect();
      const offsetPx = window.innerHeight * VIDEO_DEEP_LINK_OFFSET_VH;
      const targetY = Math.max(0, window.scrollY + rect.top - offsetPx);

      window.scrollTo({ top: targetY, behavior });
    };

    const scrollToVideoFromHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#video-(\d+)$/);
      if (!match) {
        setLinkedVideoId(null);
        if (correctionTimerId !== null) {
          window.clearTimeout(correctionTimerId);
          correctionTimerId = null;
        }
        return;
      }

      const videoId = parseInt(match[1], 10);
      if (!Number.isFinite(videoId)) return;

      const target = document.querySelector(
        `[data-video-card-id="${videoId}"]`,
      ) as HTMLElement | null;
      if (!target) return;

      setLinkedVideoId(videoId);
      setHoveredId(videoId);
      // Place immediately, then do one smooth correction after transition.
      scrollVideoIntoPosition(target, "auto");

      // Correct final position after card expand/collapse transition settles.
      if (correctionTimerId !== null) {
        window.clearTimeout(correctionTimerId);
      }
      correctionTimerId = window.setTimeout(() => {
        const refreshedTarget = document.querySelector(
          `[data-video-card-id="${videoId}"]`,
        ) as HTMLElement | null;
        if (!refreshedTarget) return;
        scrollVideoIntoPosition(refreshedTarget, "smooth");
        correctionTimerId = null;
      }, VIDEO_CARD_TRANSITION_MS);
    };

    const timerId = window.setTimeout(scrollToVideoFromHash, 150);
    window.addEventListener("hashchange", scrollToVideoFromHash);

    return () => {
      window.clearTimeout(timerId);
      if (correctionTimerId !== null) {
        window.clearTimeout(correctionTimerId);
      }
      window.removeEventListener("hashchange", scrollToVideoFromHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => {
                const targetId = section === "work" ? "test" : section;
                document
                  .getElementById(targetId)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ||
                (section === "work" && activeSection === "test")
                  ? "bg-purple-accent"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Aprameya
                  <br />
                  <span className="text-muted-foreground">Kannan</span>
                </h1>
              </div>

            </div>

          </div>
        </header>

        <section
          id="test"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">
                Experience
              </h2>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: 1,
                    projectName: "DataVision",
                    company: "Bitcamp 2025",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/datavision_vid.mov",
                    githubUrl: "https://github.com/aprameyak/DataVision",
                    tech: [],
                  },
                  {
                    id: 2,
                    projectName: "Nara",
                    company: "Bitcamp 2026",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/nara-video.mov",
                    githubUrl: "https://github.com/aprameyak/Nara",
                    tech: [],
                  },
                  {
                    id: 3,
                    projectName: "Pathos",
                    company: "",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/pathos-video.mov",
                    githubUrl: "https://github.com/aprameyak/Pathos",
                    tech: [],
                  },
                  {
                    id: 4,
                    projectName: "PhilaWatch",
                    company: "PennApps 2025",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/philawatch-video.mov",
                    githubUrl: "https://github.com/aprameyak/PhilaWatch",
                    tech: [],
                  },
                  {
                    id: 5,
                    projectName: "IronMiner",
                    company: "IronSiteXUMD 2026",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/ironminer-video.mov",
                    githubUrl: "https://github.com/aprameyak/IronMiner",
                    tech: [],
                  },
                  {
                    id: 7,
                    projectName: "MITRE SCOUT",
                    company: "App Dev Club",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/scout_vid.mov",
                    tech: [],
                  },
                  {
                    id: 8,
                    projectName: "Booz Allen Hamilton",
                    company: "App Dev Club",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/bah-video.mp4",
                    tech: [],
                  },
                  {
                    id: 9,
                    projectName: "Warriors Legacy Care",
                    company: "App Dev Club",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/wlc-video.mp4",
                    tech: [],
                  },
                  {
                    id: 6,
                    projectName: "Terrapin Marketplace",
                    company: "CS Final Project",
                    shortDescription: "",
                    thumbnail: "",
                    video: "/videos/terrapinmarketplace-video.mov",
                    githubUrl: "https://github.com/aprameyak/cmsc335-final-project",
                    tech: [],
                  },
                ].map((project) => (
                  <VideoCard
                    key={project.id}
                    project={project}
                    isHovered={
                      hoveredId === project.id || linkedVideoId === project.id
                    }
                    onHoverChange={(hovered) => {
                      if (linkedVideoId !== null) {
                        setLinkedVideoId(null);
                      }
                      setHoveredId(hovered ? project.id : null);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="py-10 sm:py-10 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <div className="space-y-4">
                  <Link
                    href="mailto:aprameyakannan@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">
                      aprameyakannan@gmail.com
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-purple-accent font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@aprameyak",
                    url: "https://github.com/aprameyak",
                  },
                  {
                    name: "LinkedIn",
                    handle: "aprameyak",
                    url: "https://www.linkedin.com/in/aprameyak/",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-purple-accent/50 transition-all duration-300 glow-on-hover"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className=" border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 pt-5 pb-30">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Aprameya Kannan</div>
            </div>

            <div className="flex items-center gap-4"></div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
