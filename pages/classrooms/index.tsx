import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { NextPage } from "next";
import { getClassrooms } from "../api/classrooms";
import { GetServerSideProps } from "next";

import { showNotification } from "../../utils/toastHandler";
import CustomTable from "../../components/organisms/CustomTable";

const ClassroomPage: NextPage = (props: any) => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (props.data) {
      const { data } = props;
      console.log(data);
      setClassrooms(data);
    } else {
      showNotification({
        message: "Classrooms can't be loaded at the moment.",
        type: "error",
      });
    }

    setLoading(false);
  }, [props]);

  const classroomsTable =
    classrooms.length > 0 ? (
      <CustomTable headers={["name", "description"]} data={classrooms} />
    ) : (
      <p>No classrooms found</p>
    );

  return (
    <>
      <div>
        <h1>Classrooms</h1>
      </div>
      <div className="container">
        {loading ? <p>Loading...</p> : classroomsTable}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data: Classroom[] = await getClassrooms();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: {
        error: error.toString(),
      },
    };
  }
};
export default ClassroomPage;
