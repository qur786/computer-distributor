export function Loader({
  color,
  hidden = false,
}: {
  color?: string;
  hidden?: boolean;
}): JSX.Element {
  return (
    <span
      className="box-border rounded-full size-5 border-4 animate-spin"
      style={{
        borderColor: color ? `${color}40` : "#ff3d0040",
        borderBottomColor: color ?? "#ff3d00",
        visibility: hidden ? "hidden" : "visible",
      }}
    ></span>
  );
}
