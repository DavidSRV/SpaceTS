import { RefObject } from "react";

type Refs = {
  [key: string]: RefObject<HTMLElement>;
};

type UseSelectOnClickProps = {
  refs: Refs;
};

const useSelectOnClick = ({ refs }: UseSelectOnClickProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    let select = e.currentTarget.className;

    Object.entries(refs).forEach(([key, ref]) => {
      if (select === key && ref.current) {
        ref.current.classList.add("--select");
      } else if (ref.current) {
        ref.current.classList.remove("--select");
      }
    });
  };

  return handleClick;
};

export default useSelectOnClick;
