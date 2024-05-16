import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";

const Documents = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Rotion
      </h2>
      <Button>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default Documents;
