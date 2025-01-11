```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = async () => {
    const success = await router.push('/');
    if (!success) {
      console.error('Failed to navigate');
      // Optionally, add fallback mechanisms or user feedback here
    }
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```