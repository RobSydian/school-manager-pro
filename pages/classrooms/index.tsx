import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { NextPage } from "next";
import { getClassrooms } from "../api/classrooms";
import Notification from "../../components/molecules/Notification";

const ClassroomPage: NextPage = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchClassrooms = async () => {
    try {
      const response = await getClassrooms();
      console.log(response);
      setClassrooms(response);
      setLoading(false);
    } catch (error) {
      console.log({ error });

      setError(error);
    }
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const mappedClassrooms = classrooms ? (
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
      <Notification type="success" message="testing" />
      <div>
        <h1>Classrooms</h1>
      </div>
      <div className="container">
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {mappedClassrooms}
      </div>
    </>
  );
};

export default ClassroomPage;
