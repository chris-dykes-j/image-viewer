import ImageSlide from "./ImageSlide";
import "./App.css";
import img from '/home/chris/coding/image-viewer/public/images/dVbbJ4K.jpeg';
import { open } from "@tauri-apps/api/dialog";

function App() {

  let imageSources: Array<string> = [
    'images/Fe5sYsdUoAAujyH.jpg',
    'images/Fe5sYsdUoAAujyH.jpg',
//    'images/Fe5sYsdUoAAujyH.jpg',
    'images/Fe5sYsdUoAAujyH.jpg',
//    img, // works!
  ];

  return (
      <>
        <div className="imageContainer columnView">
          {imageSources.map((src, index) => (
            <ImageSlide key={index} imagePath={src} className=""/>
          ))}
        </div>
      </>
  );
}

export default App;
