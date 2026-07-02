export interface AboutValue {
  title: string;
  description: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export interface About {
  eyebrow: string;
  title: string;
  description: string;
  currentMission: string;
  futureMission: string;
  values: AboutValue[];
  journey: JourneyItem[];
  profileImage: string;
}