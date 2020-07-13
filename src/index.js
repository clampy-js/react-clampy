import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import * as clampy_ from "@clampy-js/clampy/dist/clampy.umd.js";
import * as elementResizeDetectorMaker_ from "element-resize-detector";

const elementResizeDetectorMaker =
  elementResizeDetectorMaker_.default || elementResizeDetectorMaker_;
const clampy = clampy_.default || clampy_;

function Clampy(props) {
  const [opacity, setOpacity] = useState(0);
  let containerRef = useRef(null);
  let initialContent;
  if (!initialContent) {
    initialContent = props.children;
  }

  let resizeDetector = elementResizeDetectorMaker({ strategy: "scroll" });

  const onResize = useCallback(() => {
    truncate();
  }, [truncate]);

  const truncate = useCallback(() => {
    const options = {
      clamp: props.clampSize,
      truncationChar: props.truncationChar,
      splitOnChars: props.splitOnChars,
      // truncationHTML: truncationHTML,
      // Clampy will try to use native clamp if available in the browser
      // however this can leads to unexpected results so we need to explicitely
      // disable it.
      useNativeClamp: false
    };

    if (initialContent && containerRef.current) {
      containerRef.current.innerHTML = initialContent;
    }
    if (containerRef.current) {
      setOpacity(0);
      clampy.clamp(containerRef.current, options);
      setOpacity(1);
    }
  }, [initialContent, props.clampSize, props.truncationChar, props.splitOnChars]);

  useEffect(() => {
    truncate();

    resizeDetector.listenTo(containerRef.current, () => {
      truncate();
    });

    window.addEventListener("resize", onResize);

    return () => {
      //   cleanup
      // eslint-disable-next-line react-hooks/exhaustive-deps
      resizeDetector.removeAllListeners(containerRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [containerRef, onResize, resizeDetector, truncate]);

  return React.createElement(
    "div",
    {
      ref: containerRef,
      style: { opacity: opacity }
    },
    props.children
  );
}

Clampy.propTypes = {
  children: PropTypes.node,
  clampSize: PropTypes.string,
  truncationChar: PropTypes.string,
  splitOnChars: PropTypes.array
};

Clampy.defaultProps = {
  clampSize: "auto", // Default clamp size based on available height
  truncationChar: "…",
  splitOnChars: ['.', '-', '–', '—', ' '],
  // truncationHTML: ''
};

export default Clampy;
