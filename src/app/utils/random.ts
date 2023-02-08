export function randomChoice<T>(array: T[]): T {
  let index = Math.floor(array.length * Math.random());
  return array[index];
}

export function randomSample<T>(array: T[], size: number): T[] {
  const copy = array.slice();
  const sample = [];
  for (let i = 0; i < size; i++) {
    let index = Math.floor(Math.random() * copy.length);
    sample.push(copy[index]);
    copy.splice(index, 1);
  }
  return sample;
}

export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
