import { NextPage } from "next";
import Student from "types/student";
import { getStudents } from "../api/student";
import { GetServerSideProps } from "next";
import { showNotification } from "../../utils/toastHandler";
import { useEffect, useState } from "react";
import StudentsCustomTable from "@/components/organisms/StudentsCustomTable";

const StudentPage: NextPage = ({ data }: any) => {
  const [students, setStudents] = useState<Student[]>(data);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (!data) {
      showNotification({
        message: "Students can't be loaded at the moment.",
        type: "error",
      });
    }

    setLoading(false);
  }, [data]);

  const deleteStudentAction = (id: string) => {
    console.log(`inside delete with id: ${id}`);
  };
  const getSelectedRowData = (data: Object) => {
    console.log(data);
  };

  const studentsTable =
    students?.length > 0 ? (
      <StudentsCustomTable
        headers={["name", "1st surname", "2nd surname", "contact nº", "email"]}
        data={students}
        deleteFn={deleteStudentAction}
        getSelectedRowData={getSelectedRowData}
        hasOptions={true}
      />
    ) : (
      <p>No students found</p>
    );

  return (
    <>
      <h1>Student Page</h1>
      {loading ? <p>Loading...</p> : <div>{studentsTable}</div>}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const data: Student[] = await getStudents();
    console.log({ receivedData: data });
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

export default StudentPage;
