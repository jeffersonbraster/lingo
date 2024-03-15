import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1 className="text-green-300">oi</h1>
    <Button>hello world</Button>
    <Button variant="primary">hello world</Button>
    <Button variant="primaryOutline">hello world</Button>

    <Button variant="secondary">hello world</Button>

    <Button variant="secondaryOutline">hello world</Button>

    <Button variant="danger">hello world</Button>

    <Button variant="dangerOutline">hello world</Button>

    <Button variant="super">hello world</Button>

    <Button variant="superOutline">hello world</Button>

    <Button variant="ghost">hello world</Button>

    <Button variant="sidebar">hello world</Button>

    <Button variant="sidebarOutline">hello world</Button>
   </div>
  );
}
