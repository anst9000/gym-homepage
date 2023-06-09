import { ClassType } from "@/shared/types";
import CarouselItem from "./CarouselItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type CarouselProps = {
  classes: Array<ClassType>;
};

const Carousel = ({ classes }: CarouselProps) => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96"></div>

      {/* Slider controls */}
      <button
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <ChevronLeftIcon className="h-6 w-6 text-gray-500" />

          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <ChevronRightIcon className="h-6 w-6 text-gray-500" />

          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
