import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <div className="dashboard-content grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-2 slot-1 mb-4">
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold">Welcome to Your Dashboard</h3>
            <p className="text-sm">Here you can view your latest statistics and updates.</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <div className="slot-2 mb-4">
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold">Newest tickets</h3>
              <p className="text-sm">You have 3 new notifications and 2 pending tasks.</p>
            </CardBody>
          </Card>
        </div>
        <div className="slot-3">
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <p className="text-sm">Access your profile, settings, and help center here.</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
