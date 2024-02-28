export function Loader({ color }: { color?: string }): JSX.Element {
  return (
    <span
      className="box-border rounded-full size-5 border-4 animate-spin"
      style={{
        borderColor: color ? `${color}40` : "#ff3d0040",
        borderBottomColor: color ?? "#ff3d00",
      }}
    ></span>
  );
}
