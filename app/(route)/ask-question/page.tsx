import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <h1>page ask-questions</h1>
        <UserButton afterSignOutUrl="/"/>
    </div>  
  );
}