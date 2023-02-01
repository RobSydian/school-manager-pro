import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { NextPage } from "next";
import StyledClassroomPage from "../../components/styles/pages/StyledClassroomPage";
import {
  getClassrooms,
  createClassroom,
  deleteClassroom,
  editClassroom,
} from "../api/classrooms";
import { GetServerSideProps } from "next";

import { showNotification } from "../../utils/toastHandler";
import CustomTable from "../../components/organisms/CustomTable";
import { AiOutlinePlus } from "react-icons/ai";
import InputField from "../../components/atoms/InputField";
import Form from "../../components/organisms/Form";
import Button from "../../components/atoms/Button";
import ButtonContainer from "../../components/molecules/ButtonContainer";
import TextAreaField from "../../components/atoms/TextAreaField";

const ClassroomPage: NextPage = (props: any) => {
  const [classrooms, setClassrooms] = useState<Classroom[]>(props.data);
  const [loading, setLoading] = useState<Boolean>(true);
  const [showForm, setShowForm] = useState<Boolean>(false);
  const [showEditForm, setShowEditForm] = useState<Boolean>(false);
  const [nameInput, setNameInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [selectedRowId, setSelectedRowId] = useState<string>("");
  const [alteredTable, setAlteredTable] = useState<Boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<Object>();

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
    loadData();
    setAlteredTable(false);
  }, [alteredTable]);

  const openForm = () => {
    setShowForm(!showForm);
    setShowEditForm(false);
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

  // TODO
  const submitEditHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("ho!");
    // setAlteredTable(false);
    console.log({ name: nameInput, description: descriptionInput });

    const editedClassroom: Classroom = {
      _id: selectedRowId,
      name: nameInput,
      description: descriptionInput,
    };
    console.log(editedClassroom);

    const res = await editClassroom(editedClassroom?._id, editedClassroom);
    if (res.status < 300) {
      showNotification({
        message: "Classroom edited successfully",
        type: "success",
      });
    } else {
      showNotification({
        message: "Something went wrong!",
        type: "error",
      });
    }

    setAlteredTable(true);
    setShowEditForm(false);
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

  function onRowSelect() {
    console.log({ nameInput });
    console.log({ descriptionInput });
    console.log({ selectedRowData });
    setShowEditForm(false);
  }

  function getSelectedRowData(data: Object): any {
    console.log({ data });
    setSelectedRowId(data?._id);
    setNameInput(data?.name);
    setDescriptionInput(data?.description);

    if (showForm) {
      setShowForm(false);
    }
    setShowEditForm(!showEditForm);

    setSelectedRowData(data);
  }

  const classroomsTable =
    classrooms?.length > 0 ? (
      <CustomTable
        headers={["name", "description"]}
        data={classrooms}
        deleteFn={deleteClassroomAction}
        getSelectedRowData={getSelectedRowData}
        hasOptions={true}
      />
    ) : (
      <p>No classrooms found</p>
    );

  function getInputRef(fieldInput: string, name: string): Classroom {
    // resetInputs();

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
          <div className="container__content__form">
            {showForm && (
              <Form submitFn={submitHandler}>
                <InputField
                  type="text"
                  content="Name"
                  defaultValue=""
                  placeholder=""
                  name="name"
                  getInputRef={getInputRef}
                />
                <TextAreaField
                  type="text"
                  defaultValue=""
                  content="Description"
                  placeholder=""
                  name="description"
                  getInputRef={getInputRef}
                />
                <ButtonContainer>
                  <Button
                    btnType="submit"
                    content="Send"
                    classtype="submit"
                    isDisabled={
                      nameInput === "" || descriptionInput === "" ? true : false
                    }
                    onClickFn={() => {}}
                  />
                </ButtonContainer>
              </Form>
            )}
            {showEditForm && (
              <Form submitFn={submitEditHandler}>
                <InputField
                  type="text"
                  content="Name"
                  name="name"
                  defaultValue={`${selectedRowData?.name}`}
                  placeholder={`${selectedRowData?.name}`}
                  getInputRef={getInputRef}
                />
                <TextAreaField
                  type="text"
                  content="Description"
                  name="description"
                  defaultValue={`${selectedRowData?.description}`}
                  placeholder={`${selectedRowData?.description}`}
                  getInputRef={getInputRef}
                />
                <ButtonContainer>
                  <Button
                    btnType="button"
                    content="Cancel"
                    classtype="cancel"
                    isDisabled={false}
                    onClickFn={() => onRowSelect()}
                  />
                  <Button
                    btnType="submit"
                    content="Update"
                    isDisabled={false}
                    classtype="update"
                    onClickFn={() => {}}
                  />
                </ButtonContainer>
              </Form>
            )}
          </div>
          {loading ? <p>Loading...</p> : classroomsTable}
        </div>
      </div>
    </StyledClassroomPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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
