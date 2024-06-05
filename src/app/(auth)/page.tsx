import Image from "next/image";
import Container from "@/components/global/Container";
import FormPageLogin from "./_components/FormPageLogin";

const LoginPage = () => {
  return (
    <div className="relative w-full">
      <Image
        src={"/Banner-01.jpg"}
        width={2430}
        height={1080}
        alt="Banner Página login"
        className="w-full absolute top-0 left-0 -z-10 select-none opacity-75 hidden md:block"
      />

      <Container>
        <div className="w-full h-[70vh] flex items-center justify-center">
          <FormPageLogin/>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
