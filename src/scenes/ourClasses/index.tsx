import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { classes } from "@/data/data";
import Class from "./Class";
import HText from "@/shared/HText";
// import Carousel from "./Carousel";
import { Carousel } from "@material-tailwind/react";

type ClassesProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: ClassesProps) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg px-6 md:h-96 md:px-14">
          <Carousel className="rounded-xl">
            {classes.map((item) => (
              <img
                key={item.name}
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            ))}
          </Carousel>
        </div>

        {/* <Carousel classes={classes} /> */}
      </motion.div>
    </section>
  );
};

export default OurClasses;
