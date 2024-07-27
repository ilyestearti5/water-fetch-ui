This Is A Lib For **Manage** Your `UI` Every Time

# Code Exmple

```tsx
import { Button } from "@water-fetch/ui/src/Components/Clicks";
import { startApplication } from "@water-fetch/ui/src";
const app = startApplication(
  <Button
    onClick={() => {
      console.log("Button Clicked");
    }}
  >
    Click Me
  </Button>
);
```
