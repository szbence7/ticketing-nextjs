import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Card, CardBody } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <div className="dashboard-content grid grid-cols-3 gap-4">
      <div className="col-span-2 slot-1 mb-4">
        <Card>
          <CardBody>
            <h3>Welcome to Your Dashboard</h3>
            <p>Here you can view your latest statistics and updates.</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <div className="slot-2 mb-4">
          <Card>
            <CardBody>
              <h3>Recent Activity</h3>
              <p>You have 3 new notifications and 2 pending tasks.</p>
            </CardBody>
          </Card>
        </div>
        <div className="slot-3">
          <Card>
            <CardBody>
              <h3>Quick Links</h3>
              <p>Access your profile, settings, and help center here.</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

