// interface Iimages {
//   png: string;
//   webp: string;
// }

// interface IimagesTechno {
//   portrait: string;
//   landscape: string;
// }

// interface Idestinations {
//   name: string;
//   images: Iimages;
//   description: string;
//   distance: string;
//   travel: string;
// }

// export interface Icrew {
//   name: string;
//   images: Iimages;
//   role: string;
//   bio: string;
// }

// interface Itechnology {
//   name: string;
//   images: IimagesTechno;
//   description: string;
// }

export interface Iinfo {
  info: {
    destinations: {
      name: string;
      images: {
        png: string;
        webp: string;
      };
      description: string;
      distance: string;
      travel: string;
    }[];
    crew: {
      name: string;
      images: {
        png: string;
        webp: string;
      };
      role: string;
      bio: string;
    }[];
    technology:{
        name: string,
        images: {
          portrait: string,
          landscape: string
        },
        description: string
    }[]
  };
}
