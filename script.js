


let resume = {
    "name": "John Doe",
    "contact": {
        "email": "john.doe@example.com",
        "phone": "+1 (555) 123-4567",
        "address": "123 Main Street, Cityville, State, 12345"
    },
    "summary": "Experienced software engineer with a passion for web development and a strong background in full-stack development.",
    "education": [
        {
            "degree": "Bachelor of Science in Computer Science",
            "school": "University of Technology",
            "location": "Cityville, State",
            "graduationYear": 2018
        }
    ],
    "experience": [
        {
            "title": "Senior Software Engineer",
            "company": "Tech Solutions Inc.",
            "location": "Cityville, State",
            "startDate": "2018-06-01",
            "endDate": "2022-12-31",
            "responsibilities": [
                "Led a team of developers in the implementation of a scalable web application.",
                "Collaborated with cross-functional teams to deliver high-quality software products.",
                "Maintained and improved existing software applications."
            ]
        },
        {
            "title": "Software Engineer",
            "company": "InnovateTech Ltd.",
            "location": "Tech City, State",
            "startDate": "2016-01-15",
            "endDate": "2018-05-31",
            "responsibilities": [
                "Developed and maintained frontend components of web applications.",
                "Worked closely with UX/UI designers to implement responsive and user-friendly interfaces."
            ]
        }
    ],
    "skills": [
        "JavaScript",
        "React",
        "Node.js",
        "HTML5",
        "CSS3",
        "Python",
        "Java",
        "Database Management",
        "Agile Development"
    ],
    "certifications": [
        {
            "name": "AWS Certified Developer",
            "issuedBy": "Amazon Web Services",
            "issuedDate": "2019-08-15"
        }
    ],
    "languages": [
        {
            "name": "English",
            "proficiency": "Fluent"
        }
    ],
    "projects": [
        {
            "title": "E-commerce Platform",
            "description": "Developed a full-stack e-commerce platform with secure payment processing and order management.",
            "technologies": ["React", "Node.js", "Express", "MongoDB"]
        },
        {
            "title": "Task Management App",
            "description": "Built a task management application with real-time collaboration features.",
            "technologies": ["React", "Redux", "Firebase"]
        }
    ]
}

//  for loop...
let keys = Object.keys(resume)
for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    console.log(key, resume[key])
}


// for in loop...
for (let key in resume) {
    console.log(key, resume[key])
}

// for of loop...
let allKeys = Object.keys(resume)
for (let i in allKeys) {
    let key = allKeys[i]
    console.log(key, resume[key])
}

// for each loop...
for (let i in resume) {
    if (Array.isArray(resume[i])) {
        resume[i].forEach((items, index) => {
            console.log(items)
        })
    }
}