import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { NextPage } from "next";
import StyledClassroomPage from "../../components/styles/pages/StyledClassroomPage";
import {
  getClassrooms,
  createClassroom,
  deleteClassroom,
} from "../api/classrooms";
import { GetServerSideProps } from "next";

import { showNotification } from "../../utils/toastHandler";
import CustomTable from "../../components/organisms/CustomTable";
import { AiOutlinePlus } from "react-icons/ai";
import InputField from "../../components/atoms/InputField";
import Form from "../../components/organisms/Form";
import Button from "../../components/atoms/Button";
import ButtonContainer from "../../components/molecules/ButtonContainer";

const ClassroomPage: NextPage = (props: any) => {
  const [classrooms, setClassrooms] = useState<Classroom[]>(props.data);
  const [loading, setLoading] = useState<Boolean>(true);
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [nameInput, setNameInput] = useState<string>();
  const [descriptionInput, setDescriptionInput] = useState<string>();
  const [alteredTable, setAlteredTable] = useState<Boolean>(false);

  const loadData = async () => {
    const data: Classroom[] = await getClassrooms();
    setClassrooms(data);
  };

  useEffect(() => {
    if (!props.data) {
      showNotification({
        message: "Classrooms can't be loaded at the moment.",
        type: "error",
      });
    }

    setLoading(false);
  }, [props]);

  useEffect(() => {
    console.log("second useEffect");
    loadData();
    setAlteredTable(false);
  }, [alteredTable]);

  const openForm = () => {
    setShowForm(!showForm);
  };

  const submitHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAlteredTable(false);

    const newClassroom: Classroom = {
      name: nameInput,
      description: descriptionInput,
    };
    const res = await createClassroom(newClassroom);
    if (res.status < 300) {
      showNotification({
        message: "Classroom added to list",
        type: "success",
      });
    }
    setAlteredTable(true);
    setShowForm(false);
  };

  const deleteClassroomAction = async (id: string) => {
    console.log("inside delete");
    console.log(alteredTable);

    // setAlteredTable(false);
    const res = await deleteClassroom(id);
    if (res.status < 300) {
      showNotification({
        message: "Classroom successfully deleted from list",
        type: "success",
      });
    }
    setAlteredTable(true);
    console.log("second alteredTable", alteredTable);
  };

  const classroomsTable =
    classrooms.length > 0 ? (
      <CustomTable
        headers={["name", "description"]}
        data={classrooms}
        deleteFn={deleteClassroomAction}
      />
    ) : (
      <p>No classrooms found</p>
    );

  function getInputRef(fieldInput: string, name: string): Classroom {
    name === "name"
      ? setNameInput(fieldInput)
      : setDescriptionInput(fieldInput);
    return { fieldInput, name };
  }

  return (
    <StyledClassroomPage>
      <div className="container">
        <div className="container__title">
          <h1>Classrooms</h1>
          <AiOutlinePlus
            size={25}
            className="container__title__icon"
            onClick={openForm}
          />
        </div>
        <div className="container__content">
          {/* Form: Create classroom */}
          {showForm && (
            <Form submitFn={submitHandler}>
              <InputField
                type="text"
                content="Name"
                name="name"
                getInputRef={getInputRef}
              />
              <InputField
                type="text"
                content="Description"
                name="description"
                getInputRef={getInputRef}
              />
              <ButtonContainer>
                <Button btnType="submit" content="Send" classtype="submit" />
              </ButtonContainer>
            </Form>
          )}
          {loading ? <p>Loading...</p> : classroomsTable}
        </div>
      </div>
    </StyledClassroomPage>
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
