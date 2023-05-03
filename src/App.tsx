import ImageSlide from "./ImageSlide";
import "./App.css";

function App() {

  const imageSources: Array<string> = [
    'images/Fe5sYsdUoAAujyH.jpg',
    'images/qgkm3w0yc7ca1.jpg',
//    'images/S1_8mdEyrUItFP1ZkVv8njgZ69movMqOM-b_tcv_tGE.webp',
//    'images/dVbbJ4K.jpeg',
//    'images/Fe5sYsdUoAAujyH.jpg',
  ];

  return (
      <div className="imageContainer">
        {imageSources.map((src, index) => (
          <ImageSlide key={index} imagePath={src} className=""/>
        ))}
      </div>
  );
}

export default App;
