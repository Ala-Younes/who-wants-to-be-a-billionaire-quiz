const delay = (duration: number, callback: () => void) => {
  setTimeout(() => {
    callback();
  }, duration);
};

export default delay;
