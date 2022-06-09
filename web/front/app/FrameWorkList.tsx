import React, { useEffect } from "react";

const FrameWorkList = (props: any) => {
  useEffect(() => {
    console.log(props.frameworks);
  }, []);
  if (!props.frameworks || !props.frameworks.length) {
    return <h1> No data !</h1>;
  }
  return (
    <div>
      <ul>
        {props.frameworks.map(({ item, id }: { item: string; id: number }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameWorkList;
