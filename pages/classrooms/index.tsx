import { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import { NextPage } from "next";
import StyledClassroomPage from "../../components/styles/pages/StyledClassroomPage";
import { getClassrooms } from "../api/classrooms";
import { GetServerSideProps } from "next";

import { showNotification } from "../../utils/toastHandler";
import CustomTable from "../../components/organisms/CustomTable";
import { AiOutlinePlus } from "react-icons/ai";
import InputField from "../../components/atoms/InputField";
import Form from "../../components/organisms/Form";
import Button from "../../components/atoms/Button";
import ButtonContainer from "../../components/molecules/ButtonContainer";

const ClassroomPage: NextPage = (props: any) => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [showForm, setShowForm] = useState<Boolean>(false);

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
  const openForm = () => {
    setShowForm(!showForm);
  };
  const classroomsTable =
    classrooms.length > 0 ? (
      <CustomTable headers={["name", "description"]} data={classrooms} />
    ) : (
      <p>No classrooms found</p>
    );

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
          <Form submitFn={() => alert("hi!")}>
            <InputField type="text" content="Name" name="name" />
            <InputField type="text" content="Description" name="description" />
            <ButtonContainer>
              <Button content="Send" classtype="submit" />
            </ButtonContainer>
          </Form>
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
