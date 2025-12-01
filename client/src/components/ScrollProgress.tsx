import React, { useEffect, useState } from "react";

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = (scrollTop / docHeight) * 100;
      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "60px", // altura do seu header — ajuste se necessário
        left: 0,
        width: progress + "%",
        height: "4px",
        background: "linear-gradient(90deg, #ff1e99, #ff74d4)",
        zIndex: 9999,
        transition: "width 0.1s ease-out",
      }}
    />
  );
};

export default ScrollProgress;
