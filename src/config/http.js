import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

export const APIs = {
  //User
  registerApi: "user/register",
  loginApi: "user/login",
  getSingleUsersApi: "user/get-user-info-by-id",
  applyDoctorAccountApi: "user/apply-doctor-account",
  markAllNotificationsAsReadApi: "user/mark-all-notifications-as-seen",
  deleteAllNotificationsApi: "user/delete-all-notifications",
  getAllApprovedDoctorsApi: "user/get-all-approved-doctors",
  bookAppointmentApi: "user/book-appointment",
  checkBookingAvailabilityApi: "user/check-booking-avilability",
  getSingleAppointmentApi: "user/get-appointments-by-user-id",
  //Patients
  getAllPatientApi: "patient/allpatient",
  getSingleDocAppointments: "appointment/filter_appointment?doctorID=",
  addPatientApi: "patient",
  editPatientApi: "patient/editpatient",
  deletePatientApi: "patient/deletepatient/",
  searchPatientByNameApi: "patient/searchName/?name=",
  searchPatientByPhoneApi: "patient/searchPhone/?phone=",
  assignPatientApi: "patient/assignPatient?doctorID=",
  singleDoctorPatientApi: "patient/singledoctorpatient/?DoctorID=",
  //Appointments
  addAppointmentApi: "appointment",
  getAllAppointmentsApi: "appointment",
  deleteAppointmentApi: "appointment/delete_appointment/",
  updateAppointmentStatusApi: "appointment/change_appointment_status?",
  //Admin Routes
  getAllDoctorsApi: "admin/get-all-doctors",
  getAllUsersApi: "admin/get-all-users",
  changeDoctorAccountStatusApi: "admin/change-doctor-account-status",
  getSingleTaskApi: "task/get_single/",
  updateTaskProgressApi: "task/update_task?taskProgress=",
  deleteTaskApi: "task/delete_task/",
};

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "/",
  },
});
const request = () => {
  return axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const HttpRequest = {
  loginApi(data) {
    return request().post(`${BASE_URL}${APIs.loginApi}`, data);
  },
  signupApi(data) {
    return request().post(`${BASE_URL}${APIs.signupApi}`, data);
  },
  getAllUsersApi() {
    return request().get(`${BASE_URL}${APIs.getAllUsersApi}`);
  },
  //Patients Api Definitions
  getAllPatientApi() {
    return request().get(`${BASE_URL}${APIs.getAllPatientApi}`);
  },

  addPatientApi(patient) {
    return request().post(
      `${BASE_URL}${APIs.addPatientApi}`,
      JSON.stringify(patient)
    );
  },
  // async editPatientApi(id) {
  //   try {
  //     const response = await request().post(
  //       `${BASE_URL}${APIs.editPatientApi}/?type=edit`,
  //       JSON.stringify(id)
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error deleting patient:", error);
  //     throw error;
  //   }
  // },
  async deletePatientApi(id) {
    return request().delete(`${BASE_URL}${APIs.deletePatientApi}${id}`);
  },
  searchPatientByNameApi(query) {
    console.log();
    return request().get(`${BASE_URL}${APIs.searchPatientByNameApi}${query}`);
  },
  searchPatientByPhoneApi(query) {
    return request().get(`${BASE_URL}${APIs.searchPatientByPhoneApi}${query}`);
  },
  assignPatientApi(doctorID, patientID) {
    return request().put(
      `${BASE_URL}${APIs.assignPatientApi}${doctorID}&patientID=${patientID}`
    );
  },
  singleDoctorPatientApi(doctorID) {
    return request().get(
      `${BASE_URL}${APIs.singleDoctorPatientApi}${doctorID}`
    );
  },
  //Appointments Api Definitions
  addAppointmentApi(appointment) {
    return request().post(
      `${BASE_URL}${APIs.addAppointmentApi}`,
      JSON.stringify(appointment)
    );
  },
  getAllAppointmentsApi() {
    return request().get(`${BASE_URL}${APIs.getAllAppointmentsApi}`);
  },
  getSingleDocAppointments(id) {
    return request().get(`${BASE_URL}${APIs.getSingleDocAppointments}${id}`);
  },
  deleteAppointmentApi(id) {
    return request().delete(`${BASE_URL}${APIs.deleteAppointmentApi}${id}`);
  },
  updateAppointmentStatusApi(id, status) {
    return request().put(
      `${BASE_URL}${APIs.updateAppointmentStatusApi}status=${status}&id=${id}`
    );
  },
  //Tasks Api Definitions
  addTaskApi(task) {
    return request().post(
      `${BASE_URL}${APIs.addTaskApi}`,
      JSON.stringify(task)
    );
  },
  getAllTasksApi() {
    return request().get(`${BASE_URL}${APIs.getAllTasksApi}`);
  },
  getSingleTaskApi(id) {
    return request().get(`${BASE_URL}${APIs.getSingleTaskApi}${id}`);
  },
  filterTaskApi(id) {
    return request().get(`${BASE_URL}${APIs.filterTaskApi}${id}`);
  },
  updateTaskProgressApi(id, newTaskProgress) {
    return request().put(
      `${BASE_URL}${APIs.updateTaskProgressApi}${newTaskProgress}&ID=${id}`
    );
  },
  deleteTaskApi(id) {
    return request().delete(`${BASE_URL}${APIs.deleteTaskApi}${id}`);
  },
};
