This Is A Lib For **Manage** Your `UI` Every Time

# Code Exmple

```jsx
// define a Button
import { Button } from "@water-fetch/ui";
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

accept `firebase` config from single project detected
