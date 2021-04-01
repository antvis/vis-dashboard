import React, { useRef, useEffect } from 'react';
import { Plot, G2 } from '@antv/g2plot';

type Props<O> = {
  Ctor: new (dom: HTMLDivElement, options: Partial<O>) => Plot<O>;
  options: Partial<O>;
  onReady?: (P: Plot<O>) => void;
  className?: string;
  style?: object;
};

export function UseG2Plot<O>({
  className,
  Ctor,
  options,
  style = {},
  onReady,
}: Props<O>) {
  const container = useRef<HTMLDivElement>();
  const plotRef = useRef<Plot<O>>();

  const listenEvents = () => {
    if (plotRef.current) {
      plotRef.current.on(G2.VIEW_LIFE_CIRCLE.AFTER_RENDER, () => {
        onReady && onReady(plotRef.current);
      });
    }
  };

  useEffect(() => {
    if (plotRef.current) {
      plotRef.current.destroy();
    }
    if (container.current) {
      const plot = new Ctor(container.current, options);
      plot.render();
      plotRef.current = plot;
      listenEvents();
    }
  }, [container]);

  useEffect(() => {
    if (plotRef.current) {
      plotRef.current.update(options);
    }
  }, [options]);

  return <div className={className} ref={container} style={style} />;
}
