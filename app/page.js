import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6">Ben's Ticketing System</h1>
      <Card className="py-8 px-4 max-w-[1024px] mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-4">Tickets</h2>
        <div className="space-x-4">
          <Button color="primary" as={Link} href="/create">Submit Ticket</Button>
          <Button color="primary" variant="ghost">Track Ticket Status</Button>
        </div>
      </Card>
      <Card className="py-8 px-4 max-w-[1024px] mx-auto">
        <h2 className="text-xl font-semibold mb-4">Knowledge Base</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Troubleshooting guide"
                className="object-cover"
                height={200}
                src="https://as2.ftcdn.net/v2/jpg/02/90/53/53/1000_F_290535344_c9o3Mnd1vhzCQ0GonZnRK6sGVyTrdar5.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Troubleshooting</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="User guide"
                className="object-cover"
                height={200}
                src="https://as2.ftcdn.net/v2/jpg/02/90/53/53/1000_F_290535344_c9o3Mnd1vhzCQ0GonZnRK6sGVyTrdar5.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">User Guides</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="FAQ section"
                className="object-cover"
                height={200}
                src="https://as2.ftcdn.net/v2/jpg/02/90/53/53/1000_F_290535344_c9o3Mnd1vhzCQ0GonZnRK6sGVyTrdar5.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">FAQs</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Tutorial videos"
                className="object-cover"
                height={200}
                src="https://as2.ftcdn.net/v2/jpg/02/90/53/53/1000_F_290535344_c9o3Mnd1vhzCQ0GonZnRK6sGVyTrdar5.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Tutorials</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Best practices guide"
                className="object-cover"
                height={200}
                src="https://as2.ftcdn.net/v2/jpg/02/90/53/53/1000_F_290535344_c9o3Mnd1vhzCQ0GonZnRK6sGVyTrdar5.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Best Practices</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  View
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Recent updates"
                className="object-cover"
                height={200}
                src="https://as2.ftcdn.net/v2/jpg/02/90/53/53/1000_F_290535344_c9o3Mnd1vhzCQ0GonZnRK6sGVyTrdar5.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Updates</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  View
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/knowledge-base" className="text-blue-500 hover:underline">
            See more
          </Link>
        </div>
      </Card>
    </div>
  );
}
