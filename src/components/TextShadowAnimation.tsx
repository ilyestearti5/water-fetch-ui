export interface TextShadowAnimationProps {
  content?: string;
  time?: number;
}

export const TextShadowAnimation = ({ content = " ", time = 1000 }: TextShadowAnimationProps) => {
  return (
    <span>
      <span>{content}</span>
    </span>
  );
};
