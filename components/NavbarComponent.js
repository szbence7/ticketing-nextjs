import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Link } from "@nextui-org/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

const NavbarComponent = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">Ben's Ticketing System</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          {session && (
            <Link href="/admin">Admin</Link>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session ? (
          <>
            <NavbarItem className="flex items-center">
              <Avatar
                src={session.user.image}
                size="sm"
                className="mr-2"
              />
              <span>Welcome, {session.user.name}</span>
            </NavbarItem>
            <NavbarItem>
              <Link href="/api/auth/signout">
                <Button color="primary" variant="flat">
                  Logout
                </Button>
              </Link>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Link href="/api/auth/signin">
              <Button color="primary" variant="flat">
                Login
              </Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
