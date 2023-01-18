import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { NextPage } from "next";
import { getClassrooms } from "../api/classrooms";
// import Notification from "../../components/molecules/Notification";
import { showNotification } from "../../utils/toastHandler";

const ClassroomPage: NextPage = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const fetchClassrooms = async () => {
    try {
      const response = await getClassrooms();
      console.log(response);
      setClassrooms(response);
    } catch (error) {
      showNotification({
        message: "Classrooms can't be loaded at the moment.",
        type: "error",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const mappedClassrooms =
    classrooms.length > 0 ? (
      classrooms.map((classroom, i) => (
        <div key={i} data-id={classroom.id}>
          <h3>{classroom.name}</h3>
          <p>{classroom.description}</p>
        </div>
      ))
    ) : (
      <p>No classrooms found</p>
    );

  return (
    <>
      <div>
        <h1>Classrooms</h1>
      </div>
      <div className="container">
        {loading ? <p>Loading...</p> : mappedClassrooms}
      </div>
    </>
  );
};

export default ClassroomPage;
