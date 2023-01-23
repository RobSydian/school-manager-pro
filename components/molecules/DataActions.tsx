// import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

type Props = {
  id: string;
  editable: boolean;
  deletable: boolean;
  //   editFn: (id: string) => {};
  deleteFn: (id: string) => void;
};

export default function DataActions({
  id,
  //   editable = true,
  deletable = true,
  //   editFn,
  deleteFn,
}: Props) {
  return (
    <div className="actions-container">
      {/* {editable && (
        <span onClick={() => editFn(id)}>
          <FiEdit2 />
        </span>
      )} */}
      {deletable && (
        <span onClick={() => deleteFn(id)}>
          <AiFillDelete />
        </span>
      )}
    </div>
  );
}
