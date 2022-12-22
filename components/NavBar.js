import React /* useEffect, useState */ from "react";
import { useUser } from "../hooks/userHook";
import Link from "next/link";
import { fetchJson } from "../lib/api";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const user = useUser();
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const user = await fetchJson("api/user");
  //       setUser(user);
  //     } catch (error) {
  //       // not logged in
  //     }
  //   })();
  // }, []);
  console.log(user);
  const handleLogout = async () => {
    await fetchJson("/api/logout");
    //  setUser(undefined);
    toast.success("Logout successfully");
  };
  return (
    <nav className="py-1 text-sm px-20">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1"></li>
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
