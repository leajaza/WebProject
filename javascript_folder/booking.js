const therapists = {
  "Dr. Omar Hassan": {
    experience: "10 years",
    location: "Beirut",
    fee: "$50",
    sessionTypes: ["In-Person", "Online"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"]
  },
  "Dr. Rana Saleh": {
    experience: "8 years",
    location: "Jounieh",
    fee: "$45",
    sessionTypes: ["Online", "Phone Call"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    slots: ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM"]
  },
  "Dr. Sarah Ahmed": {
    experience: "12 years",
    location: "Beirut",
    fee: "$60",
    sessionTypes: ["In-Person", "Online"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: ["11:00 AM", "12:30 PM", "2:30 PM", "4:00 PM"]
  },
  "Dr. Youssef Nader": {
    experience: "7 years",
    location: "Saida",
    fee: "$40",
    sessionTypes: ["In-Person", "Online", "Phone Call"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    slots: ["9:30 AM", "11:30 AM", "1:30 PM", "3:30 PM"]
  },
  "Dr. Hadi Nasr": {
  experience: "6 years",
  location: "Remote Sessions",
  fee: "$50",
  sessionTypes: ["Online"],
  availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  slots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"]
},
"Dr. Lina Kareem": {
  experience: "8 years",
  location: "Remote Sessions",
  fee: "$50",
  sessionTypes: ["Online"],
  availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  slots: ["10:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"]
},
"Dr. Maya Khoury": {
  experience: "9 years",
  location: "Beirut",
  fee: "$60",
  sessionTypes: ["In-Person", "Online"],
  availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"]
},
"Dr. Karim Saad": {
  experience: "11 years",
  location: "Beirut",
  fee: "$65",
  sessionTypes: ["In-Person"],
  availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  slots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"]
},
};

const bookingForm = document.getElementById("bookingForm");
const therapistSelect = document.getElementById("therapist");
const sessionTypeSelect = document.getElementById("sessionType");
const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const timeGroup = document.getElementById("timeGroup");

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

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getBookings() {
  return JSON.parse(localStorage.getItem("sukoonBookings")) || [];
}

function saveBookings(bookings) {
  localStorage.setItem("sukoonBookings", JSON.stringify(bookings));
}

function formatDateForDisplay(dateString) {
  if (!dateString) return "—";

  const date = parseLocalDate(dateString);

  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function getDayName(dateString) {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

function isPastDate(dateString) {
  const selected = parseLocalDate(dateString);
  const today = new Date();

  selected.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return selected < today;
}

function updateSummary() {
  summaryTherapist.textContent = therapistSelect.value || "—";
  summaryType.textContent = sessionTypeSelect.value || "—";
  summaryDate.textContent = dateInput.value ? formatDateForDisplay(dateInput.value) : "—";
  summaryTime.textContent = timeSelect.value || "—";
}

function resetTimeSlots(message = "Select therapist, session type, and date to see available time slots.") {
  timeSelect.innerHTML = `<option value="">Select a time slot</option>`;
  timeSelect.value = "";
  timeGroup.style.display = "none";
  slotMessage.textContent = message;
  updateSummary();
}

function populateTherapistInfo() {
  const selectedTherapist = therapistSelect.value;

  confirmationMessage.textContent = "";
  sessionTypeSelect.innerHTML = `<option value="">Select session type</option>`;
  resetTimeSlots();

  if (!selectedTherapist || !therapists[selectedTherapist]) {
    therapistInfo.classList.remove("active");
    updateSummary();
    return;
  }

  const therapist = therapists[selectedTherapist];

  experienceSpan.textContent = therapist.experience;
  locationSpan.textContent = therapist.location;
  feeSpan.textContent = therapist.fee;
  typesSpan.textContent = therapist.sessionTypes.join(", ");
  daysSpan.textContent = therapist.availableDays.join(", ");

  therapistInfo.classList.add("active");

  therapist.sessionTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    sessionTypeSelect.appendChild(option);
  });

  updateAvailableSlots();
  updateSummary();
}

function updateAvailableSlots() {
  const selectedTherapist = therapistSelect.value;
  const selectedDate = dateInput.value;
  const selectedSessionType = sessionTypeSelect.value;

  confirmationMessage.textContent = "";
  resetTimeSlots();

  if (!selectedTherapist || !selectedDate || !selectedSessionType) {
    return;
  }

  if (isPastDate(selectedDate)) {
    resetTimeSlots("You cannot book a past date.");
    return;
  }

  const therapist = therapists[selectedTherapist];
  const selectedDay = getDayName(selectedDate);

  if (!therapist.availableDays.includes(selectedDay)) {
    resetTimeSlots(`This therapist is not available on ${selectedDay}. Please choose another date.`);
    return;
  }

  const bookings = getBookings();

  const bookedSlots = bookings
    .filter((booking) =>
      booking.therapist === selectedTherapist &&
      booking.date === selectedDate
    )
    .map((booking) => booking.time);

  const availableSlots = therapist.slots.filter((slot) => !bookedSlots.includes(slot));

  if (availableSlots.length === 0) {
    resetTimeSlots("No available slots left for this date. Please choose another date.");
    return;
  }

  availableSlots.forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = slot;
    timeSelect.appendChild(option);
  });

  timeGroup.style.display = "block";
  slotMessage.textContent = `${availableSlots.length} slot(s) available for this date.`;
  updateSummary();
}

function setMinDate() {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  dateInput.min = localToday;
}

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const therapist = therapistSelect.value;
  const sessionType = sessionTypeSelect.value;
  const date = dateInput.value;
  const time = timeSelect.value;

  confirmationMessage.textContent = "";
  confirmationMessage.style.color = "#d64545";

  if (!name || !email || !therapist || !sessionType || !date || !time) {
    confirmationMessage.textContent = "Please complete all fields before booking.";
    return;
  }

  if (isPastDate(date)) {
    confirmationMessage.textContent = "You cannot book an appointment in the past.";
    return;
  }

  const therapistDay = getDayName(date);
  if (!therapists[therapist].availableDays.includes(therapistDay)) {
    confirmationMessage.textContent = `${therapist} is not available on ${therapistDay}.`;
    resetTimeSlots(`This therapist is not available on ${therapistDay}. Please choose another date.`);
    return;
  }

  const bookings = getBookings();

  const duplicateBooking = bookings.find((booking) =>
    booking.therapist === therapist &&
    booking.date === date &&
    booking.time === time
  );

  if (duplicateBooking) {
    confirmationMessage.textContent = "This time slot has already been booked. Please choose another one.";
    updateAvailableSlots();
    return;
  }

  const newBooking = {
    name,
    email,
    therapist,
    sessionType,
    date,
    time
  };

  bookings.push(newBooking);
  saveBookings(bookings);

  confirmationMessage.innerHTML = `
    Booking confirmed for <strong>${name}</strong><br>
    with <strong>${therapist}</strong><br>
    on <strong>${formatDateForDisplay(date)}</strong> at <strong>${time}</strong>.
  `;
  confirmationMessage.style.color = "#2c5f8a";

  bookingForm.reset();
  therapistInfo.classList.remove("active");
  sessionTypeSelect.innerHTML = `<option value="">Select session type</option>`;
  resetTimeSlots();
  updateSummary();
  setMinDate();
});

therapistSelect.addEventListener("change", populateTherapistInfo);
sessionTypeSelect.addEventListener("change", updateAvailableSlots);
dateInput.addEventListener("change", updateAvailableSlots);
timeSelect.addEventListener("change", updateSummary);

document.getElementById("name").addEventListener("input", updateSummary);
document.getElementById("email").addEventListener("input", updateSummary);

setMinDate();
resetTimeSlots();
updateSummary();