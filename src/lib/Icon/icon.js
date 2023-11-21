import { Suspense, useMemo } from 'react';
import { icons } from "./icons";
///*https://medium.com/@mateuszpalka/creating-your-custom-svg-icon-library-in-react-a5ff1c4c704a*/

const arr = Object.keys(icons)
export const IconName = arr.reduce((accumulator, value) => {
  return {...accumulator, [value]: value.toString()};
}, {});

/**
 *
 * @param icon string key icon name
 * @param className string classes for styling
 * @param rotate optional number rotation of the icon
 * @returns Icon react component
 */
export const Icon = ({ icon, className, rotate,size,color, ...rest }) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        width:size,
        height:size,
        fill:color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <Suspense fallback={null}>
        <SvgIcon style={{ width: "100%", height: "100%" }} />
      </Suspense>
    </div>
  );
};