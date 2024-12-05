const fadeIn = (direction = 'up', delay = 0, duration = 0.5) => ({
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 100 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
});


export {fadeIn};