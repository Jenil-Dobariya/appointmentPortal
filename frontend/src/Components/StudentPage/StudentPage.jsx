import React, { useEffect, useState } from "react";
import { Grid, Divider } from "@mui/material";
import AppointmentForm from "./AppointmentForm";
import History from "./History";

const StudentPage = () => {
  const [appointments, setAppointments] = useState([
    {
      counsellor: "Counsellor 1",
      appointmentDate: new Date("2022-01-01"),
      appointmentTime: "10:00 - 11:00",
    },
    {
      counsellor: "Counsellor 2",
      appointmentDate: new Date("2025-01-01"),
      appointmentTime: "11:00 - 12:00",
    },
    {
      counsellor: "Counsellor 2",
      appointmentDate: new Date("2024-03-31"),
      appointmentTime: "21:00 - 23:00",
    },
  ]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
              appointments={appointments}
              setAppointments={setAppointments}
            />
          </Grid>
          <Divider orientation="vertical" style={{ height: "auto" }} />
          <Grid item xs={3}>
            <History
              appointments={appointments}
              setAppointments={setAppointments}
            />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      )}
    </>
  );
};

export default StudentPage;
