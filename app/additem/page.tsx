import Review from "./component/review";
import Suggestions from "./component/Suggestions";

const AddItem = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <Review />
      <Suggestions />
      
    </div>
  );
};

export default AddItem;
