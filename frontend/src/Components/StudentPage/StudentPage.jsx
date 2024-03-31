import React, { useEffect, useState } from "react";
import { Grid, Divider } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import AppointmentForm from "./AppointmentForm";
import History from "./History";

const StudentPage = () => {
  const [appointments, setAppointments] = useState([
    // {
    //   counsellor: "Counsellor 1",
    //   appointmentDate: new Date("2022-01-01"),
    //   appointmentTime: "10:00 - 11:00",
    // },
    // {
    //   counsellor: "Counsellor 2",
    //   appointmentDate: new Date("2025-01-01"),
    //   appointmentTime: "11:00 - 12:00",
    // },
    // {
    //   counsellor: "Counsellor 2",
    //   appointmentDate: new Date("2024-03-31"),
    //   appointmentTime: "21:00 - 23:00",
    // },
  ]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/appointment/get/user1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("An error occurred. Please try again later.");
      }

      const data = await response.json();
      console.log(typeof(data.appointments[0].appointmentDate), "hrere");
      setAppointments(data.appointments);
    } catch (error) {
      toast.error("Error fetching appointments, Please refresh the page.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <AppointmentForm />
        </>
      ) : (
        <Grid container style={{ height: "auto" }}>
          <Grid item xs={2} />
          <Grid item xs={5}>
            <AppointmentForm
              fetchAppointments={fetchAppointments}
            />
          </Grid>
          <Divider orientation="vertical" style={{ height: "auto" }} />
          <Grid item xs={3}>
            <History
              appointments={appointments}
              fetchAppointments={fetchAppointments}
            />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      )}
      <ToastContainer />
    </>
  );
};

export default StudentPage;
