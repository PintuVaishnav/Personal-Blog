type CategoryColors = Map<string, [string, string]>;

const categoryColors: CategoryColors = new Map([
  ['DevOps', ['bg-pink-200 dark:bg-pink-900', 'bg-pink-500/80']],
  ['Projects', ['bg-green-200 dark:bg-green-900', 'bg-green-500/80']],
  ['Learning', ['bg-yellow-200 dark:bg-yellow-900', 'bg-yellow-500/80']],
  ['Tech Tips', ['bg-blue-200 dark:bg-blue-900', 'bg-blue-500/80']],
  ['Cloud', ['bg-purple-200 dark:bg-purple-900', 'bg-purple-500/80']],
  ['Coding', ['bg-red-200 dark:bg-red-900', 'bg-red-500/80']],
]);

export const categories: string[] = Array.from(categoryColors.keys());

export function getCategoryColors(category: string): [string, string] {
  const colorTuple: [string, string] | undefined = categoryColors.get(category);
  return colorTuple ?? ['bg-cyan-200 dark:bg-cyan-900', 'bg-cyan-500/80'];
}
