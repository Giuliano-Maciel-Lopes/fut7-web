import { StepCarouselBase } from "./setcarroselbase";

type Props = {
  text: string[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
};

export function StepCarouselText({ text, currentIndex, setCurrentIndex }: Props) {
  return (
    <StepCarouselBase
      length={text.length}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    >
      <div className="w-full flex justify-center items-center">
        <div className="text-heading-lg truncate max-w-[200px] md:max-w-[700px] text-center">
          {text[currentIndex]}
        </div>
      </div>
    </StepCarouselBase>
  );
}
