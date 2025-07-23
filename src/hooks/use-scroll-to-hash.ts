import {  useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useHashScroll = (sectionId: string) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement | null>(null);

  const hashFromUrl = decodeURIComponent(location.hash.slice(1));

  useEffect(() => {
    if (hashFromUrl === sectionId) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hashFromUrl, sectionId]);


  return {
    ref,
  };
};