import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default function Home() {
  return (
    <>
      <h1>Welcome to my website</h1>
      {/* <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_UP });
        }}
      >
        <Button className="cursor-pointer  bg-white text-black" type="submit">
          Sign out
        </Button>
      </form> */}
    </>
  );
}
