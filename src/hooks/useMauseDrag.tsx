export const useDragMouse = (sliderRef) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDrag = (pageX) => {
    if (!sliderRef.current) return;
    isDown = true;
    sliderRef.current.classList.add("active");
    startX = pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const stopDrag = () => {
    if (!sliderRef.current) return;
    isDown = false;
    sliderRef.current.classList.remove("active");
  };

  const drag = (pageX) => {
    if (!isDown || !sliderRef.current) return;
    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseDown = (e) => {
    startDrag(e.pageX);
  };

  const handleMouseLeave = stopDrag;

  const handleMouseUp = stopDrag;

  const handleMouseMove = (e) => {
    drag(e.pageX);
  };

  const handleTouchStart = (e) => {
    startDrag(e.touches[0].pageX);
  };

  const handleTouchEnd = stopDrag;

  const handleTouchMove = (e) => {
    drag(e.touches[0].pageX);
  };

  return {
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  };
};
