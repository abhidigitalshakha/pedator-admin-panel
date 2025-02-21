import dashboard from "../assets/images/layout-dashboard.png"
import folders from "../assets/images/folders.png"
import circleUser from "../assets/images/circle-user.png"
import graduationCap from "../assets/images/graduation-cap.png"

export const menuItems = [
    {
        title: "Dashboard",
        items: [
            {
                icon: dashboard,
                label: "Dashboard",
                href: "/",
                visible: ["admin", "super-admin", "student"],
            },
        ],
    },
    {
        title: "Management",
        items: [
            {
                icon: circleUser,
                label: "Learner",
                href: "/learners",
                visible: ["admin", "super-admin", "student"],
            },
            {
                icon: circleUser,
                label: "Mentors",
                href: "/mentors",
                visible: ["admin", "super-admin", "student"],
            },
            {
                icon: graduationCap,
                label: "Course",
                href: "/courses",
                visible: ["admin", "super-admin", "student"],
            },
        ],
    },
]

export const learnersColumns = [
  {
    header: "S.No",
    assessor: "sNo",
    className: "p-4",
  },
  {
    header: "Username",
    assessor: "Username",
    className: "hidden md:table-cell",
  },
  {
    header: "E-mail",
    assessor: "eMail",
    className: "hidden md:table-cell",
  },
  {
    header: "Mobile No",
    assessor: "mobileNo",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    assessor: "actions",
  },
];

export const coursesColumns = [
  {
    header: "S.No",
    assessor: "sNo",
    className: "p-4",
  },
  {
    header: "Title",
    assessor: "title",
    className: "hidden md:table-cell",
  },
  {
    header: "Category",
    assessor: "category",
    className: "hidden md:table-cell",
  },
  {
    header: "Sub Category",
    assessor: "subCategory",
    className: "hidden md:table-cell",
  },
  {
    header: "Educator",
    assessor: "educator",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    assessor: "status",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    assessor: "actions",
  },
];
export const tutorsColumns = [
  {
    header: "S.No",
    assessor: "sNo",
    className: "p-4",
  },
  {
    header: "Username",
    assessor: "username",
    className: "hidden md:table-cell",
  },
  {
    header: "E-mail",
    assessor: "eMail",
    className: "hidden md:table-cell",
  },
  {
    header: "Mobile No",
    assessor: "mobile",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    assessor: "actions",
  },
];


export const mentors = [
    {
      id: 1,
      username: "john_doe",
      email: "john.doe@example.com",
      mobile: "123-456-7890",
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane.smith@example.com",
      mobile: "098-765-4321",
    },
    {
      id: 3,
      username: "emily_brown",
      email: "emily.brown@example.com",
      mobile: "234-567-8901",
    },
    {
      id: 4,
      username: "michael_lee",
      email: "michael.lee@example.com",
      mobile: "345-678-9012",
    }
  ];
  
 export const courses = [
    {
      id: 1,
      title: "JavaScript for Beginners",
      category: "Programming",
      subCategory: "Web Development",
      educator: "John Doe",
      status: "Active"
    },
    {
      id: 2,
      title: "Advanced Python Programming",
      category: "Programming",
      subCategory: "Data Science",
      educator: "Jane Smith",
      status: "Inactive"
    },
    {
      id: 3,
      title: "Graphic Design Essentials",
      category: "Design",
      subCategory: "UI/UX Design",
      educator: "Emily Brown",
      status: "Active"
    },
    {
      id: 4,
      title: "Digital Marketing 101",
      category: "Marketing",
      subCategory: "SEO",
      educator: "Michael Lee",
      status: "Active"
    }
  ];
  
export const tutors = [
    {
      id: 1,
      username: "john_doe",
      email: "john.doe@example.com",
      mobile: "123-456-7890"
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane.smith@example.com",
      mobile: "098-765-4321"
    },
    {
      id: 3,
      username: "emily_brown",
      email: "emily.brown@example.com",
      mobile: "234-567-8901"
    },
    {
      id: 4,
      username: "michael_lee",
      email: "michael.lee@example.com",
      mobile: "345-678-9012"
    }
  ];
  