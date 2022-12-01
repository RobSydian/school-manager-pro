import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { NextPage } from "next";
import { getClassrooms } from "../api/classrooms";

const Classroom: NextPage = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>();

  const fetchClassrooms = async () => {
    try {
      const response = await getClassrooms();
      setClassrooms(response);
      setLoading(false);
    } catch (error) {
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
      <div>
        <h1>Classrooms</h1>
      </div>

      <div>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {mappedClassrooms}
      </div>
    </>
  );
};

export default Classroom;
