import AdminSidebar from "@/components/AdminSidebar";
import { NextUIProvider, Card } from "@nextui-org/react";
import AuthProvider from "@/app/context/Authprovider";

export default function DashboardLayout({
  children,
}) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <div className="flex flex-row w-full">
          <Card className="w-full md:w-1/6 mr-4">
            <AdminSidebar />
          </Card>
          <main className="w-full md:w-5/6 p-4">{children}</main>
        </div>
      </NextUIProvider>
    </AuthProvider>
  )
}
