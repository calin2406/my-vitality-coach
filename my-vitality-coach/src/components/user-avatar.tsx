import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface UserAvatarProps {
  src: string | null;
  name?: string;
  size?: "sm" | "md" | "lg";
}

export function UserAvatar({ src, name, size = "md" }: UserAvatarProps) {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-8 w-8";
      case "md":
        return "h-10 w-10";
      case "lg":
        return "h-16 w-16";
      default:
        return "h-10 w-10";
    }
  };

  const getFallbackSize = () => {
    switch (size) {
      case "sm":
        return "h-4 w-4";
      case "md":
        return "h-5 w-5";
      case "lg":
        return "h-8 w-8";
      default:
        return "h-5 w-5";
    }
  };

  const getInitials = () => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <Avatar className={getSize()}>
      {src && <AvatarImage src={src} alt={name || "Avatar do usuário"} />}
      <AvatarFallback className="bg-primary/10 text-primary">
        {name ? (
          getInitials()
        ) : (
          <User className={getFallbackSize()} />
        )}
      </AvatarFallback>
    </Avatar>
  );
}