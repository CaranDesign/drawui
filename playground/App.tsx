import { DrawuiButton, DrawuiCard } from "../src/components";

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <DrawuiCard>
        <DrawuiButton fillStyle='zigzag-line' size="lg">DrawUI Button</DrawuiButton>
        <DrawuiButton fillStyle='zigzag-line' size="lg">DrawUI Button</DrawuiButton>
        <DrawuiButton fillStyle='zigzag-line' size="lg">DrawUI Button</DrawuiButton>
        <DrawuiButton fillStyle='zigzag-line' size="lg">DrawUI Button</DrawuiButton>
        <DrawuiButton fillStyle='zigzag-line' size="lg">DrawUI Button</DrawuiButton>
        <DrawuiButton fillStyle='zigzag-line' size="lg">DrawUI Button</DrawuiButton>
      </DrawuiCard>
    </div>
  )
}
