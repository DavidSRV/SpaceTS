export interface IDestination {
  destination: {
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  }[];
  position?: number[];
}

export interface Iposition {
  position1: number;
  position2: number;
}

export type IpositionContextType = {
  numbers: Iposition;
  setNumbers: React.Dispatch<React.SetStateAction<Iposition>>;
};
