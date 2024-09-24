import AdminSidebar from "@/components/AdminSidebar";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "@/app/context/Authprovider";

export default function DashboardLayout({
  children,
}) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <div className="flex w-full">
          <aside className="w-64 min-h-screen bg-gray-100 p-4">
            <AdminSidebar />
          </aside>
          <main className="flex-1 p-4">{children}</main>
        </div>
      </NextUIProvider>
    </AuthProvider>
  )
}
