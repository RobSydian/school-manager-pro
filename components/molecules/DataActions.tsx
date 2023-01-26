// import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";
import StyledDataActions from "../styles/molecules/StyledDataActions";

type Props = {
  id: string;
  deletable: boolean;
  editable: boolean;
  displayData: () => {};
  deleteFn: (id: string) => void;
};

export default function DataActions({
  id,
  deletable = true,
  editable = true,
  displayData,
  deleteFn,
}: Props) {
  const iconSize = "1.5em";
  return (
    <StyledDataActions>
      {editable && (
        <span onClick={displayData}>
          <AiOutlineSearch size={iconSize} className="searchIcon" />
        </span>
      )}
      {deletable && (
        <span onClick={() => deleteFn(id)}>
          <AiFillDelete size={iconSize} className="deleteIcon" />
        </span>
      )}
    </StyledDataActions>
  );
}
