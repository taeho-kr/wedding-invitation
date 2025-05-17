import { useEffect, useRef, useState } from "react";
import WeddingSVG from "../assets/icons/wedding.svg";

export function Header() {
  const [translate, setTranslate] = useState<number>(0);
  const $translate = useRef<number>(0);
  const lastScrollUp = useRef<number>(0);
  const prev = useRef<number>(window.scrollY);
  const [top, setTop] = useState<number>(0);

  const [dday, setDday] = useState<number>(0);
  const weddingDay = new Date("2025-10-25T14:30:00+09:00");

  useEffect(() => {
    calculateDday();
    const interval = setInterval(calculateDday, 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateDday = () => {
    const now = new Date();
    const diff = weddingDay.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDday(days);
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  const detectScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > prev.current) {
      // scrolling down
      const diff = scrollY - lastScrollUp.current;
      const newTranslate = Math.min(80, diff);
      setTranslate(newTranslate);
      $translate.current = newTranslate;
    } else {
      // scrolling up
      const diff = prev.current - scrollY;
      lastScrollUp.current = scrollY;
      if (diff > 30) setTranslate(0);
      if (scrollY < 60) {
        setTranslate(Math.min(scrollY, $translate.current));
      }
    }

    prev.current = scrollY;
    setTop(scrollY);
  };

  return (
    <header
      className="w-full flex flex-row justify-between items-center sticky top-0 bg-black p-2 z-[999]"
      style={{
        transform: `translateY(-${translate}px)`,
        transition: top > 60 ? "transform 0.15s ease-in-out" : "",
      }}
    >
      <img src={WeddingSVG} className="h-12" />
      <span className="mr-2 font-semibold">
        {dday === 0 ? "D-Day" : dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`}
      </span>
    </header>
  );
}
