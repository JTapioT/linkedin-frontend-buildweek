import {
  Container,
  Row,
  Button,
  Col,
  Form,
  FormControl,
  FormFile,
  Alert,
  Spinner,
} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import { useFormik } from "formik";
import * as yup from "yup";

function EditExperience(props) {
  const validationSchema = yup.object().shape({
    role: yup
      .string()
      .min(2, "Too short role description")
      .required("Role is required"),
    company: yup
      .string()
      .min(3, "Too short company name")
      .required("Company name is required"),
    description: yup
      .string()
      .min(3, "Too short description")
      .required("Description is required"),
    area: yup
      .string()
      .min(3, "Too short location name provided")
      .required("Location is required"),
  });

  const { id } = useParams(props);
  const { experienceId } = useParams(props);
  const history = useHistory(props);
  const [experience, setExperience] = useState({});
  const [isLoading, setLoading] = useState(true);

  const [isAddMediaClicked, setAddMediaClicked] = useState(false);
  const [fileName, setFileName] = useState("Upload experience image");
  const [isFileUploaded, setFileUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [editSubmitted, setSubmitted] = useState(false);

  let formData = new FormData();

  async function uploadImage(file) {
    try {
      let response = await fetch(`https://linkedin-buildweek.herokuapp.com/profile/process.env.REACT_APP_USER/experiences/${experience._id}/picture`,
        {
          method: "POST",
          body: file,
        }
      );

      if (response.ok) {
        //let responseJSON = await response.json();
        console.log("Image uploaded successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchExperience() {
    try {
      let response = await fetch(`https://linkedin-buildweek.herokuapp.com/profile/process.env.REACT_APP_USER/experiences/${experienceId}`
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setExperience(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editExperience(body) {
    try {
      console.log(experience._id);
      let response = await fetch(`https://linkedin-buildweek.herokuapp.com/profile/process.env.REACT_APP_USER/experiences/${experience._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      
      if (response.ok) {
        if (isFileUploaded) {
          uploadImage(file);
        }

        let responseJSON = await response.json();
        console.log(responseJSON);
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteExperience() {
    try {
      console.log(experience._id);
      console.log(experienceId);
      let response = await fetch(`https://linkedin-buildweek.herokuapp.com/profile/process.env.REACT_APP_USER/experiences/${experience._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        await response.json();
        console.log("deleted experience.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { values, handleChange, handleSubmit, errors, isValid } = useFormik({
    enableReinitialize: true,
    initialValues: {
      role: experience.role || "",
      company:experience.company || "",
      description: experience.description || "",
      area: experience.area || "",
      startDate: experience.startDate || "",
      endDate: experience.endDate || "",
    },
    onSubmit: (values) => {
      editExperience(values, file);
      alert(JSON.stringify(values));
      setSubmitted(true);
      history.push(`/profile/${id}`);
      props.experienceUpdated(true);
    },
    validationSchema: validationSchema,
  });

  useEffect(() => {
    console.log(values);
    fetchExperience();
  }, []);

  useEffect(() => {
    values.role = experience.role;
    values.company = experience.company;
    values.description = experience.description;
    values.area = experience.area;
    setStartDate(experience.startDate);
    setEndDate(experience.endDate);
    setLoading(false);
  }, [experience]);



  return (
    <>
      <div className="modal" id="editExperienceModal" data-backdrop="static">
        <Container
          className="mt-5 modal-body"
          style={{ backgroundColor: "white" }}
        >
          {!isLoading && (
            <>
              <h4 className="text-center">Edit Experience</h4>
              <Row className="justify-content-center">
                <Col md={10}>
                  <div>
                    <div className="add-Exp">
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={10}>
                            <div>
                              <h6>Notify Network</h6>
                              <small>
                                Turn on to notify your network. Job change
                                updates can take up to 2 hours.{" "}
                                <a
                                  className="app-aware-link"
                                  target="_blank"
                                  href="https://www.linkedin.com/help/linkedin/answer/86236"
                                >
                                  {/**/}Learn more{/**/}
                                </a>{" "}
                              </small>

                              <BootstrapSwitchButton
                                checked={true}
                                onstyle="success"
                                size="xs"
                                className="default-btn-style"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Form.Group controlId="FormRole">
                          <Form.Label>Title*</Form.Label>
                          <Form.Control
                            isInvalid={errors.role}
                            value={values.role}
                            onChange={handleChange}
                            name="role"
                            placeholder="Ex: Retail Sales Manger"
                          />
                          <FormControl.Feedback
                            type={errors.role ? "invalid" : "valid"}
                          >
                            Title is needed.
                          </FormControl.Feedback>
                        </Form.Group>
                        <a
                          className="app-aware-link"
                          target="_blank"
                          href="https://www.linkedin.com/help/linkedin/answer/86236"
                        >
                          {/**/}Learn more{/**/}
                        </a>
                        <Form.Group controlId="FormCompanyName">
                          <Form.Label>Company name*</Form.Label>
                          <Form.Control
                            isInvalid={errors.company}
                            value={values.company}
                            onChange={handleChange}
                            name="company"
                            placeholder="Ex: Microsoft"
                          />
                          <FormControl.Feedback
                            type={errors.company? "invalid" : "valid"}
                          >
                            Company is needed.
                          </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group controlId="FormLocation">
                          <Form.Label>Location*</Form.Label>
                          <Form.Control
                            isInvalid={errors.area}
                            value={values.area}
                            onChange={handleChange}
                            name="area"
                            placeholder="Ex:London United Kingdom"
                          />
                          <FormControl.Feedback
                            type={errors.area ? "invalid" : "valid"}
                          >
                            Area is needed.
                          </FormControl.Feedback>
                        </Form.Group>
                        <div
                          className="d-flex justify-content-between"
                          style={{ width: "300px" }}
                        >
                          <p className="mr-2">Start date*</p>

                          <DayPickerInput
                            parseDate={parseDate}
                            onDayChange={(
                              selectedDay,
                              modifiers,
                              dayPickerInput
                            ) => {
                              const input = dayPickerInput.getInput();
                              setStartDate(input.value);
                            }}
                            placeholder={`${formatDate(
                              new Date(experience.startDate)
                            )}`}
                          />
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ width: "300px" }}
                        >
                          <p className="mr-2">End date*</p>
                          <DayPickerInput
                            parseDate={parseDate}
                            onDayChange={(
                              selectedDay,
                              modifiers,
                              dayPickerInput
                            ) => {
                              const input = dayPickerInput.getInput();
                              setEndDate(
                                input.value === "" ? null : input.value
                              );
                            }}
                            placeholder={`${formatDate(
                              new Date(experience.endDate)
                            )}`}
                          />
                        </div>
                        <Form.Group controlId="FormDescription">
                          <Form.Label>Description*</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            isInvalid={errors.description}
                            value={values.description}
                            onChange={handleChange}
                            name="description"
                          />
                          <FormControl.Feedback
                            type={errors.description ? "invalid" : "valid"}
                          >
                            Description is needed!
                          </FormControl.Feedback>
                        </Form.Group>
                        <Form.Label>Media</Form.Label>
                        <Form.Label>
                          Add or link to external documents, photos, sites,
                          videos, and presentations.
                          <a
                            className="app-aware-link"
                            target="_blank"
                            href="https://www.linkedin.com/help/linkedin/answer/86236"
                          >
                            {/**/}Learn more{/**/}
                          </a>
                        </Form.Label>
                        <Button
                          className="default-btn-style ml-2"
                          variant="outline-primary"
                          onClick={() => {
                            setAddMediaClicked(true);
                          }}
                        >
                          {" "}
                          + Add Media
                        </Button>{" "}
                        {isAddMediaClicked && (
                          <Form.Group>
                            <FormFile
                              type="file"
                              id="experienceImageUpload"
                              label={fileName}
                              onChange={(e) => {
                                setFileName(e.target.files[0].name);
                                setFileUploaded(true);
                                formData.append(
                                  "experience",
                                  e.target.files[0]
                                );
                                setFile(formData);
                              }}
                              custom
                              style={{ width: "30vw" }}
                            ></FormFile>
                          </Form.Group>
                        )}
                        {editSubmitted && (
                          <Alert variant={"success"} className="mt-5">
                            <h6>Information successfully submitted!</h6>
                          </Alert>
                        )}
                        <div className="mt-5 d-flex justify-content-around align-items-baseline">
                          <Button
                            className="default-btn-style"
                            variant="primary"
                            type="submit"
                            disabled={isValid ? false : true}
                            style={{ color: "blue" }}
                          >
                            Save
                          </Button>
                          <p
                            className="text-muted p-0 m-0"
                            type="button"
                            style={{ fontSize: "1.1em" }}
                            onClick={() => {
                              deleteExperience();
                              alert("User experience deleted!");
                              /* history.push(`/profile/${id}`); */
                            }}
                          >
                            Delete experience
                          </p>
                          <Button
                            data-dismiss="modal"
                            className="default-btn-style"
                            variant="outline-primary"
                            type="button"
                            onClick={() => {
                              history.push(`/profile/${id}`);
                              /*  history.go(); */
                            }}
                          >
                            Close
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
          {isLoading && <Spinner animation="border" />}
        </Container>
      </div>
    </>
  );
}

export default EditExperience;
