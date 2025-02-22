import dashboard from "../assets/images/layout-dashboard.png"
import folders from "../assets/images/folders.png"
import circleUser from "../assets/images/circle-user.png"
import graduationCap from "../assets/images/graduation-cap.png"
import transition from "../assets/images/receipt-indian-rupee.png"

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
            {
                icon: transition,
                label: "Transitions",
                href: "/transitions",
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
export const transitionsColumns = [
  {
    header: "S.No",
    assessor: "sNo",
    className: "p-4",
  },
  {
    header: "Transaction ID",
    assessor: "transactionID",
    className: "hidden md:table-cell",
  },
  {
    header: "User",
    assessor: "user",
    className: "hidden md:table-cell",
  },
  {
    header: "Role",
    assessor: "role",
    className: "hidden md:table-cell",
  },
  {
    header: "Type",
    assessor: "type",
    className: "hidden md:table-cell",
  },
  {
    header: "Amount",
    assessor: "amount",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    assessor: "status",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    assessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Remark",
    assessor: "remark",
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
  

export const transactions = [
    {
      id: "TXN001",
      user: "Alice Johnson",
      role: "Learner",
      type: "Credit",
      amount: 499,
      status: "Success",
      date: "2025-02-15",
      remark: "Course Purchase",
    },
    {
      id: "TXN002",
      user: "Mark Wilson",
      role: "Learner",
      type: "Debit",
      amount: 299,
      status: "Pending",
      date: "2025-02-14",
      remark: "Refund Process",
    },
    {
      id: "TXN003",
      user: "Emma Brown",
      role: "Mentor",
      type: "Credit",
      amount: 799,
      status: "Success",
      date: "2025-02-13",
      remark: "Course Sold",
    },
    {
      id: "TXN004",
      user: "Sophia Williams",
      role: "Mentor",
      type: "Debit",
      amount: 499,
      status: "Failed",
      date: "2025-02-12",
      remark: "Withdrawal Request",
    },
    {
      id: "TXN005",
      user: "James Anderson",
      role: "Learner",
      type: "Credit",
      amount: 999,
      status: "Success",
      date: "2025-02-11",
      remark: "Course Purchase",
    },
    {
      id: "TXN006",
      user: "Platform Fees",
      role: "Other",
      type: "Debit",
      amount: 300,
      status: "Completed",
      date: "2025-02-10",
      remark: "Platform Expense",
    },
  ];