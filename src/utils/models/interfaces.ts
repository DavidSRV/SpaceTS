export interface IDestination {
  destination: {
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  }[];
}

export interface ICrew {
  crew: {
    images: { png: string; webp: string };
    name: string;
    role: string;
    bio: string;
  }[];
}

export interface Idata {
    destinations: {
        name: string;
        images: {
            png: string;
        };
        description: string;
        distance: string;
        travel: string;
    }[];
    crew: {
        name: string;
        images: {
            png: string;
        };
        role: string;
        bio: string;
    }[];
    technology: {
        name: string;
        images: {
          portrait:string;
          landscape:string
        };
        description: string;
    }[];
}


export interface Iposition {
  position: {
    position1: number | undefined;
    position2: number | undefined;
  };
}

export type IpositionContextType = {
  numbers: Iposition["position"];
  info:Idata
  setNumbers: React.Dispatch<
    React.SetStateAction<{
      position1: number | undefined;
      position2: number | undefined;
    }>
  >;
};
