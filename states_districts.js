const state_and_disrticts = {
    state: {
        "AN": "Andaman and Nicobar Islands",
        "AP": "Andhra Pradesh",
        "AR": "Arunachal Pradesh",
        "AS": "Assam",
        "BR": "Bihar",
        "CG": "Chandigarh",
        "CH": "Chhattisgarh",
        "DN": "Dadra and Nagar Haveli",
        "DD": "Daman and Diu",
        "DL": "Delhi",
        "GA": "Goa",
        "GJ": "Gujarat",
        "HR": "Haryana",
        "HP": "Himachal Pradesh",
        "JK": "Jammu and Kashmir",
        "JH": "Jharkhand",
        "KA": "Karnataka",
        "KL": "Kerala",
        "LA": "Ladakh",
        "LD": "Lakshadweep",
        "MP": "Madhya Pradesh",
        "MH": "Maharashtra",
        "MN": "Manipur",
        "ML": "Meghalaya",
        "MZ": "Mizoram",
        "NL": "Nagaland",
        "OR": "Odisha",
        "PY": "Puducherry",
        "PB": "Punjab",
        "RJ": "Rajasthan",
        "SK": "Sikkim",
        "TN": "Tamil Nadu",
        "TS": "Telangana",
        "TR": "Tripura",
        "UP": "Uttar Pradesh",
        "UK": "Uttarakhand",
        "WB": "West Bengal"
    },
    disrticts: {
        "AN": [
            {"name": "Nicobar", "code": "AN-01"},
            {"name": "North and Middle Andaman", "code": "AN-02"},
            {"name": "South Andaman", "code": "AN-03"}
        ],
        "AP": [
            {"name": "Anantapur", "code": "AP-01"},
            {"name": "Chittoor", "code": "AP-02"},
            {"name": "East Godavari", "code": "AP-03"},
            {"name": "Guntur", "code": "AP-04"},
            {"name": "Krishna", "code": "AP-05"},
            {"name": "Kurnool", "code": "AP-06"},
            {"name": "Prakasam", "code": "AP-07"},
            {"name": "Srikakulam", "code": "AP-08"},
            {"name": "Visakhapatnam", "code": "AP-09"},
            {"name": "Vizianagaram", "code": "AP-10"},
            {"name": "West Godavari", "code": "AP-11"},
            {"name": "YSR Kadapa", "code": "AP-12"}
        ],
        "AR": [
            {"name": "Tawang", "code": "AR-01"},
            {"name": "West Kameng", "code": "AR-02"},
            {"name": "East Kameng", "code": "AR-03"},
            {"name": "Papum Pare", "code": "AR-04"},
            {"name": "Kurung Kumey", "code": "AR-05"},
            {"name": "Kra Daadi", "code": "AR-06"},
            {"name": "Lower Subansiri", "code": "AR-07"},
            {"name": "Upper Subansiri", "code": "AR-08"},
            {"name": "West Siang", "code": "AR-09"},
            {"name": "East Siang", "code": "AR-10"},
            {"name": "Siang", "code": "AR-11"},
            {"name": "Upper Siang", "code": "AR-12"},
            {"name": "Lower Siang", "code": "AR-13"},
            {"name": "Lower Dibang Valley", "code": "AR-14"},
            {"name": "Dibang Valley", "code": "AR-15"},
            {"name": "Anjaw", "code": "AR-16"},
            {"name": "Lohit", "code": "AR-17"},
            {"name": "Namsai", "code": "AR-18"},
            {"name": "Changlang", "code": "AR-19"},
            {"name": "Tirap", "code": "AR-20"},
            {"name": "Longding", "code": "AR-21"}
        ],
        "AS": [
            {"name": "Baksa", "code": "AS-01"},
            {"name": "Barpeta", "code": "AS-02"},
            {"name": "Biswanath", "code": "AS-03"},
            {"name": "Bongaigaon", "code": "AS-04"},
            {"name": "Cachar", "code": "AS-05"},
            {"name": "Charaideo", "code": "AS-06"},
            {"name": "Chirang", "code": "AS-07"},
            {"name": "Darrang", "code": "AS-08"},
            {"name": "Dhemaji", "code": "AS-09"},
            {"name": "Dhubri", "code": "AS-10"},
            {"name": "Dibrugarh", "code": "AS-11"},
            {"name": "Goalpara", "code": "AS-12"},
            {"name": "Golaghat", "code": "AS-13"},
            {"name": "Hailakandi", "code": "AS-14"},
            {"name": "Hojai", "code": "AS-15"},
            {"name": "Jorhat", "code": "AS-16"},
            {"name": "Kamrup", "code": "AS-17"},
            {"name": "Kamrup Metropolitan", "code": "AS-18"},
            {"name": "Karbi Anglong", "code": "AS-19"},
            {"name": "Karimganj", "code": "AS-20"},
            {"name": "Kokrajhar", "code": "AS-21"},
            {"name": "Lakhimpur", "code": "AS-22"},
            {"name": "Majuli", "code": "AS-23"},
            {"name": "Morigaon", "code": "AS-24"},
            {"name": "Nagaon", "code": "AS-25"},
            {"name": "Nalbari", "code": "AS-26"},
            {"name": "Dima Hasao", "code": "AS-27"},
            {"name": "Sivasagar", "code": "AS-28"},
            {"name": "Sonitpur", "code": "AS-29"},
            {"name": "South Salmara-Mankachar", "code": "AS-30"},
            {"name": "Tinsukia", "code": "AS-31"},
            {"name": "Udalguri", "code": "AS-32"},
            {"name": "West Karbi Anglong", "code": "AS-33"}
        ],
        // Repeat for other states...
        "BR": [
            {"name": "Araria", "code": "BR-01"},
            {"name": "Arwal", "code": "BR-02"},
            {"name": "Aurangabad", "code": "BR-03"},
            {"name": "Banka", "code": "BR-04"},
            {"name": "Begusarai", "code": "BR-05"},
            {"name": "Bhagalpur", "code": "BR-06"},
            {"name": "Bhojpur", "code": "BR-07"},
            {"name": "Buxar", "code": "BR-08"},
            {"name": "Darbhanga", "code": "BR-09"},
            {"name": "East Champaran (Motihari)", "code": "BR-10"},
            {"name": "Gaya", "code": "BR-11"},
            {"name": "Gopalganj", "code": "BR-12"},
            {"name": "Jamui", "code": "BR-13"},
            {"name": "Jehanabad", "code": "BR-14"},
            {"name": "Kaimur (Bhabua)", "code": "BR-15"},
            {"name": "Katihar", "code": "BR-16"},
            {"name": "Khagaria", "code": "BR-17"},
            {"name": "Kishanganj", "code": "BR-18"},
            {"name": "Lakhisarai", "code": "BR-19"},
            {"name": "Madhepura", "code": "BR-20"},
            {"name": "Madhubani", "code": "BR-21"},
            {"name": "Munger (Monghyr)", "code": "BR-22"},
            {"name": "Muzaffarpur", "code": "BR-23"},
            {"name": "Nalanda", "code": "BR-24"},
            {"name": "Nawada", "code": "BR-25"},
            {"name": "Patna", "code": "BR-26"},
            {"name": "Purnia (Purnea)", "code": "BR-27"},
            {"name": "Rohtas", "code": "BR-28"},
            {"name": "Saharsa", "code": "BR-29"},
            {"name": "Samastipur", "code": "BR-30"},
            {"name": "Saran", "code": "BR-31"},
            {"name": "Sheikhpura", "code": "BR-32"},
            {"name": "Sheohar", "code": "BR-33"},
            {"name": "Sitamarhi", "code": "BR-34"},
            {"name": "Siwan", "code": "BR-35"},
            {"name": "Supaul", "code": "BR-36"},
            {"name": "Vaishali", "code": "BR-37"},
            {"name": "West Champaran", "code": "BR-38"}
        ],
        "CG": [
            {"name": "Chandigarh", "code": "CG-01"}
        ],
        "CH": [
            {"name": "Balod", "code": "CH-01"},
            {"name": "Baloda Bazar", "code": "CH-02"},
            {"name": "Balrampur", "code": "CH-03"},
            {"name": "Bastar", "code": "CH-04"},
            {"name": "Bemetara", "code": "CH-05"},
            {"name": "Bijapur", "code": "CH-06"},
            {"name": "Bilaspur", "code": "CH-07"},
            {"name": "Dantewada (South Bastar)", "code": "CH-08"},
            {"name": "Dhamtari", "code": "CH-09"},
            {"name": "Durg", "code": "CH-10"},
            {"name": "Gariyaband", "code": "CH-11"},
            {"name": "Janjgir-Champa", "code": "CH-12"},
            {"name": "Jashpur", "code": "CH-13"},
            {"name": "Kabirdham (Kawardha)", "code": "CH-14"},
            {"name": "Kanker (North Bastar)", "code": "CH-15"},
            {"name": "Kondagaon", "code": "CH-16"},
            {"name": "Korba", "code": "CH-17"},
            {"name": "Koriya", "code": "CH-18"},
            {"name": "Mahasamund", "code": "CH-19"},
            {"name": "Mungeli", "code": "CH-20"},
            {"name": "Narayanpur", "code": "CH-21"},
            {"name": "Raigarh", "code": "CH-22"},
            {"name": "Raipur", "code": "CH-23"},
            {"name": "Rajnandgaon", "code": "CH-24"},
            {"name": "Sukma", "code": "CH-25"},
            {"name": "Surajpur", "code": "CH-26"},
            {"name": "Surguja", "code": "CH-27"}
        ],
        "DN": [
            {"name": "Dadra and Nagar Haveli", "code": "DN-01"}
        ],
        "DD": [
            {"name": "Daman", "code": "DD-01"},
            {"name": "Diu", "code": "DD-02"}
        ],
        "DL": [
            {"name": "Central Delhi", "code": "DL-01"},
            {"name": "East Delhi", "code": "DL-02"},
            {"name": "New Delhi", "code": "DL-03"},
            {"name": "North Delhi", "code": "DL-04"},
            {"name": "North East Delhi", "code": "DL-05"},
            {"name": "North West Delhi", "code": "DL-06"},
            {"name": "Shahdara", "code": "DL-07"},
            {"name": "South Delhi", "code": "DL-08"},
            {"name": "South East Delhi", "code": "DL-09"},
            {"name": "South West Delhi", "code": "DL-10"},
            {"name": "West Delhi", "code": "DL-11"}
        ],
        "GA": [
            {"name": "North Goa", "code": "GA-01"},
            {"name": "South Goa", "code": "GA-02"}
        ],
        "GJ": [
            {"name": "Ahmedabad", "code": "GJ-01"},
            {"name": "Amreli", "code": "GJ-02"},
            {"name": "Anand", "code": "GJ-03"},
            {"name": "Aravalli", "code": "GJ-04"},
            {"name": "Banaskantha (Palanpur)", "code": "GJ-05"},
            {"name": "Bharuch", "code": "GJ-06"},
            {"name": "Bhavnagar", "code": "GJ-07"},
            {"name": "Botad", "code": "GJ-08"},
            {"name": "Chhota Udepur", "code": "GJ-09"},
            {"name": "Dahod", "code": "GJ-10"},
            {"name": "Dang", "code": "GJ-11"},
            {"name": "Devbhoomi Dwarka", "code": "GJ-12"},
            {"name": "Gandhinagar", "code": "GJ-13"},
            {"name": "Gir Somnath", "code": "GJ-14"},
            {"name": "Jamnagar", "code": "GJ-15"},
            {"name": "Junagadh", "code": "GJ-16"},
            {"name": "Kutch", "code": "GJ-17"},
            {"name": "Kheda (Nadiad)", "code": "GJ-18"},
            {"name": "Mahisagar", "code": "GJ-19"},
            {"name": "Mehsana", "code": "GJ-20"},
            {"name": "Morbi", "code": "GJ-21"},
            {"name": "Narmada (Rajpipla)", "code": "GJ-22"},
            {"name": "Navsari", "code": "GJ-23"},
            {"name": "Panchmahal (Godhra)", "code": "GJ-24"},
            {"name": "Patan", "code": "GJ-25"},
            {"name": "Porbandar", "code": "GJ-26"},
            {"name": "Rajkot", "code": "GJ-27"},
            {"name": "Sabarkantha (Himmatnagar)", "code": "GJ-28"},
            {"name": "Surat", "code": "GJ-29"},
            {"name": "Surendranagar", "code": "GJ-30"},
            {"name": "Tapi (Vyara)", "code": "GJ-31"},
            {"name": "Vadodara", "code": "GJ-32"},
            {"name": "Valsad", "code": "GJ-33"}
        ],
        "HR": [
            {"name": "Ambala", "code": "HR-01"},
            {"name": "Bhiwani", "code": "HR-02"},
            {"name": "Charkhi Dadri", "code": "HR-03"},
            {"name": "Faridabad", "code": "HR-04"},
            {"name": "Fatehabad", "code": "HR-05"},
            {"name": "Gurugram (Gurgaon)", "code": "HR-06"},
            {"name": "Hisar", "code": "HR-07"},
            {"name": "Jhajjar", "code": "HR-08"},
            {"name": "Jind", "code": "HR-09"},
            {"name": "Kaithal", "code": "HR-10"},
            {"name": "Karnal", "code": "HR-11"},
            {"name": "Kurukshetra", "code": "HR-12"},
            {"name": "Mahendragarh", "code": "HR-13"},
            {"name": "Nuh", "code": "HR-14"},
            {"name": "Palwal", "code": "HR-15"},
            {"name": "Panchkula", "code": "HR-16"},
            {"name": "Panipat", "code": "HR-17"},
            {"name": "Rewari", "code": "HR-18"},
            {"name": "Rohtak", "code": "HR-19"},
            {"name": "Sirsa", "code": "HR-20"},
            {"name": "Sonipat", "code": "HR-21"},
            {"name": "Yamunanagar", "code": "HR-22"}
        ],
        "HP": [
            {"name": "Bilaspur", "code": "HP-01"},
            {"name": "Chamba", "code": "HP-02"},
            {"name": "Hamirpur", "code": "HP-03"},
            {"name": "Kangra", "code": "HP-04"},
            {"name": "Kinnaur", "code": "HP-05"},
            {"name": "Kullu", "code": "HP-06"},
            {"name": "Lahaul & Spiti", "code": "HP-07"},
            {"name": "Mandi", "code": "HP-08"},
            {"name": "Shimla", "code": "HP-09"},
            {"name": "Sirmaur (Sirmour)", "code": "HP-10"},
            {"name": "Solan", "code": "HP-11"},
            {"name": "Una", "code": "HP-12"}
        ],
        "JK": [
            {"name": "Anantnag", "code": "JK-01"},
            {"name": "Bandipore", "code": "JK-02"},
            {"name": "Baramulla", "code": "JK-03"},
            {"name": "Budgam", "code": "JK-04"},
            {"name": "Doda", "code": "JK-05"},
            {"name": "Ganderbal", "code": "JK-06"},
            {"name": "Jammu", "code": "JK-07"},
            {"name": "Kathua", "code": "JK-08"},
            {"name": "Kishtwar", "code": "JK-09"},
            {"name": "Kulgam", "code": "JK-10"},
            {"name": "Kupwara", "code": "JK-11"},
            {"name": "Poonch", "code": "JK-12"},
            {"name": "Pulwama", "code": "JK-13"},
            {"name": "Rajouri", "code": "JK-14"},
            {"name": "Ramban", "code": "JK-15"},
            {"name": "Reasi", "code": "JK-16"},
            {"name": "Samba", "code": "JK-17"},
            {"name": "Shopian", "code": "JK-18"},
            {"name": "Srinagar", "code": "JK-19"},
            {"name": "Udhampur", "code": "JK-20"}
        ],
        "JH": [
            {"name": "Bokaro", "code": "JH-01"},
            {"name": "Chatra", "code": "JH-02"},
            {"name": "Deoghar", "code": "JH-03"},
            {"name": "Dhanbad", "code": "JH-04"},
            {"name": "Dumka", "code": "JH-05"},
            {"name": "East Singhbhum", "code": "JH-06"},
            {"name": "Garhwa", "code": "JH-07"},
            {"name": "Giridih", "code": "JH-08"},
            {"name": "Godda", "code": "JH-09"},
            {"name": "Gumla", "code": "JH-10"},
            {"name": "Hazaribagh", "code": "JH-11"},
            {"name": "Jamtara", "code": "JH-12"},
            {"name": "Khunti", "code": "JH-13"},
            {"name": "Koderma", "code": "JH-14"},
            {"name": "Latehar", "code": "JH-15"},
            {"name": "Lohardaga", "code": "JH-16"},
            {"name": "Pakur", "code": "JH-17"},
            {"name": "Palamu", "code": "JH-18"},
            {"name": "Ramgarh", "code": "JH-19"},
            {"name": "Ranchi", "code": "JH-20"},
            {"name": "Sahibganj", "code": "JH-21"},
            {"name": "Seraikela Kharsawan", "code": "JH-22"},
            {"name": "Simdega", "code": "JH-23"},
            {"name": "West Singhbhum", "code": "JH-24"}
        ],
        "KA": [
            {"name": "Bagalkot", "code": "KA-01"},
            {"name": "Ballari (Bellary)", "code": "KA-02"},
            {"name": "Belagavi (Belgaum)", "code": "KA-03"},
            {"name": "Bengaluru Rural", "code": "KA-04"},
            {"name": "Bengaluru Urban", "code": "KA-05"},
            {"name": "Bidar", "code": "KA-06"},
            {"name": "Chamarajanagar", "code": "KA-07"},
            {"name": "Chikkaballapur", "code": "KA-08"},
            {"name": "Chikkamagaluru (Chikmagalur)", "code": "KA-09"},
            {"name": "Chitradurga", "code": "KA-10"},
            {"name": "Dakshina Kannada", "code": "KA-11"},
            {"name": "Davanagere", "code": "KA-12"},
            {"name": "Dharwad", "code": "KA-13"},
            {"name": "Gadag", "code": "KA-14"},
            {"name": "Hassan", "code": "KA-15"},
            {"name": "Haveri", "code": "KA-16"},
            {"name": "Kalaburagi (Gulbarga)", "code": "KA-17"},
            {"name": "Kodagu", "code": "KA-18"},
            {"name": "Kolar", "code": "KA-19"},
            {"name": "Koppal", "code": "KA-20"},
            {"name": "Mandya", "code": "KA-21"},
            {"name": "Mysuru (Mysore)", "code": "KA-22"},
            {"name": "Raichur", "code": "KA-23"},
            {"name": "Ramanagara", "code": "KA-24"},
            {"name": "Shivamogga (Shimoga)", "code": "KA-25"},
            {"name": "Tumakuru (Tumkur)", "code": "KA-26"},
            {"name": "Udupi", "code": "KA-27"},
            {"name": "Uttara Kannada (Karwar)", "code": "KA-28"},
            {"name": "Vijayapura (Bijapur)", "code": "KA-29"},
            {"name": "Yadgir", "code": "KA-30"}
        ],
        "KL": [
            {"name": "Alappuzha", "code": "KL-01"},
            {"name": "Ernakulam", "code": "KL-02"},
            {"name": "Idukki", "code": "KL-03"},
            {"name": "Kannur", "code": "KL-04"},
            {"name": "Kasaragod", "code": "KL-05"},
            {"name": "Kollam", "code": "KL-06"},
            {"name": "Kottayam", "code": "KL-07"},
            {"name": "Kozhikode", "code": "KL-08"},
            {"name": "Malappuram", "code": "KL-09"},
            {"name": "Palakkad", "code": "KL-10"},
            {"name": "Pathanamthitta", "code": "KL-11"},
            {"name": "Thiruvananthapuram", "code": "KL-12"},
            {"name": "Thrissur", "code": "KL-13"},
            {"name": "Wayanad", "code": "KL-14"}
        ],
        "LA": [
            {"name": "Kargil", "code": "LA-01"},
            {"name": "Leh", "code": "LA-02"}
        ],
        "LD": [
            {"name": "Lakshadweep", "code": "LD-01"}
        ],
        "MP": [
            {"name": "Agar Malwa", "code": "MP-01"},
            {"name": "Alirajpur", "code": "MP-02"},
            {"name": "Anuppur", "code": "MP-03"},
            {"name": "Ashoknagar", "code": "MP-04"},
            {"name": "Balaghat", "code": "MP-05"},
            {"name": "Barwani", "code": "MP-06"},
            {"name": "Betul", "code": "MP-07"},
            {"name": "Bhind", "code": "MP-08"},
            {"name": "Bhopal", "code": "MP-09"},
            {"name": "Burhanpur", "code": "MP-10"},
            {"name": "Chhatarpur", "code": "MP-11"},
            {"name": "Chhindwara", "code": "MP-12"},
            {"name": "Damoh", "code": "MP-13"},
            {"name": "Datia", "code": "MP-14"},
            {"name": "Dewas", "code": "MP-15"},
            {"name": "Dhar", "code": "MP-16"},
            {"name": "Dindori", "code": "MP-17"},
            {"name": "Guna", "code": "MP-18"},
            {"name": "Gwalior", "code": "MP-19"},
            {"name": "Harda", "code": "MP-20"},
            {"name": "Hoshangabad", "code": "MP-21"},
            {"name": "Indore", "code": "MP-22"},
            {"name": "Jabalpur", "code": "MP-23"},
            {"name": "Jhabua", "code": "MP-24"},
            {"name": "Katni", "code": "MP-25"},
            {"name": "Khandwa", "code": "MP-26"},
            {"name": "Khargone", "code": "MP-27"},
            {"name": "Mandla", "code": "MP-28"},
            {"name": "Mandsaur", "code": "MP-29"},
            {"name": "Morena", "code": "MP-30"},
            {"name": "Narsinghpur", "code": "MP-31"},
            {"name": "Neemuch", "code": "MP-32"},
            {"name": "Panna", "code": "MP-33"},
            {"name": "Raisen", "code": "MP-34"},
            {"name": "Rajgarh", "code": "MP-35"},
            {"name": "Ratlam", "code": "MP-36"},
            {"name": "Rewa", "code": "MP-37"},
            {"name": "Sagar", "code": "MP-38"},
            {"name": "Satna", "code": "MP-39"},
            {"name": "Sehore", "code": "MP-40"},
            {"name": "Seoni", "code": "MP-41"},
            {"name": "Shahdol", "code": "MP-42"},
            {"name": "Shajapur", "code": "MP-43"},
            {"name": "Sheopur", "code": "MP-44"},
            {"name": "Shivpuri", "code": "MP-45"},
            {"name": "Sidhi", "code": "MP-46"},
            {"name": "Singrauli", "code": "MP-47"},
            {"name": "Tikamgarh", "code": "MP-48"},
            {"name": "Ujjain", "code": "MP-49"},
            {"name": "Umaria", "code": "MP-50"},
            {"name": "Vidisha", "code": "MP-51"}
        ],
        "MH": [
            {"name": "Ahmednagar", "code": "MH-01"},
            {"name": "Akola", "code": "MH-02"},
            {"name": "Amravati", "code": "MH-03"},
            {"name": "Aurangabad", "code": "MH-04"},
            {"name": "Beed", "code": "MH-05"},
            {"name": "Bhandara", "code": "MH-06"},
            {"name": "Buldhana", "code": "MH-07"},
            {"name": "Chandrapur", "code": "MH-08"},
            {"name": "Dhule", "code": "MH-09"},
            {"name": "Gadchiroli", "code": "MH-10"},
            {"name": "Gondia", "code": "MH-11"},
            {"name": "Hingoli", "code": "MH-12"},
            {"name": "Jalgaon", "code": "MH-13"},
            {"name": "Jalna", "code": "MH-14"},
            {"name": "Kolhapur", "code": "MH-15"},
            {"name": "Latur", "code": "MH-16"},
            {"name": "Mumbai City", "code": "MH-17"},
            {"name": "Mumbai Suburban", "code": "MH-18"},
            {"name": "Nagpur", "code": "MH-19"},
            {"name": "Nanded", "code": "MH-20"},
            {"name": "Nandurbar", "code": "MH-21"},
            {"name": "Nashik", "code": "MH-22"},
            {"name": "Osmanabad", "code": "MH-23"},
            {"name": "Palghar", "code": "MH-24"},
            {"name": "Parbhani", "code": "MH-25"},
            {"name": "Pune", "code": "MH-26"},
            {"name": "Raigad", "code": "MH-27"},
            {"name": "Ratnagiri", "code": "MH-28"},
            {"name": "Sangli", "code": "MH-29"},
            {"name": "Satara", "code": "MH-30"},
            {"name": "Sindhudurg", "code": "MH-31"},
            {"name": "Solapur", "code": "MH-32"},
            {"name": "Thane", "code": "MH-33"},
            {"name": "Wardha", "code": "MH-34"},
            {"name": "Washim", "code": "MH-35"},
            {"name": "Yavatmal", "code": "MH-36"}
        ],
        "MN": [
            {"name": "Bishnupur", "code": "MN-01"},
            {"name": "Chandel", "code": "MN-02"},
            {"name": "Churachandpur", "code": "MN-03"},
            {"name": "Imphal East", "code": "MN-04"},
            {"name": "Imphal West", "code": "MN-05"},
            {"name": "Jiribam", "code": "MN-06"},
            {"name": "Kakching", "code": "MN-07"},
            {"name": "Kamjong", "code": "MN-08"},
            {"name": "Kangpokpi", "code": "MN-09"},
            {"name": "Noney", "code": "MN-10"},
            {"name": "Pherzawl", "code": "MN-11"},
            {"name": "Senapati", "code": "MN-12"},
            {"name": "Tamenglong", "code": "MN-13"},
            {"name": "Tengnoupal", "code": "MN-14"},
            {"name": "Thoubal", "code": "MN-15"},
            {"name": "Ukhrul", "code": "MN-16"}
        ],
        "ML": [
            {"name": "East Garo Hills", "code": "ML-01"},
            {"name": "East Jaintia Hills", "code": "ML-02"},
            {"name": "East Khasi Hills", "code": "ML-03"},
            {"name": "North Garo Hills", "code": "ML-04"},
            {"name": "Ri Bhoi", "code": "ML-05"},
            {"name": "South Garo Hills", "code": "ML-06"},
            {"name": "South West Garo Hills", "code": "ML-07"},
            {"name": "South West Khasi Hills", "code": "ML-08"},
            {"name": "West Garo Hills", "code": "ML-09"},
            {"name": "West Jaintia Hills", "code": "ML-10"},
            {"name": "West Khasi Hills", "code": "ML-11"}
        ],
        "MZ": [
            {"name": "Aizawl", "code": "MZ-01"},
            {"name": "Champhai", "code": "MZ-02"},
            {"name": "Hnahthial", "code": "MZ-03"},
            {"name": "Khawzawl", "code": "MZ-04"},
            {"name": "Kolasib", "code": "MZ-05"},
            {"name": "Lawngtlai", "code": "MZ-06"},
            {"name": "Lunglei", "code": "MZ-07"},
            {"name": "Mamit", "code": "MZ-08"},
            {"name": "Saiha", "code": "MZ-09"},
            {"name": "Serchhip", "code": "MZ-10"}
        ],
        "NL": [
            {"name": "Dimapur", "code": "NL-01"},
            {"name": "Kiphire", "code": "NL-02"},
            {"name": "Kohima", "code": "NL-03"},
            {"name": "Longleng", "code": "NL-04"},
            {"name": "Mokokchung", "code": "NL-05"},
            {"name": "Mon", "code": "NL-06"},
            {"name": "Peren", "code": "NL-07"},
            {"name": "Phek", "code": "NL-08"},
            {"name": "Tuensang", "code": "NL-09"},
            {"name": "Wokha", "code": "NL-10"},
            {"name": "Zunheboto", "code": "NL-11"}
        ],
        "OR": [
            {"name": "Angul", "code": "OR-01"},
            {"name": "Balangir", "code": "OR-02"},
            {"name": "Balasore", "code": "OR-03"},
            {"name": "Bargarh", "code": "OR-04"},
            {"name": "Bhadrak", "code": "OR-05"},
            {"name": "Boudh", "code": "OR-06"},
            {"name": "Cuttack", "code": "OR-07"},
            {"name": "Deogarh", "code": "OR-08"},
            {"name": "Dhenkanal", "code": "OR-09"},
            {"name": "Gajapati", "code": "OR-10"},
            {"name": "Ganjam", "code": "OR-11"},
            {"name": "Jagatsinghpur", "code": "OR-12"},
            {"name": "Jajpur", "code": "OR-13"},
            {"name": "Jharsuguda", "code": "OR-14"},
            {"name": "Kalahandi", "code": "OR-15"},
            {"name": "Kandhamal", "code": "OR-16"},
            {"name": "Kendrapara", "code": "OR-17"},
            {"name": "Kendujhar (Keonjhar)", "code": "OR-18"},
            {"name": "Khordha", "code": "OR-19"},
            {"name": "Koraput", "code": "OR-20"},
            {"name": "Malkangiri", "code": "OR-21"},
            {"name": "Mayurbhanj", "code": "OR-22"},
            {"name": "Nabarangpur", "code": "OR-23"},
            {"name": "Nayagarh", "code": "OR-24"},
            {"name": "Nuapada", "code": "OR-25"},
            {"name": "Puri", "code": "OR-26"},
            {"name": "Rayagada", "code": "OR-27"},
            {"name": "Sambalpur", "code": "OR-28"},
            {"name": "Subarnapur (Sonepur)", "code": "OR-29"},
            {"name": "Sundargarh", "code": "OR-30"}
        ],
        "PY": [
            {"name": "Karaikal", "code": "PY-01"},
            {"name": "Mahe", "code": "PY-02"},
            {"name": "Puducherry", "code": "PY-03"},
            {"name": "Yanam", "code": "PY-04"}
        ],
        "PB": [
            {"name": "Amritsar", "code": "PB-01"},
            {"name": "Barnala", "code": "PB-02"},
            {"name": "Bathinda", "code": "PB-03"},
            {"name": "Faridkot", "code": "PB-04"},
            {"name": "Fatehgarh Sahib", "code": "PB-05"},
            {"name": "Fazilka", "code": "PB-06"},
            {"name": "Ferozepur", "code": "PB-07"},
            {"name": "Gurdaspur", "code": "PB-08"},
            {"name": "Hoshiarpur", "code": "PB-09"},
            {"name": "Jalandhar", "code": "PB-10"},
            {"name": "Kapurthala", "code": "PB-11"},
            {"name": "Ludhiana", "code": "PB-12"},
            {"name": "Mansa", "code": "PB-13"},
            {"name": "Moga", "code": "PB-14"},
            {"name": "Pathankot", "code": "PB-15"},
            {"name": "Patiala", "code": "PB-16"},
            {"name": "Rupnagar (Ropar)", "code": "PB-17"},
            {"name": "Sahibzada Ajit Singh Nagar (Mohali)", "code": "PB-18"},
            {"name": "Sangrur", "code": "PB-19"},
            {"name": "Shaheed Bhagat Singh Nagar (Nawanshahr)", "code": "PB-20"},
            {"name": "Sri Muktsar Sahib", "code": "PB-21"},
            {"name": "Tarn Taran", "code": "PB-22"}
        ],
        "RJ": [
            {"name": "Ajmer", "code": "RJ-01"},
            {"name": "Alwar", "code": "RJ-02"},
            {"name": "Banswara", "code": "RJ-03"},
            {"name": "Baran", "code": "RJ-04"},
            {"name": "Barmer", "code": "RJ-05"},
            {"name": "Bharatpur", "code": "RJ-06"},
            {"name": "Bhilwara", "code": "RJ-07"},
            {"name": "Bikaner", "code": "RJ-08"},
            {"name": "Bundi", "code": "RJ-09"},
            {"name": "Chittorgarh", "code": "RJ-10"},
            {"name": "Churu", "code": "RJ-11"},
            {"name": "Dausa", "code": "RJ-12"},
            {"name": "Dholpur", "code": "RJ-13"},
            {"name": "Dungarpur", "code": "RJ-14"},
            {"name": "Hanumangarh", "code": "RJ-15"},
            {"name": "Jaipur", "code": "RJ-16"},
            {"name": "Jaisalmer", "code": "RJ-17"},
            {"name": "Jalore", "code": "RJ-18"},
            {"name": "Jhalawar", "code": "RJ-19"},
            {"name": "Jhunjhunu", "code": "RJ-20"},
            {"name": "Jodhpur", "code": "RJ-21"},
            {"name": "Karauli", "code": "RJ-22"},
            {"name": "Kota", "code": "RJ-23"},
            {"name": "Nagaur", "code": "RJ-24"},
            {"name": "Pali", "code": "RJ-25"},
            {"name": "Pratapgarh", "code": "RJ-26"},
            {"name": "Rajsamand", "code": "RJ-27"},
            {"name": "Sawai Madhopur", "code": "RJ-28"},
            {"name": "Sikar", "code": "RJ-29"},
            {"name": "Sirohi", "code": "RJ-30"},
            {"name": "Sri Ganganagar", "code": "RJ-31"},
            {"name": "Tonk", "code": "RJ-32"},
            {"name": "Udaipur", "code": "RJ-33"}
        ],
        "SK": [
            {"name": "East Sikkim", "code": "SK-01"},
            {"name": "North Sikkim", "code": "SK-02"},
            {"name": "South Sikkim", "code": "SK-03"},
            {"name": "West Sikkim", "code": "SK-04"}
        ],
        "TN": [
            {"name": "Ariyalur", "code": "TN-01"},
            {"name": "Chennai", "code": "TN-02"},
            {"name": "Coimbatore", "code": "TN-03"},
            {"name": "Cuddalore", "code": "TN-04"},
            {"name": "Dharmapuri", "code": "TN-05"},
            {"name": "Dindigul", "code": "TN-06"},
            {"name": "Erode", "code": "TN-07"},
            {"name": "Kanchipuram", "code": "TN-08"},
            {"name": "Kanniyakumari", "code": "TN-09"},
            {"name": "Karur", "code": "TN-10"},
            {"name": "Krishnagiri", "code": "TN-11"},
            {"name": "Madurai", "code": "TN-12"},
            {"name": "Nagapattinam", "code": "TN-13"},
            {"name": "Namakkal", "code": "TN-14"},
            {"name": "Perambalur", "code": "TN-15"},
            {"name": "Pudukkottai", "code": "TN-16"},
            {"name": "Ramanathapuram", "code": "TN-17"},
            {"name": "Salem", "code": "TN-18"},
            {"name": "Sivaganga", "code": "TN-19"},
            {"name": "Thanjavur", "code": "TN-20"},
            {"name": "The Nilgiris", "code": "TN-21"},
            {"name": "Theni", "code": "TN-22"},
            {"name": "Thiruvallur", "code": "TN-23"},
            {"name": "Thiruvarur", "code": "TN-24"},
            {"name": "Thoothukudi", "code": "TN-25"},
            {"name": "Tiruchirappalli", "code": "TN-26"},
            {"name": "Tirunelveli", "code": "TN-27"},
            {"name": "Tiruppur", "code": "TN-28"},
            {"name": "Tiruvannamalai", "code": "TN-29"},
            {"name": "Vellore", "code": "TN-30"},
            {"name": "Viluppuram", "code": "TN-31"},
            {"name": "Virudhunagar", "code": "TN-32"}
        ],
        "TG": [
            {"name": "Adilabad", "code": "TG-01"},
            {"name": "Bhadradri Kothagudem", "code": "TG-02"},
            {"name": "Hyderabad", "code": "TG-03"},
            {"name": "Jagtial", "code": "TG-04"},
            {"name": "Jangaon", "code": "TG-05"},
            {"name": "Jayashankar Bhupalpally", "code": "TG-06"},
            {"name": "Jogulamba Gadwal", "code": "TG-07"},
            {"name": "Kamareddy", "code": "TG-08"},
            {"name": "Karimnagar", "code": "TG-09"},
            {"name": "Khammam", "code": "TG-10"},
            {"name": "Kumuram Bheem", "code": "TG-11"},
            {"name": "Mahabubabad", "code": "TG-12"},
            {"name": "Mahabubnagar", "code": "TG-13"},
            {"name": "Mancherial", "code": "TG-14"},
            {"name": "Medak", "code": "TG-15"},
            {"name": "Medchal", "code": "TG-16"},
            {"name": "Mulugu", "code": "TG-17"},
            {"name": "Nagarkurnool", "code": "TG-18"},
            {"name": "Nalgonda", "code": "TG-19"},
            {"name": "Narayanpet", "code": "TG-20"},
            {"name": "Nirmal", "code": "TG-21"},
            {"name": "Nizamabad", "code": "TG-22"},
            {"name": "Peddapalli", "code": "TG-23"},
            {"name": "Rajanna Sircilla", "code": "TG-24"},
            {"name": "Rangareddy", "code": "TG-25"},
            {"name": "Sangareddy", "code": "TG-26"},
            {"name": "Siddipet", "code": "TG-27"},
            {"name": "Suryapet", "code": "TG-28"},
            {"name": "Vikarabad", "code": "TG-29"},
            {"name": "Wanaparthy", "code": "TG-30"},
            {"name": "Warangal Rural", "code": "TG-31"},
            {"name": "Warangal Urban", "code": "TG-32"},
            {"name": "Yadadri Bhuvanagiri", "code": "TG-33"}
        ],
        "TR": [
            {"name": "Dhalai", "code": "TR-01"},
            {"name": "Gomati", "code": "TR-02"},
            {"name": "Khowai", "code": "TR-03"},
            {"name": "North Tripura", "code": "TR-04"},
            {"name": "Sepahijala", "code": "TR-05"},
            {"name": "South Tripura", "code": "TR-06"},
            {"name": "Unakoti", "code": "TR-07"},
            {"name": "West Tripura", "code": "TR-08"}
        ],
        "UP": [
            {"name": "Agra", "code": "UP-01"},
            {"name": "Aligarh", "code": "UP-02"},
            {"name": "Ambedkar Nagar", "code": "UP-03"},
            {"name": "Amethi (Chatrapati Sahuji Mahraj Nagar)", "code": "UP-04"},
            {"name": "Amroha (J.P. Nagar)", "code": "UP-05"},
            {"name": "Auraiya", "code": "UP-06"},
            {"name": "Ayodhya", "code": "UP-07"},
            {"name": "Azamgarh", "code": "UP-08"},
            {"name": "Baghpat", "code": "UP-09"},
            {"name": "Bahraich", "code": "UP-10"},
            {"name": "Ballia", "code": "UP-11"},
            {"name": "Balrampur", "code": "UP-12"},
            {"name": "Banda", "code": "UP-13"},
            {"name": "Barabanki", "code": "UP-14"},
            {"name": "Bareilly", "code": "UP-15"},
            {"name": "Basti", "code": "UP-16"},
            {"name": "Bhadohi", "code": "UP-17"},
            {"name": "Bijnor", "code": "UP-18"},
            {"name": "Budaun", "code": "UP-19"},
            {"name": "Bulandshahr", "code": "UP-20"},
            {"name": "Chandauli", "code": "UP-21"},
            {"name": "Chitrakoot", "code": "UP-22"},
            {"name": "Deoria", "code": "UP-23"},
            {"name": "Etah", "code": "UP-24"},
            {"name": "Etawah", "code": "UP-25"},
            {"name": "Farrukhabad", "code": "UP-26"},
            {"name": "Fatehpur", "code": "UP-27"},
            {"name": "Firozabad", "code": "UP-28"},
            {"name": "Gautam Buddha Nagar", "code": "UP-29"},
            {"name": "Ghaziabad", "code": "UP-30"},
            {"name": "Ghazipur", "code": "UP-31"},
            {"name": "Gonda", "code": "UP-32"},
            {"name": "Gorakhpur", "code": "UP-33"},
            {"name": "Hamirpur", "code": "UP-34"},
            {"name": "Hapur (Panchsheel Nagar)", "code": "UP-35"},
            {"name": "Hardoi", "code": "UP-36"},
            {"name": "Hathras", "code": "UP-37"},
            {"name": "Jalaun", "code": "UP-38"},
            {"name": "Jaunpur", "code": "UP-39"},
            {"name": "Jhansi", "code": "UP-40"},
            {"name": "Kannauj", "code": "UP-41"},
            {"name": "Kanpur Dehat", "code": "UP-42"},
            {"name": "Kanpur Nagar", "code": "UP-43"},
            {"name": "Kasganj", "code": "UP-44"},
            {"name": "Kaushambi", "code": "UP-45"},
            {"name": "Kushinagar (Padrauna)", "code": "UP-46"},
            {"name": "Lakhimpur - Kheri", "code": "UP-47"},
            {"name": "Lalitpur", "code": "UP-48"},
            {"name": "Lucknow", "code": "UP-49"},
            {"name": "Maharajganj", "code": "UP-50"},
            {"name": "Mahoba", "code": "UP-51"},
            {"name": "Mainpuri", "code": "UP-52"},
            {"name": "Mathura", "code": "UP-53"},
            {"name": "Mau", "code": "UP-54"},
            {"name": "Meerut", "code": "UP-55"},
            {"name": "Mirzapur", "code": "UP-56"},
            {"name": "Moradabad", "code": "UP-57"},
            {"name": "Muzaffarnagar", "code": "UP-58"},
            {"name": "Pilibhit", "code": "UP-59"},
            {"name": "Pratapgarh", "code": "UP-60"},
            {"name": "Prayagraj (Allahabad)", "code": "UP-61"},
            {"name": "Raebareli", "code": "UP-62"},
            {"name": "Rampur", "code": "UP-63"},
            {"name": "Saharanpur", "code": "UP-64"},
            {"name": "Sambhal (Bhim Nagar)", "code": "UP-65"},
            {"name": "Sant Kabir Nagar", "code": "UP-66"},
            {"name": "Shahjahanpur", "code": "UP-67"},
            {"name": "Shamli", "code": "UP-68"},
            {"name": "Shravasti", "code": "UP-69"},
            {"name": "Siddharthnagar", "code": "UP-70"},
            {"name": "Sitapur", "code": "UP-71"},
            {"name": "Sonbhadra", "code": "UP-72"},
            {"name": "Sultanpur", "code": "UP-73"},
            {"name": "Unnao", "code": "UP-74"},
            {"name": "Varanasi", "code": "UP-75"}
        ],
        "UT": [
            {"name": "Almora", "code": "UT-01"},
            {"name": "Bageshwar", "code": "UT-02"},
            {"name": "Chamoli", "code": "UT-03"},
            {"name": "Champawat", "code": "UT-04"},
            {"name": "Dehradun", "code": "UT-05"},
            {"name": "Haridwar", "code": "UT-06"},
            {"name": "Nainital", "code": "UT-07"},
            {"name": "Pauri Garhwal", "code": "UT-08"},
            {"name": "Pithoragarh", "code": "UT-09"},
            {"name": "Rudraprayag", "code": "UT-10"},
            {"name": "Tehri Garhwal", "code": "UT-11"},
            {"name": "Udham Singh Nagar", "code": "UT-12"},
            {"name": "Uttarkashi", "code": "UT-13"}
        ],
        "WB": [
            {"name": "Alipurduar", "code": "WB-01"},
            {"name": "Bankura", "code": "WB-02"},
            {"name": "Birbhum", "code": "WB-03"},
            {"name": "Cooch Behar", "code": "WB-04"},
            {"name": "Dakshin Dinajpur (South Dinajpur)", "code": "WB-05"},
            {"name": "Darjeeling", "code": "WB-06"},
            {"name": "Hooghly", "code": "WB-07"},
            {"name": "Howrah", "code": "WB-08"},
            {"name": "Jalpaiguri", "code": "WB-09"},
            {"name": "Jhargram", "code": "WB-10"},
            {"name": "Kalimpong", "code": "WB-11"},
            {"name": "Kolkata", "code": "WB-12"},
            {"name": "Malda", "code": "WB-13"},
            {"name": "Murshidabad", "code": "WB-14"},
            {"name": "Nadia", "code": "WB-15"},
            {"name": "North 24 Parganas", "code": "WB-16"},
            {"name": "Paschim Medinipur (West Medinipur)", "code": "WB-17"},
            {"name": "Paschim Bardhaman (West Bardhaman)", "code": "WB-18"},
            {"name": "Purba Bardhaman (Bardhaman)", "code": "WB-19"},
            {"name": "Purba Medinipur (East Medinipur)", "code": "WB-20"},
            {"name": "Purulia", "code": "WB-21"},
            {"name": "South 24 Parganas", "code": "WB-22"},
            {"name": "Uttar Dinajpur (North Dinajpur)", "code": "WB-23"}
        ]
    }
};