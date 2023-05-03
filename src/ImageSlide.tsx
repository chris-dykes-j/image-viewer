import "./ImageSlide.css"; 

interface ImageProps {
  imagePath: string;
}

function ImageSlide({ imagePath }: ImageProps) {

  return (
    <div className="imageContainer">
      <img src={imagePath} className="slideImage" />
    </div>
  );
}

export default ImageSlide;
