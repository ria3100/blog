export function range(start: number, end?: number): number[] {
  const s = end != null ? start : 0;
  const e = end != null ? end : start;
  const direction = s < e ? 1 : -1;
  const length = Math.abs(e - s);
  const result = Array(length);

  for (let i = 0; i < length; i += 1) {
    result[i] = s + i * direction;
  }

  return result;
}

export function filledRange(start: number, end: number): number[] {
  const length = Math.abs(end + 1 - start);
  const result = Array(length);

  for (let i = 0; i < length; i += 1) {
    result[i] = start + i;
  }

  return result;
}
