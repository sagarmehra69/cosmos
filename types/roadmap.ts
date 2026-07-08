export type RoadmapStatus =
  | "completed"
  | "current"
  | "learning"
  | "future";

export interface RoadmapItem {
  title: string;
  status: RoadmapStatus;
  progress: number;
}