type CarouselItemProps = {
  name: string;
  image: string;
};

const CarouselItem = ({ name, image }: CarouselItemProps) => {
  return (
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img
        src={image}
        className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
        alt={name}
      />
    </div>
  );
};

export default CarouselItem;
