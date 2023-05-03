import "./ImageSlide.css";

interface ImageProps {
  imagePath: string;
}

function ImageSlide({ imagePath }: ImageProps) {
  return (
    <div>
      <img src={imagePath} className="slideImage" />
    </div>
  );
}
export default ImageSlide;
