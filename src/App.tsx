import ImageSlide from "./ImageSlide";
import "./App.css";

function App() {

  const imageSources: Array<string> = [
    'images/Fe5sYsdUoAAujyH.jpg',
    // 'images/qgkm3w0yc7ca1.jpg',
    // 'images/dVbbJ4K.jpeg',
    // 'images/S1_8mdEyrUItFP1ZkVv8njgZ69movMqOM-b_tcv_tGE.webp',
  ];

  return (
      <div className="imageContainer">
        {imageSources.map((src, index) => (
          <ImageSlide key={index} imagePath={src} />
        ))}
      </div>
  );
}

export default App;
