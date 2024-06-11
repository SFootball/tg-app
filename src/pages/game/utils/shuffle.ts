type ballObj = {
  id: number;
  src: string;
  display: string;
  left: number | undefined;
  top: number | undefined;
};

export function shuffle(array: ballObj[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
