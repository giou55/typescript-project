const text = "world";

export function hello(t: string = text): string {
  return `Hello ${t}! `;
}

console.log(hello("George"));
