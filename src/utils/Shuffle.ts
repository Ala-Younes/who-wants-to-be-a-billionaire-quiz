// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shuffle<T extends any[]>(array: T) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default shuffle;
