/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import cx from "classnames";

export const CursorContext = React.createContext("cursorContext");

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left'];

const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(false);

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  const { x, y } = mousePosition;

  const onCursor = cursorType => {
    cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
  };

  return (
    <CursorContext.Provider value={{ onCursor }}>
        <div  className={cx('movable', {
          'active': !!cursor,
          [`cursor-${cursor}`]: !!cursor
        })}
        style={{
          left: `${x}px`,
          top: `${y}px`
        }}>
          <div className="inner"></div>
        </div>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
