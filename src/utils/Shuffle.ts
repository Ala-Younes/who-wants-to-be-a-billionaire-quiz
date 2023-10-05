type ShuffleFunction<T> = (array: T[]) => T[];

const shuffle: ShuffleFunction<any> = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default shuffle;
