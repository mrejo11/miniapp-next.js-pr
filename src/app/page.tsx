
import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "./components/profile";

export default async function Home() {
  const session =await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button color="success" type="submit">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button color="success" type="submit">Sign Up</Button>
      </form>
    {
      session?.user?<div>{JSON.stringify(session.user)}</div>:<div>Sighn Out</div>
    }

    <Profile />
    </div>
  );
}
//action ==>send form to what route we must form send 
//type="submit" yani ersal form be adresi k dar action taeen shodeh ast