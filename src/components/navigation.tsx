import { ChevronsLeft, MenuIcon } from "lucide-react";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { UserItem } from "./user-item";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api"

export const Navigation = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const documents = useQuery(api.documents.get);

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);
  
  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  const handleMouseMove = (event: MouseEvent) => {
    if(!isResizingRef.current) return;
    let newWidth = event.clientX;
    
    if(newWidth < 240) newWidth = 240;
    if(newWidth > 480) newWidth = 480;

    if(sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
    }
  }

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  const resetWidth = () => {
    if(sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty(
        "left",
        isMobile ? "100%" : "240px"
      );
      setTimeout(() => setIsResetting(false), 300);
    }
  }

  const collapse = () => {
    if(sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  }

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "absolute w-6 h-6 transition rounded-sm opacity-0 text-muted-foreground hover:bg-neutral-300 dark:hover:bg-neutral-600 top-3 right-2 group-hover/sidebar:opacity-100",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="w-6 h-6" />
        </div>
        <div>
          <UserItem />
        </div>
        <div className="mt-4">
          {documents?.map((document) => (
            <p key={document._id}>
              {document.title}
            </p>
          ))}
        </div>
        <div 
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="absolute top-0 right-0 w-1 h-full transition opacity-0 cursor-ew-resize bg-primary/10 group-hover/sidebar:opacity-100" 
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="w-full px-3 py-2 bg-transparent">
          {isCollapsed && <MenuIcon onClick={resetWidth}
          role="button" className="w-6 h-6 text-muted-foreground" />}
        </nav>
      </div>
    </>
  );
};
