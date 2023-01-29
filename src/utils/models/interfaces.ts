export interface IDestination {
  destination: {
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  }[];
}

export interface ICrew{
  crew: {
    images:{png:string, webp:string}
    name:string,
    role:string,
    bio:string
  }[]
}


export interface Idata {
  info:{
    destination: {
      name: string;
      desciption: string;
      distance: string;
      travel: string;
    }[],
    crew: {
      name: string;
      role: string;
      bio: string;
    }[],
    technology: {
      name: string;
      description: string;
    }[]
    
  }
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
