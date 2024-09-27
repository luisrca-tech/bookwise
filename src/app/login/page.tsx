import Image from "next/image";
import { Button } from "../_components/Button";
import githubIcon from "/public/images/githubIcon.png";
import googleIcon from "/public/images/googleIcon.png";
import loginImage from "/public/images/loginImage.png";
import rocketIcon from "/public/images/rocketIcon.png";

export default function LoginPage() {
  return (
    <main className="bg-gray-800">
      <div className="flex gap-[12.875rem]">
        <Image
          className="max-h-screen p-5"
          src={loginImage}
          alt="A image to presentation bookwise app"
        />
        <div className="flex w-[23.25rem] flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col items-start justify-start">
            <h1 className="text-lg text-gray-100">Welcome!</h1>
            <p className="text-sm text-gray-200">
              Sign in or acess as a visitant to continue
            </p>
          </div>
          <div className="flex w-full flex-col gap-4">
            <Button icon={googleIcon} alt="Google icon">
              Sign in with Google
            </Button>
            <Button icon={githubIcon} alt="Github icon">
              Sign in with Github
            </Button>
            <Button icon={rocketIcon} alt="Rocket icon">
              Sign in as a visitor
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
