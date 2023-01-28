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
  position: {
    position1: number | undefined;
    position2: number | undefined;
  };
}

export type IpositionContextType = {
  numbers: Iposition["position"];
  setNumbers: React.Dispatch<
    React.SetStateAction<{
      position1: number | undefined;
      position2: number | undefined;
    }>
  >;
};
