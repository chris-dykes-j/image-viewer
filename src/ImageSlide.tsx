import "./ImageSlide.css";

interface ImageProps {
  imagePath: string;
  className: string;
}

function ImageSlide({ imagePath, className }: ImageProps) {
  return (
    <div>
      <img src={imagePath} className={`slideImage ${className}`}/>
    </div>
  );
}
export default ImageSlide;
