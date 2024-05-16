import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { Heroes } from "@/components/heroes";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-full dark:bg-[#1f1f1f]">
      <div className="flex flex-col items-center justify-center flex-1 px-6 pb-10 text-center md:justify-start gap-y-8">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
