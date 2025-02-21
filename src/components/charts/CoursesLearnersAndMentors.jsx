import React from 'react'
import moreButton from "../../assets/images/more.png"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Course1',
        learners: 40,
        mentors: 24,
    },
    {
        name: 'Course2',
        learners: 30,
        mentors: 13,
    },
    {
        name: 'Course3',
        learners: 20,
        mentors: 98,
    },
    {
        name: 'Course4',
        learners: 27,
        mentors: 39,
    },
    {
        name: 'Course5',
        learners: 18,
        mentors: 48,
    },
    {
        name: 'Course6',
        learners: 23,
        mentors: 38,
    },
];


const CoursesLearnersAndMentors = () => {
    return (
        <div className=' w-full h-full bg-white shadow-lg rounded-lg p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <img src={moreButton} alt="" className="cursor-pointer" />
            </div>
            <ResponsiveContainer width={"100%"} height={"90%"}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                    
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                    <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius:"10px" ,borderColor:"lightgray"}} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
                    <Bar dataKey="learners" fill="#8fd3cd" legendType='circle' radius={[10 ,10,0,0]} />
                    <Bar dataKey="mentors" fill="#108e88" legendType='circle' radius={[10 ,10,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CoursesLearnersAndMentors