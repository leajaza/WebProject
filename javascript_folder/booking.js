const therapistSelect = document.getElementById("therapist");
const sessionType = document.getElementById("sessionType");
const dateInput = document.getElementById("date");
const form = document.getElementById("bookingForm");
const message = document.getElementById("confirmationMessage");

const experience = document.getElementById("experience");
const locationEl = document.getElementById("location");
const fee = document.getElementById("fee");
const types = document.getElementById("types");
const daysEl = document.getElementById("days");

// All 8 therapists with their details
const therapistData = {
  "Dr. Omar Hassan": {
    type: ["online", "inperson"],
    days: [1,2,3,4], // Mon-Thu
    experience: "10 Years",
    location: "Beirut, Lebanon",
    fee: "$55 / session"
  },
  "Dr. Rana Saleh": {
    type: ["online", "inperson"],
    days: [2,3,4,5], // Tue-Fri
    experience: "5 Years",
    location: "Beirut, Lebanon",
    fee: "$40 / session"
  },
  "Dr. Sarah Ahmed": {
    type: ["online", "inperson"],
    days: [1,3,5], // Mon, Wed, Fri
    experience: "7 Years",
    location: "Beirut, Lebanon",
    fee: "$45 / session"
  },
  "Dr. Youssef Nader": {
    type: ["online"],
    days: [1,2,4], // Mon, Tue, Thu
    experience: "6 Years",
    location: "Remote Sessions",
    fee: "$45 / session"
  },
  "Dr. Lina Karam": {
    type: ["inperson"],
    days: [2,4], // Tue, Thu
    experience: "8 Years",
    location: "Beirut, Lebanon",
    fee: "$50 / session"
  },
  "Dr. Jad Mansour": {
    type: ["online", "inperson"],
    days: [1,3,5], // Mon, Wed, Fri
    experience: "9 Years",
    location: "Beirut, Lebanon",
    fee: "$60 / session"
  },
  "Dr. Hiba Touma": {
    type: ["online"],
    days: [2,3,4], // Tue-Thu
    experience: "4 Years",
    location: "Remote Sessions",
    fee: "$35 / session"
  },
  "Dr. Rami Khalil": {
    type: ["inperson"],
    days: [1,5], // Mon, Fri
    experience: "7 Years",
    location: "Beirut, Lebanon",
    fee: "$45 / session"
  }
};

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Populate therapist select dropdown
function populateTherapistSelect() {
  therapistSelect.innerHTML = '<option value="">Select Therapist</option>';
  for (let key in therapistData) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    therapistSelect.appendChild(option);
  }
}

// Update therapist info dynamically
function updateTherapistInfo() {
  const selected = therapistSelect.value;
  sessionType.innerHTML = '<option value="">Select session type</option>';

  if (!therapistData[selected]) {
    experience.textContent = "";
    locationEl.textContent = "";
    fee.textContent = "";
    types.textContent = "";
    daysEl.textContent = "";
    return;
  }

  const data = therapistData[selected];
  experience.textContent = data.experience;
  locationEl.textContent = data.location;
  fee.textContent = data.fee;
  types.textContent = data.type.map(t => t === "online" ? "Online" : "In-Person").join(", ");
  daysEl.textContent = data.days.map(d => weekdays[d]).join(", ");

  data.type.forEach(t => {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t === "online" ? "Online" : "In-Person";
    sessionType.appendChild(option);
  });
}

therapistSelect.addEventListener("change", function() {
  updateTherapistInfo();
  dateInput.value = "";
});

// Restrict date selection to available days
dateInput.addEventListener("input", function () {
  const selected = therapistSelect.value;
  const data = therapistData[selected];
  if (!data) return;

  const selectedDate = new Date(this.value);
  const day = selectedDate.getDay();
  if (!data.days.includes(day)) {
    alert("This therapist is not available on this day. Please select a valid day.");
    this.value = "";
  }
});

// Booking confirmation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = `✅ Thank you ${form.name.value}! Your appointment with ${therapistSelect.value} is confirmed.`;
  form.reset();
  updateTherapistInfo();
});

populateTherapistSelect();