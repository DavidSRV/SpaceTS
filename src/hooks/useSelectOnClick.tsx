import { RefObject, useState } from "react";

type Refs = {
  [key: string]: RefObject<HTMLElement>;
};

type UseSelectOnClickProps = {
  refs: Refs;
};

const useSelectOnClick = ({ refs }: UseSelectOnClickProps) => {
  const [selectedRef, setSelectedRef] = useState<RefObject<HTMLElement> | null>(
    null
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => {
    let select = e.currentTarget.className;

    Object.entries(refs).forEach(([key, ref]) => {
      if (select === key && ref.current) {
        setSelectedRef(ref);
      }
    });
  };

  Object.values(refs).forEach((ref) => {
    if (ref.current) {
      if (ref === selectedRef) {
        ref.current.classList.add("--select");
      } else {
        ref.current.classList.remove("--select");
      }
    }
  });

  return handleClick;
};

export default useSelectOnClick;
