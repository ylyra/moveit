import { createContext, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

interface UserData {
  email?: string | null;
  image?: string | null;
  name?: string | null;
}

interface UserContextData {
  user: UserData;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [session, loading] = useSession();
  const [user, setUser] = useState({} as UserData);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    } else if (!loading && session) {
      setUser(session.user);
    }
  }, [loading]);

  const valueProvider = {
    user,
  };

  return (
    <UserContext.Provider value={valueProvider}>
      {children}
    </UserContext.Provider>
  );
}
