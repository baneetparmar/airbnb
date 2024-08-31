"use client";
import useSignupModal from "@/app/hooks/useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
  const signupModal = useSignupModal();
  const content = (
    <>
      <form action="" className="space-y-4">
        <input
          type="email"
          name="email"
          id=""
          placeholder="abc@mail.com"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "
        />
        <input
          type="password"
          name="passwd"
          id=""
          placeholder="enter password..."
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "
        />
        <input
          type="password"
          name="passwd"
          id=""
          placeholder="confirm password..."
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          TODO: error msg here
        </div>
        <CustomButton
          label="Submit"
          onClick={() => console.log("submit form")}
        />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign Up"
      content={content}
    />
  );
};

export default SignupModal;
