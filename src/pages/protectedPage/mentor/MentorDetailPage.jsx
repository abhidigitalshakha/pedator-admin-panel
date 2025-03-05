import React from "react";

const mentor = {
  _id: "672fa823c07b09fbb62094b4",
  profileImage: "https://storage.googleapis.com/pedator-app.appspot.com/1731176790660_photo.png",
  livePhoto: "https://storage.googleapis.com/pedator-app.appspot.com/1731777275247_livePhoto.jpg",
  introVideo: "https://storage.googleapis.com/pedator-app.appspot.com/1731176794649_vid1.mp4",
  displayName: "HITESH PATRE",
  fullName: "HITESH MENTOR",
  firstName: "HITESH",
  lastName: "MENTOR",
  username: "hiteshmentor",
  email: "hiteshsir@yopmail.com",
  mobile: "9933456024",
  bio: "A mentor is an experienced and trusted advisor who provides guidance, support, and knowledge sharing to help mentees achieve their personal or professional goals.",
  address: "Sector 6, Bhilai, Durg",
  city: "668c376fafbde38ae389cccd",
  country: "668c2851cc1afceb97364144",
  postalCode: 12345,
  numberOfExperience: 12,
  commitmentOfTeachingHour: "60",
  idCardType: "Aadhaar Card",
  signUpMotivation: "sdfds",
  isVerified: true,
  isProfileCompleted: true,
  isProfileApproved: false,
  isFullyVerified: false,
  role: "mentor",
  joiningDate: "2024-12-07T08:26:55.514Z",
  createdAt: "2025-03-05T10:02:37.459Z",
  education: [
    {
      country: "India",
      collegeOrUniversity: "College",
      title: "Z Plus",
      major: "Mjr",
      year: "2021",
    },
  ],
  certificates: [
    {
      certificateOrAward: "Award",
      certificateFrom: "Google",
      year: "2021",
    },
  ],
  languages: [
    {
      name: "Hindi",
      level: "BEGINNER",
    },
  ],
  skills: [
    {
      name: "RN",
      level: "INTERMEDIATE",
    },
  ],
};

const MentorDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full">
        
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src={mentor.profileImage}
            alt={mentor.displayName}
            className="w-24 h-24 rounded-full border-4 border-[#108e88] shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{mentor.fullName}</h2>
            <p className="text-gray-600">Mentor & Instructor</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Contact Details</h3>
          <div className="mt-2 text-gray-700">
            <p><span className="font-semibold">Email:</span> {mentor.email}</p>
            <p><span className="font-semibold">Phone:</span> {mentor.mobile}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">About Mentor</h3>
          <p className="text-gray-700 mt-2">{mentor.bio}</p>
        </div>

        {/* Skills */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {mentor.skills.map((skill, index) => (
              <span key={index} className="bg-[#108e88] text-white px-3 py-1 rounded-full text-sm font-medium">
                {skill.name} ({skill.level})
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
          <div className="mt-2">
            {mentor.languages.map((language, index) => (
              <p key={index} className="text-gray-700">
                <span className="font-semibold">{language.name}</span> - {language.level}
              </p>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Education</h3>
          <div className="mt-2">
            {mentor.education.map((edu, index) => (
              <p key={index} className="text-gray-700">
                <span className="font-semibold">{edu.title} in {edu.major}</span> from {edu.collegeOrUniversity}, {edu.country} ({edu.year})
              </p>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Certificates & Awards</h3>
          <div className="mt-2">
            {mentor.certificates.map((cert, index) => (
              <p key={index} className="text-gray-700">
                <span className="font-semibold">{cert.certificateOrAward}</span> from {cert.certificateFrom} ({cert.year})
              </p>
            ))}
          </div>
        </div>

        {/* Experience & Commitment */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Experience & Commitment</h3>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Experience:</span> {mentor.numberOfExperience} years
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Teaching Hours Commitment:</span> {mentor.commitmentOfTeachingHour} hours
          </p>
        </div>

        {/* Intro Video */}
        <div className="mt-6 border-t pt-4 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Intro Video</h3>
          <div className="mt-2 max-w-3xl mx-auto">
            <video controls className="w-full rounded-lg shadow-md">
              <source src={mentor.introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <button className="px-5 py-2 bg-[#108e88] text-white rounded-md hover:bg-[#dff7f5] hover:text-black cursor-pointer transition">
            Contact Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorDetailPage;
