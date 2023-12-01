import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="padding-x sm:py-32 py-13 w-full max-container max-lg:flex-col flex gap-3"
    >
      <div>
        <h1 className="font-montserrat text-4xl font-bold">
          Sign Up for
          <span className="text-coral-red"> Updates </span>& Newsletter
        </h1>
      </div>
      <div className="sm:w-[600px] w-auto flex-wrap h-fit border-2 rounded-full p-2 border-coral-red mt-6 flex justify-between items-center">
        <span className="info-text text-[2px]">Subscribe@nike.com</span>
        <Button label="Sign-Up" />
      </div>
    </section>
  );
};

export default Subscribe;
