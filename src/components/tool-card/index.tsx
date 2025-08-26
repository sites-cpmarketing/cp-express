import Image from "next/image";
import { MoreVertical, Plus } from "lucide-react";
import styles from "./tool-card.module.css";
import { cn } from "@/lib/utils";

type ToolCardProps = {
  color: "green" | "orange" | "red" | "blue";
  title: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
};

export function ToolCard({ color, title, description, progress, icon }: ToolCardProps) {
  return (
    <div className={cn(styles.card, styles[color])}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <MoreVertical className="cursor-pointer" />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
