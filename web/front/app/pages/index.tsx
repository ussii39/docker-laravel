import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { NextPage } from "next";
import { Counter } from "../features/counter/Counter";
// import { decrement } from "../features/counter/counterSlice";
// import RenderInput from "../RenderInput";
// import FrameWorkList from "../FrameWorkList";
// import UseEffectRender from "../UseEffectRender";
// import MockServer from "../MockServer";
// import Redux from "../Redux";
// import ReduxAsync from "../ReduxAsync";
// import CustomHooks from "../CustomHooks";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const data = [
    { id: 1, item: "React" },
    { id: 2, item: "Vue.js" },
    { id: 3, item: "Angular" },
  ];
  return (
    <>
      <Counter />
      {/* <RenderInput outputConsole={console.log} /> */}
      {/* <FrameWorkList frameworks={data} /> */}
      {/* <MockServer /> */}
      {/* <UseEffectRender /> */}
      {/* <Redux /> */}
      {/* <ReduxAsync /> */}
      {/* <CustomHooks /> */}
    </>
  );
};

export default Home;
