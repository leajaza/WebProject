const therapists = {
  "Dr. Omar Hassan": {
    experience: "10 years",
    location: "Beirut",
    fee: "$55",
    sessionTypes: ["In-Person", "Online"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: {
      Monday: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM","6:00 PM"],
      Tuesday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM","2:00 PM"],
      Wednesday: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM"],
      Thursday: ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM","7:00 PM"],
      Friday: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM","3:00 PM"]
    }
  },
  "Dr. Rana Saleh": {
    experience: "5 years",
    location: "Beirut",
    fee: "$40",
    sessionTypes: ["Online", "In-Person"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: {
      Monday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
      Tuesday: ["3:00 PM", "4:00 AM", "5:00 PM", "6:00 PM"],
      Wednesday: ["11:00 AM", "12:00 PM", "1:0 PM", "2:00 PM"],
      Thursday: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
      Friday: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]
    }
  },
  "Dr. Sarah Ahmed": {
    experience: "7 years",
    location: "Beirut",
    fee: "$45",
    sessionTypes: ["In-Person", "Online"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: {
      Monday: ["10:00 AM", "11:00 PM", "12:00 PM", "1:00 PM","2:00 PM"],
      Tuesday: ["1:00 AM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM"],
      Wednesday: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM","3:00 PM"],
      Thursday: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM","1:00 PM"],
      Friday: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM","4:00 PM"]
    }
  },
  "Dr. Youssef Nader": {
    experience: "6 years",
    location: "Remote Sessions",
    fee: "$45",
    sessionTypes: ["Online"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    slots: {
      Monday: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM","3:00 PM"],
      Tuesday: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM","6:00 PM"],
      Wednesday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM","1:00 PM"],
      Thursday: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM"],
      Friday: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM","4:00 PM"],

    }
  },
  "Dr. Hadi Nasr": {
    experience: "6 years",
    location: "Remote Sessions",
    fee: "$50",
    sessionTypes: ["Online"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: {
      Monday: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
      Tuesday: ["1:00 PM", "2:00 AM", "3:00 PM", "4:00 PM"],
      Wednesday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
      Thursday: ["2:00 AM", "3:00 PM", "4:00 PM", "5:00 PM"],
      Friday: ["11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM"]
    }
  },
  "Dr. Lina Kareem": {
    experience: "8 years",
    location: "Remote Sessions",
    fee: "$50",
    sessionTypes: ["Online"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: {
      Monday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM","2:00 PM"],
      Tuesday: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM","4:00 PM"],
      Wednesday: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM","3:00 PM"],
      Thursday: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM"],
      Friday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"]
    }
  },
  "Dr. Maya Khoury": {
    experience: "9 years",
    location: "Beirut",
    fee: "$60",
    sessionTypes: ["In-Person"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: {
      Monday: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM","1:00 PM"],
      Tuesday: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM","6:00 PM"],
      Wednesday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM","2:00 PM"],
      Thursday: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM"],
      Friday: ["11:00 AM", "12:00 M", "1:00 PM", "2:00 PM","3:00 PM"]
    }
  },
  "Dr. Karim Saad": {
    experience: "11 years",
    location: "Beirut",
    fee: "$65",
    sessionTypes: ["In-Person"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: {
      Monday: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM"],
      Tuesday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM","2:00 PM"],
      Wednesday: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM","6:00 PM"],
      Thursday: ["11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM","3:00 PM"],
      Friday: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM","4:00 PM"]
    }
  }
};

// DOM elements
const bookingForm = document.getElementById("bookingForm");
const therapistSelect = document.getElementById("therapist");
const sessionTypeSelect = document.getElementById("sessionType");
const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const timeGroup = document.getElementById("timeGroup");

// Info & summary
const therapistInfo = document.getElementById("therapistInfo");
const experienceSpan = document.getElementById("experience");
const locationSpan = document.getElementById("location");
const feeSpan = document.getElementById("fee");
const typesSpan = document.getElementById("types");
const daysSpan = document.getElementById("days");
const confirmationMessage = document.getElementById("confirmationMessage");
const slotMessage = document.getElementById("slotMessage");
const summaryTherapist = document.getElementById("summaryTherapist");
const summaryType = document.getElementById("summaryType");
const summaryDate = document.getElementById("summaryDate");
const summaryTime = document.getElementById("summaryTime");

// Utilities
function parseLocalDate(dateString){ const [y,m,d]=dateString.split("-").map(Number); return new Date(y,m-1,d);}
function formatDateForDisplay(dateString){ if(!dateString) return "—"; return parseLocalDate(dateString).toLocaleDateString("en-GB",{ weekday:"short", day:"numeric", month:"short", year:"numeric" });}
function getDayName(dateString){ return parseLocalDate(dateString).toLocaleDateString("en-US",{ weekday:"long" });}
function isPastDate(dateString){ const s=parseLocalDate(dateString); const t=new Date(); s.setHours(0,0,0,0); t.setHours(0,0,0,0); return s<t;}
function getBookings(){ return JSON.parse(localStorage.getItem("sukoonBookings")) || []; }
function saveBookings(bookings){ localStorage.setItem("sukoonBookings", JSON.stringify(bookings)); }
function updateSummary(){
  summaryTherapist.textContent = therapistSelect.value || "—";
  summaryType.textContent = sessionTypeSelect.value || "—";
  summaryDate.textContent = dateInput.value ? formatDateForDisplay(dateInput.value) : "—";
  summaryTime.textContent = timeSelect.value || "—";
}

// Reset slots
function resetTimeSlots(message="Select therapist and date to see slots.") {
  timeSelect.innerHTML = `<option value="">Select a time slot</option>`;
  timeGroup.style.display="none";
  slotMessage.textContent = message;
  updateSummary();
}

// Populate therapist info + session types
function populateTherapistInfo(){
  const t = therapistSelect.value;
  confirmationMessage.textContent="";
  sessionTypeSelect.innerHTML = `<option value="">Select session type</option>`;
  resetTimeSlots();

  if(!t || !therapists[t]){ therapistInfo.classList.remove("active"); return; }

  const th = therapists[t];
  experienceSpan.textContent = th.experience;
  locationSpan.textContent = th.location;
  feeSpan.textContent = th.fee;
  typesSpan.textContent = th.sessionTypes.join(", ");
  daysSpan.textContent = th.availableDays.join(", ");
  therapistInfo.classList.add("active");

  th.sessionTypes.forEach(type=>{
    const o = document.createElement("option");
    o.value=o.textContent=type;
    sessionTypeSelect.appendChild(o);
  });

  // Optional: auto-select first session type
  if(th.sessionTypes.length>0) sessionTypeSelect.value=th.sessionTypes[0];

  updateAvailableSlots();
}

// Update available slots for selected day
function updateAvailableSlots(){
  const t=therapistSelect.value, d=dateInput.value;
  if(!t||!d){ resetTimeSlots(); return;}
  if(isPastDate(d)){ resetTimeSlots("Cannot book past date."); return;}
  const th=therapists[t], day=getDayName(d);
  if(!th.availableDays.includes(day)){ resetTimeSlots(`${t} not available on ${day}.`); return;}
  const daySlots=th.slots[day] || [];
  const bookings=getBookings().filter(b=>b.therapist===t && b.date===d).map(b=>b.time);
  const available=daySlots.filter(s=>!bookings.includes(s));
  if(available.length===0){ resetTimeSlots("No slots left for this date."); return;}
  timeSelect.innerHTML=`<option value="">Select a time slot</option>`;
  available.forEach(s=>{
    const o=document.createElement("option");
    o.value=o.textContent=s;
    timeSelect.appendChild(o);
  });
  timeGroup.style.display="block";
  slotMessage.textContent=`${available.length} slot(s) available for ${day}.`;
  updateSummary();
}

// Set min date
function setMinDate(){
  const today=new Date();
  dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split("T")[0];
}

// Handle booking submit
bookingForm.addEventListener("submit", e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const therapist=therapistSelect.value;
  const sessionType=sessionTypeSelect.value;
  const date=dateInput.value;
  const time=timeSelect.value;
  confirmationMessage.style.color="#d64545"; confirmationMessage.textContent="";
  if(!name||!email||!therapist||!sessionType||!date||!time){ confirmationMessage.textContent="Please complete all fields."; return;}
  if(isPastDate(date)){ confirmationMessage.textContent="Cannot book past date."; return;}
  const thDay=getDayName(date);
  if(!therapists[therapist].availableDays.includes(thDay)){ confirmationMessage.textContent=`${therapist} not available on ${thDay}.`; resetTimeSlots(); return;}
  const bookings=getBookings();
  if(bookings.find(b=>b.therapist===therapist && b.date===date && b.time===time)){
    confirmationMessage.textContent="Slot already booked."; updateAvailableSlots(); return;
  }
  bookings.push({name,email,therapist,sessionType,date,time});
  saveBookings(bookings);
  confirmationMessage.innerHTML=`Booking confirmed for <strong>${name}</strong><br>with <strong>${therapist}</strong><br>on <strong>${formatDateForDisplay(date)}</strong> at <strong>${time}</strong>.`;
  confirmationMessage.style.color="#2c5f8a";
  bookingForm.reset();
  therapistInfo.classList.remove("active");
  sessionTypeSelect.innerHTML=`<option value="">Select session type</option>`;
  resetTimeSlots();
  updateSummary();
  setMinDate();
});

// Event listeners
therapistSelect.addEventListener("change", populateTherapistInfo);
sessionTypeSelect.addEventListener("change", updateAvailableSlots);
dateInput.addEventListener("change", updateAvailableSlots);
timeSelect.addEventListener("change", updateSummary);
document.getElementById("name").addEventListener("input", updateSummary);
document.getElementById("email").addEventListener("input", updateSummary);

setMinDate();
resetTimeSlots();
updateSummary();