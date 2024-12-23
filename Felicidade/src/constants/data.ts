/* eslint-disable prettier/prettier */
import images from './icons';
import {SCREENS} from './routes';

export const introSlides = [
  {
    key: '1',
    title: 'Visitor Management',
    text: 'Easy tracking of visitors, cabs, and even your deliveries! It’s a one-stop solution to manage all your visitors whether you are inside the society or not.',
    image: images.INTRO_IMAGE,
  },
  {
    key: '2',
    title: 'Maintenance and Utility Bill Payments',
    text: 'Convenient online payment options for all society bills. Now, you will never miss paying society bills on time.',
    image: images.INTRO_IMAGE,
  },
  {
    key: '3',
    title: 'Complaint Management',
    text: 'Easy tracking of visitors, cabs, and even your deliveries! It’s a one-stop solution to manage all your visitors whether you are inside the society or not.',
    image: images.INTRO_IMAGE,
  },
];

export const ListData = [
  {
    id: 1,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 2,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 3,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 4,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 5,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 6,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 7,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 8,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 9,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
  {
    id: 10,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    date: 'Mon, 12:20pm',
    flat: 'Flat no. B-101',
  },
];

export const selectRole = [
  {label: 'Member', value: 'member'},
  {label: 'President', value: 'president'},
  {label: 'Guard', value: 'guard'},
];

export const visitorType = [
  {label: 'Guest', value: 'guest'},
  {label: 'Worker', value: 'worker'},
];

export const wings = [
  {label: 'A', value: 'a'},
  {label: 'B', value: 'b'},
];

export const flatNo = [
  {label: '101', value: '101'},
  {label: '102', value: '102'},
];

export const endUserStackNavIcon = [
  {
    id: 1,
    title: 'My Visitor',
    image: images.MYVISITORS,
    navigate: SCREENS.MYVISITOR,
  },
  {
    id: 2,
    title: 'My Bill',
    image: images.MYBILL,
    navigate: SCREENS.MYBILL,
  },
  {
    id: 3,
    title: 'My Complaints',
    image: images.MYCOMPLAINTS,
    navigate: SCREENS.MYCOMPLAINTS,
  },
  {
    id: 4,
    title: 'Book Hall',
    image: images.BOOKHALL,
    navigate: SCREENS.BOOKHALL,
  },
];

export const userVisitorList = [
  {
    id: 1,
    name: 'Michael Jones',
    image: images.RECENT_VISITOR,
    visitorType: 'Delivery Boy',
    date: ' 23 Mar 2023 | 01:00pm  ',
  },
  {
    id: 2,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    visitorType: 'Delivery Boy',
    date: ' 23 Mar 2023 | 01:00pm  ',
  },
  {
    id: 3,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    visitorType: 'Delivery Boy',
    date: ' 23 Mar 2023 | 01:00pm  ',
  },
  {
    id: 4,
    name: 'Visitor Management',
    image: images.RECENT_VISITOR,
    visitorType: 'Delivery Boy',
    date: ' 23 Mar 2023 | 01:00pm  ',
  },
];

export const myBillBoxes = [
  {
    title: 'Maintenance of March 2023',
    amount: '2500',
  },
  {
    title: 'Maintenance of March 2023',
    amount: '2500',
  },
  {
    title: 'Maintenance of March 2023',
    amount: '2500',
  },
];

export const paymentHistoryList = [
  {
    id: 1,
    paymentName: 'Maintenance of February 2023',
    paymentIcon: images.MAINTENANCE_ICON,
    date: '01 Mar 2023',
    time: '12:20 pm',
  },
  {
    id: 2,
    paymentName: 'Electricity of January 2023',
    paymentIcon: images.ELECTRIC_ICON,
    date: '01 Mar 2023',
    time: '12:20 pm',
  },
  {
    id: 3,
    paymentName: 'Maintenance of December 2022',
    paymentIcon: images.MAINTENANCE_ICON,
    date: '01 Mar 2023',
    time: '12:20 pm',
  },
  {
    id: 4,
    paymentName: 'Maintenance of November 2022',
    paymentIcon: images.MAINTENANCE_ICON,
    date: '01 Mar 2023',
    time: '12:20 pm',
  },
  {
    id: 5,
    paymentName: 'Electricity of February 2023',
    paymentIcon: images.ELECTRIC_ICON,
    date: '01 Mar 2023',
    time: '12:20 pm',
  },
  {
    id: 6,
    paymentName: 'Electricity of February 2023',
    paymentIcon: images.ELECTRIC_ICON,
    date: '01 Mar 2023',
    time: '12:20 pm',
  },
  {
    id: 7,
    paymentName: 'Electricity of February 2023',
    paymentIcon: images.ELECTRIC_ICON,
    date: '01 Mar 2023',
    time: '12:20 pm',
  },
];

export const BillData = [
  {
    id: 1,
    title: 'Electricity Bill',
    date: 'March 2023',
    amount: '2500',
  },
  {
    id: 2,
    title: 'Water Bill',
    date: 'April 2023',
    amount: '1800',
  },
  {
    id: 3,
    title: 'Water Bill',
    date: 'April 2023',
    amount: '1800',
  },
  {
    id: 4,
    title: 'Electricity Bill',
    date: 'March 2023',
    amount: '2500',
  },
  {
    id: 5,
    title: 'Electricity Bill',
    date: 'March 2023',
    amount: '2500',
  },
  {
    id: 6,
    title: 'Water Bill',
    date: 'April 2023',
    amount: '1800',
  },
];

export const Notice = [
  {
    title: 'Annual Meeting On ',
    date: '25-03-2023',
    dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Annual Meeting On ',
    date: '25-03-2023',
    dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Annual Meeting On ',
    date: '25-03-2023',
    dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Annual Meeting On ',
    date: '25-03-2023',
    dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export const RecentVisitors = [
  {
    image: images.RECENT_VISITOR,
    name: 'Michael Jones',
    role: 'Delivery Boy',
    date: '25-03-2023',
    time: ' 01:00pm',
  },
  {
    image: images.RECENT_VISITOR,
    name: 'Michael Jones',
    role: 'Delivery Boy',
    date: '25-03-2023',
    time: ' 01:00pm',
  },
  {
    image: images.RECENT_VISITOR,
    name: 'Michael Jones',
    role: 'Delivery Boy',
    date: '25-03-2023',
    time: ' 01:00pm',
  },
  {
    image: images.RECENT_VISITOR,
    name: 'Michael Jones',
    role: 'Delivery Boy',
    date: '25-03-2023',
    time: ' 01:00pm',
  },
];

export const complaintsButttons = [
  {
    id: 1,
    name: 'Parking Problems',
  },
  {
    id: 2,
    name: 'Security',
  },
  {
    id: 3,
    name: 'Maintenance',
  },
  {
    id: 4,
    name: 'Loud Music',
  },
  {
    id: 5,
    name: 'Construction Noise',
  },
  {
    id: 6,
    name: 'Lorem Ipsum',
  },
];

export const activityBoxList = [
  {
    id: 1,
    image: images.MAINTENANCE_ICON,
    title: 'Maintenance Bill',
  },
  {
    id: 2,
    image: images.ELECTRIC_ICON,
    title: 'Electricity Bill',
  },
  {
    id: 3,
    image: images.PAYRENT_ICON,
    title: 'Pay Rent',
  },
  {
    id: 4,
    image: images.PAYRENT_ICON,
    title: 'Pay Rent',
  },
  {
    id: 5,
    image: images.PAYRENT_ICON,
    title: 'Pay Rent',
  },
];

export const UpComingEvnt = [
  {
    title: 'Birthday Party of Arpan ',
    date: '27 March 2023 ',
    time:'08:00 PM',
    dec: 'at Community Hall',
  },
  {
    title: 'Birthday Party of Arpan ',
    date: '27 March 2023 ',
    time:'08:00 PM',
    dec: 'at Community Hall',
  },
  {
    title: 'Birthday Party of Arpan ',
    date: '27 March 2023 ',
    time:'08:00 PM',
    dec: 'at Community Hall',
  },
  {
    title: 'Birthday Party of Arpan ',
    date: '27 March 2023 ',
    time:'08:00 PM',
    dec: 'at Community Hall',
  },
  
];

export const ComplainList = [
  {
    id: 1,
    image: images.PROFILE,
    name: 'Subhash Patel',
    flatno:'Flat no. B-201',
    progress: 'Accepted',
    day:'Mon',
    date:'21 Mar 2023',
  },
  
];
export const ComplainHistoryList = [
  { 
    id: 1,
    image: images.PROFILE,
    name: 'Christopher White',
    flatno:'Flat no. A-601',
    progress: 'In progress',
    day:'Mon',
    date:'18 Fab 2023',
  },
  {
    id: 2,
    image: images.PROFILE,
    name: 'Emily Brown',
    flatno:'Flat no. B-1001',
    progress: 'Resolved',
    day:'Mon',
    date:'01 Jan 2023',
  },
  {
    id: 3,
    image: images.PROFILE,
    name: 'James Rodriguez',
    flatno:'Flat no. C-201',
    progress: 'Resolved',
    day:'Mon',
    date:' 01 Dec 2022',
  },
  
];
export const ComplainDetail = [
  { 
    id: 1,
    type: 'Parking Problems',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];
export const PresidentProfiledata = [
  { 
    id: 1,
    name: 'Lorem Ipsum',
  },
  { 
    id: 2,
    name: 'Lorem Ipsum',
  },
  { 
    id: 3,
    name: 'Lorem Ipsum',
  },
  { 
    id: 4,
    name: 'Lorem Ipsum',
  },
  { 
    id: 5,
    name: 'Lorem Ipsum',
  },
];