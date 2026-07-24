/**
 * - Відображає текст з поточним значенням count
 * - Рендериться у App
 */

interface CountDisplayProps {
  clicks: number
}

export default function CountDisplay({ clicks }: CountDisplayProps) {
  console.log('Render Count display')
  return <div>The current counter value is {clicks}</div>;
}
