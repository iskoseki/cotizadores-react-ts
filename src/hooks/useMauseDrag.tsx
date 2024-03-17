export const useDragMouse = (sliderRef) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    isDown = true;
    sliderRef.current.classList.add("active");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!sliderRef.current) return;
    isDown = false;
    sliderRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    if (!sliderRef.current) return;
    isDown = false;
    sliderRef.current.classList.remove("active");
  };
  const handleMouseMove = (e) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return {
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  };
};
