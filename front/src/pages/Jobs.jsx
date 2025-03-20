import styles from "../styles/login.module.css";
import { addJob, getJob, updateJob } from "../services";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Jobs() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    skills: "",
    remote: "",
  });
  const { id } = useParams();
  const editJob = id != undefined; //give tru or false
  const [jobFetching, setJobFetching] = useState(false);
  const fetchJob = async () => {
    try {
      setJobFetching(true);
      const response = await getJob(id);
      const data = await response.json();
      setFormData({
        title: data.title,
        description: data.description,
        location: data.location,
        salary: data.salary,
        skills: data.skills.join(","),
        remote: data.remote,
      });
      setJobFetching(true);
    } catch (error) {
      console.log(error);
      setJobFetching(false);
    }
  };
  const jobHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      if (editJob) {
        const response = await updateJob({ id, data: formData });
        if (response.ok) {
          toast.success("update Successful");
        }
      } else {
        const response = await addJob({ data: formData });
        if (response.ok) {
          toast.success("Added Successful");
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Somethinf went wrong");
      setIsLoading(false);
    } finally {
      fetchJob();
    }
  };

  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, [id]);

  return (
    <div>
      <h1>Add Job Description</h1>
      <div
        className={styles.container}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          className={styles.leftContainer}
          style={{
            width: "50vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            paddingLeft: "100px",
          }}
        >
          <div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <input
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  border: "1px solid #C2C2C2",
                }}
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="title"
              />
              <input
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  border: "1px solid #C2C2C2",
                }}
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="description"
              />

              <input
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  border: "1px solid #C2C2C2",
                }}
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="location"
              />

              <input
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  border: "1px solid #C2C2C2",
                }}
                type="text"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                placeholder="salary"
              />

              <input
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  border: "1px solid #C2C2C2",
                }}
                type="text"
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
                placeholder="Skills"
              />

              <select
                style={{
                  padding: "10px",
                  width: "40vw",
                  maxWidth: "400px",
                  borderRadius: "7px",
                  border: "1px solid #C2C2C2 ",
                }}
                value={formData.remote}
                onChange={(e) =>
                  setFormData({ ...formData, remote: e.target.value })
                }
              >
                <option value="">Remote</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>

              <button
                style={{
                  width: "40%",
                  background: "#ED5353",
                  color: "white",
                  borderRadius: "5px",
                  padding: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                type="submit"
                //   disabled={isLoading}
                onClick={jobHandler}
              >
                {isLoading
                  ? editJob
                    ? "Updating Job"
                    : "Creating Job"
                  : editJob
                  ? "Update Job"
                  : "Create Job"}
              </button>

              {editJob && (
                <button
                  style={{
                    width: "40%",
                    background: "#ED5353",
                    color: "white",
                    borderRadius: "5px",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  type="submit"
                  //   disabled={isLoading}
                  //
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    </div>
  );
}
