export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
