import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { GetServerSidePropsContext } from "next";

export default function index({ classrooms }: Classroom) {
  const [backendData, setBackendData] = useState<Classroom[]>([]);

  useEffect(() => {
    console.log(classrooms);
    setBackendData(classrooms);
  }, []);

  return (
    <>
      <div>
        <h1>Classrooms</h1>
      </div>

      <div>
        {typeof backendData === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.map((classroom, i) => (
            <div key={i}>
              <h3>{classroom.name}</h3>
              <p>{classroom.name}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const { id } = context.params;
  const classrooms = await fetch(`http://localhost:5000/api/classrooms`);
  const data = await classrooms.json();

  return {
    props: { classrooms: data },
  };
}
