import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
     <div>
      <Button success rounded outline><GoBell/>Click Me!</Button>
     </div>
     <div>
      <Button danger ><GoCloudDownload/>Buy Now!</Button>
     </div>
     <div>
      <Button warning rounded><GoCloudDownload/>See Deal!</Button>
     </div>
     <div>
      <Button secondary >Hide Ads!</Button>
     </div>
     <div>
      <Button primary rounded>Something!</Button>
     </div>
     
    </div>
  );
}

export default App;
