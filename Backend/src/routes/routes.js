import { Router } from "express";
import path from "path";

// Home data 
import homeRouter from "../api/HomeData/getHomeData.js";

// Login Credentials 
import getStudentCredentials from "../api/CredentialsData/Student/getStudentCredentials.js";
import getAdminCredentials from "../api/CredentialsData/Admin/AdminLogin.js";

// Student handellers 
import signUpStudent from "../api/Admins/Super Admin/Update Data/Students/Add new Student/signUpStudent.js";
import GetStudentDeatils from "../api/StudentData/GetStudentData.js";
import UpdateStudentCredentials from "../api/CredentialsData/Student/UpdateStudentCredentials.js";
import ForgotPasswordHandeller from "../api/CredentialsData/Student/ForgotPassword.js";
import StudentUpdateURLProfile from "../api/UploadProfile/Student/StudentUpdateURLProfile.js";

// Image kit authenticationj parameters
import ImageKitGetAuthParams from "../api/Image Kit Token/ImageKitGetAuthenticationParameters.js";

// Tokens 
import VerifyToken from "../middlewares/Student/VerifyToken.js";
import AdminVerifyToken from "../middlewares/Admin/ResponseVerifyToken.js";
import AdminVerifyTokenPass from "../middlewares/Admin/ResponseVerifyTokenPass.js";

//Fetching Home data
import GetMasterPhotos from "../api/Admins/Super Admin/Fetch Data/Home Page/GetMasterPhotosData.js";
import GetNotices from "../api/Admins/Super Admin/Fetch Data/Home Page/GetNotices.js";
import GetEvent from "../api/Admins/Super Admin/Fetch Data/Home Page/GetEvents.js";
import GetAcheivements from "../api/Admins/Super Admin/Fetch Data/Home Page/GetAcheivements.js";
import GetFacilities from "../api/Admins/Super Admin/Fetch Data/Home Page/GetFacilities.js";
import GetDetails from "../api/Admins/Super Admin/Fetch Data/Home Page/GetDetails.js";
import GetMessages from "../api/Admins/Super Admin/Fetch Data/Home Page/GetMessages.js";
import GetFaqs from "../api/Admins/Super Admin/Fetch Data/Home Page/GetFaqs.js";
import GetFooterInfo from "../api/Admins/Super Admin/Fetch Data/Home Page/GetFooterInfo.js";

// Updating Home data 
import UpdateMasterSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateMasterSection.js";
import UpdateNoticeSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateNoticeSection.js";
import UpdateEventSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateEventSection.js";
import UpdateAchievementSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateAchievementSection.js";
import UpdatefacilitiesSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateFacilitiesSection.js";
import UpdateDetailsSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateDetailsSection.js";
import UpdateMessagesSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateMessagesSection.js";
import UpdateFaqsSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateFaqSection.js";
import UpdateFooterSectionDetails from "../api/Admins/Super Admin/Update Data/Home Page/UpdateFooterDetails.js";

import GetAllStudentsAttendanceData from "../api/Admins/Super Admin/Fetch Data/Students/Attendance Data/GetAllStudentsAttendanceData.js";

// Fetching Student Data 
import GetAllStudentDeatils from "../api/Admins/Super Admin/Fetch Data/Students/GetAllStudentsData.js";

// Managing student data
import AddStudent from "../api/Admins/Super Admin/Update Data/Students/Add new Student/AddStudent.js";
import DeleteStudentByRoll from "../api/Admins/Super Admin/Update Data/Students/Delete Student/DeleteStudent.js";

// Attendance Data Management 
import GetStudentAttendanceDetails from "../api/StudentData/Attendance Details/Get Attendance Data/GetAttendaceData.js";

// Mailing Apis 
import SendNoticeToAllStudents from "../api/Send Mails/Send Multiple Notices/SendNoticeToAllStudents.js";

import RephraseTextByGoogleAPI from "../api/RapidAPI Rephraser/RephraseTextByGoogleAPI.js";

const router = Router();

// Serving the index.html when someone requests '/'
router.get('/', (req, res) => {
    const filePath = path.resolve('public/index.html');
    res.sendFile(filePath);
});

router.get('/api/home', homeRouter); 

// Studet Login And Sign UP
router.post('/login/student',getStudentCredentials)
router.put('/signup/student', signUpStudent)
router.post('/login/student/forgot-password',ForgotPasswordHandeller)
// Studet routes 
router.get('/api/student-dashboard', VerifyToken, GetStudentDeatils)
router.put('/api/student/change-password',VerifyToken,UpdateStudentCredentials)
router.put('/api/student/change-photo/update-or-delete',VerifyToken,StudentUpdateURLProfile)

// attendance management 
router.post('/api/student-dashboard/attendance',VerifyToken,GetStudentAttendanceDetails)

// Authentication parameter for image kit
router.get('/api/get-authentication-parameters',ImageKitGetAuthParams)

// admin login 
router.post('/login/admin',getAdminCredentials)
// Speradmin Routes
router.post('/auth/superadmin',AdminVerifyToken)

// apis to get home data
router.get('/api/super-admin/masterphotos',AdminVerifyTokenPass,GetMasterPhotos)
router.get('/api/super-admin/notices',AdminVerifyTokenPass,GetNotices)
router.get('/api/super-admin/events',AdminVerifyTokenPass,GetEvent)
router.get('/api/super-admin/achievements',AdminVerifyTokenPass,GetAcheivements)
router.get('/api/super-admin/facilities',AdminVerifyTokenPass,GetFacilities)
router.get('/api/super-admin/details',AdminVerifyTokenPass,GetDetails)
router.get('/api/super-admin/messages',AdminVerifyTokenPass,GetMessages)
router.get('/api/super-admin/faqs',AdminVerifyTokenPass,GetFaqs)
router.get('/api/super-admin/footer-info',AdminVerifyTokenPass,GetFooterInfo)

// apis to update home data 
router.put('/api/update/mastersecetion',AdminVerifyTokenPass,UpdateMasterSectionDetails)
router.put('/api/update/noticesection',AdminVerifyTokenPass,UpdateNoticeSectionDetails)
router.put('/api/update/eventsection',AdminVerifyTokenPass,UpdateEventSectionDetails)
router.put('/api/update/achievementsection',AdminVerifyTokenPass,UpdateAchievementSectionDetails)
router.put('/api/update/facilitiessection',AdminVerifyTokenPass,UpdatefacilitiesSectionDetails)
router.put('/api/update/detailsection',AdminVerifyTokenPass,UpdateDetailsSectionDetails)
router.put('/api/update/messagesection',AdminVerifyTokenPass,UpdateMessagesSectionDetails)
router.put('/api/update/faqsection',AdminVerifyTokenPass,UpdateFaqsSectionDetails)
router.put('/api/update/footersection',AdminVerifyTokenPass,UpdateFooterSectionDetails)

// api to Get student
router.get('/api/super-admin/students',AdminVerifyTokenPass, GetAllStudentDeatils)

// api to Get student
router.post('/api/super-admin/students-attendance',AdminVerifyTokenPass, GetAllStudentsAttendanceData)

// API to manage students
router.put('/api/add/student',AdminVerifyTokenPass, AddStudent)
router.delete('/api/delete/student',AdminVerifyTokenPass, DeleteStudentByRoll)

//API To Send Notice to all students
router.put('/api/notice/multiple',AdminVerifyTokenPass, SendNoticeToAllStudents)
router.post('/api/rephrase',AdminVerifyTokenPass,RephraseTextByGoogleAPI)

export default router;

