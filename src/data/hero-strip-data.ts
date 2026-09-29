export interface HeroCardData {
  id: string;
  name: string;
  defaultRotateY: number; // In degrees (-22 to +22)
  curveY: number; // In px along parabolic arc
  scaleFactor: number;
}

export const HERO_CARDS_LIST: HeroCardData[] = [
  {
    id: "dashboard-card",
    name: "Dashboard Analytics",
    defaultRotateY: 20,
    curveY: 36,
    scaleFactor: 0.92
  },
  {
    id: "photo-card",
    name: "Performance Revenue",
    defaultRotateY: 13,
    curveY: 18,
    scaleFactor: 0.96
  },
  {
    id: "chart-card",
    name: "Intelligence In Every Decision",
    defaultRotateY: 6,
    curveY: 6,
    scaleFactor: 0.99
  },
  {
    id: "dark-quote-card",
    name: "Expertise Strategy",
    defaultRotateY: 0,
    curveY: 0,
    scaleFactor: 1
  },
  {
    id: "blue-plus-card",
    name: "Datatraining",
    defaultRotateY: -6,
    curveY: 6,
    scaleFactor: 0.99
  },
  {
    id: "stats-card",
    name: "Data Points 520k+",
    defaultRotateY: -13,
    curveY: 18,
    scaleFactor: 0.96
  },
  {
    id: "percentage-card",
    name: "Conversion 4%",
    defaultRotateY: -20,
    curveY: 36,
    scaleFactor: 0.92
  },
  {
    id: "partial-edge-card",
    name: "Global Scale",
    defaultRotateY: -26,
    curveY: 54,
    scaleFactor: 0.88
  }
];
