import { Button } from "../ui/button";

export default function CtaSectionComponent() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-rose-800  to-rose-600 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100">
              Schedule a Call and Take the First Step Toward Success.
            </p>
          </div>
          <Button className="flex items-center gap-2  font-semibold py-4 px-8 transition-all duration-500">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
