'use client';
import { useEffect, useRef } from 'react';

export const useAutoScroll = (delay = 500) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 延遲執行，確保頁面完全載入
    const timer = setTimeout(() => {
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      
      // 如果內容高度大於容器高度，才執行動畫
      if (scrollHeight > clientHeight) {
        // 先滾動到 25% 的位置
        const targetScroll = scrollHeight * 0.25;
        
        // 快速滾動到目標位置
        container.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });

        // 0.8秒後滾動回頂部
        setTimeout(() => {
          container.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 800);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return containerRef;
}; 