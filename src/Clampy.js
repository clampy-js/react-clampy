/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import * as clampy_ from "@clampy-js/clampy/dist/clampy.umd.js";
import * as elementResizeDetectorMaker_ from "element-resize-detector";

const elementResizeDetectorMaker =
  elementResizeDetectorMaker_.default || elementResizeDetectorMaker_;

function Clampy(props) {
  let resizeDetector = elementResizeDetectorMaker({ strategy: 'scroll' });

  const onResize = () => {
    truncate();
  };

  const truncate = () => {
    setOpacity(0);
    const clampy = clampy_.default || clampy_;
    const options = {
      clamp: props.clampSize,
      truncationChar: props.truncationChar,
      // truncationHTML: truncationHTML,
      // Clampy will try to use native clamp if available in the browser
      // however this can leads to unexpected results so we need to explicitely
      // disable it.
      useNativeClamp: false
    };

    if (initialContent) {
      containerRef.current.innerHTML = initialContent;
    }
    clampy.clamp(containerRef.current, options);
    setOpacity(1);
  };

  const [opacity, setOpacity] = useState(0);
  let containerRef = useRef(null);
  let initialContent;
  if (!initialContent) {
    initialContent = props.children;
  }

  useEffect(() => {
    truncate();

    resizeDetector.listenTo(containerRef.current, () => {
      truncate();
    });

    window.addEventListener("resize", onResize);

    return () => {
      //   cleanup
      resizeDetector.removeAllListeners(containerRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [initialContent, props, truncate, onResize, resizeDetector]);
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
  truncationChar: PropTypes.string
};

Clampy.defaultProps = {
  clampSize: "auto", // Default clamp size based on available height
  truncationChar: "…"
  // truncationHTML: ''
};

export default Clampy;
