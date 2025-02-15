"use client";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as action from "@/actions";
   
export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else {
    if (session.data?.user) {
      authContent = (
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.data.user.image || ""} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={action.signOut}>
                <Button type="submit">Sing Out</Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      );
    } else {
      authContent = (
        <>
          <NavbarItem>
            <form action={action.signIn}>
              <Button type="submit" color="secondary" variant="bordered">
                SignIn
              </Button>
            </form>
          </NavbarItem>

          <NavbarItem>
            <form action={action.signIn}>
              <Button type="submit" color="primary" variant="flat">
                SignUp
              </Button>
            </form>
          </NavbarItem>
        </>
      );
    }
  }

  return authContent;
}
