import { Component } from '@angular/core';
import { Ipro } from './shared/models/product';
import { Istd } from './shared/models/student';
import { Icomp, Icompany } from './shared/models/compony';
import { Iemp } from './shared/models/employee ';
import { Icourse } from './shared/models/course';
import { Itea } from './shared/models/teachers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stdArr: Array<Istd> = [
   {
  fname: 'Suresh',
  lname: 'Kadam',
  email: 'suresh.kadam@gmail.com',
  contact: 9988776655,
  stdid: '201'
},
{
  fname: 'Kavita',
  lname: 'More',
  email: 'kavita.more@gmail.com',
  contact: 9876654321,
  stdid: '202'
},
{
  fname: 'Nilesh',
  lname: 'Bhosale',
  email: 'nilesh.bhosale@gmail.com',
  contact: 9765432109,
  stdid: '203'
},
{
  fname: 'Aarti',
  lname: 'Chavan',
  email: 'aarti.chavan@gmail.com',
  contact: 9654321098,
  stdid: '204'
},
{
  fname: 'Mahesh',
  lname: 'Pawar',
  email: 'mahesh.pawar@gmail.com',
  contact: 9543210987,
  stdid: '205'
},
{
  fname: 'Komal',
  lname: 'Shinde',
  email: 'komal.shinde@gmail.com',
  contact: 9432109876,
  stdid: '206'
},
{
  fname: 'Sanket',
  lname: 'Gaikwad',
  email: 'sanket.gaikwad@gmail.com',
  contact: 9321098765,
  stdid: '207'
},
{
  fname: 'Rutuja',
  lname: 'Patankar',
  email: 'rutuja.patankar@gmail.com',
  contact: 9210987654,
  stdid: '208'
},
{
  fname: 'Akash',
  lname: 'Sawant',
  email: 'akash.sawant@gmail.com',
  contact: 9109876543,
  stdid: '209'
},
{
  fname: 'Shruti',
  lname: 'Gore',
  email: 'shruti.gore@gmail.com',
  contact: 9098765432,
  stdid: '210'
}

  ]
  proArr: Array<Ipro> = [
  {
  pname: 'Gaming Laptop',
  brand: 'Asus',
  price: 82000,
  category: 'Electronics',
  pid: 'P201'
},
{
  pname: 'Smartphone',
  brand: 'OnePlus',
  price: 36000,
  category: 'Electronics',
  pid: 'P202'
},
{
  pname: 'Wireless Earbuds',
  brand: 'Boat',
  price: 3200,
  category: 'Accessories',
  pid: 'P203'
},
{
  pname: 'Fitness Band',
  brand: 'Xiaomi',
  price: 2800,
  category: 'Wearables',
  pid: 'P204'
},
{
  pname: 'Soundbar',
  brand: 'Samsung',
  price: 14500,
  category: 'Audio',
  pid: 'P205'
},
{
  pname: 'Mechanical Keyboard',
  brand: 'Redragon',
  price: 3800,
  category: 'Computer Accessories',
  pid: 'P206'
},
{
  pname: 'Wireless Mouse',
  brand: 'Dell',
  price: 1700,
  category: 'Computer Accessories',
  pid: 'P207'
},
{
  pname: 'Android Tablet',
  brand: 'Realme',
  price: 21000,
  category: 'Electronics',
  pid: 'P208'
},
{
  pname: 'Fast Charger',
  brand: 'Anker',
  price: 2600,
  category: 'Mobile Accessories',
  pid: 'P209'
},
{
  pname: 'External Hard Drive',
  brand: 'WD',
  price: 6200,
  category: 'Storage',
  pid: 'P210'
}

  ]

  compArr : Array<Icomp> = [
    
 {
  cname: 'Accenture India',
  location: 'Bengaluru',
  employees: 350000,
  industry: 'IT Services',
  cid: 'C201'
},
{
  cname: 'Capgemini India',
  location: 'Pune',
  employees: 180000,
  industry: 'IT Services',
  cid: 'C202'
},
{
  cname: 'Cognizant India',
  location: 'Chennai',
  employees: 240000,
  industry: 'IT Services',
  cid: 'C203'
},
{
  cname: 'L&T Infotech',
  location: 'Mumbai',
  employees: 70000,
  industry: 'IT Services',
  cid: 'C204'
},
{
  cname: 'Adani Group',
  location: 'Ahmedabad',
  employees: 23000,
  industry: 'Conglomerate',
  cid: 'C205'
},
{
  cname: 'Paytm',
  location: 'Noida',
  employees: 25000,
  industry: 'FinTech',
  cid: 'C206'
},
{
  cname: 'Zomato',
  location: 'Gurugram',
  employees: 5000,
  industry: 'Food Technology',
  cid: 'C207'
},
{
  cname: 'Swiggy',
  location: 'Bengaluru',
  employees: 6000,
  industry: 'Food Technology',
  cid: 'C208'
},
{
  cname: 'IBM India',
  location: 'Bengaluru',
  employees: 130000,
  industry: 'Technology',
  cid: 'C209'
},
{
  cname: 'Oracle India',
  location: 'Hyderabad',
  employees: 42000,
  industry: 'Technology',
  cid: 'C210'
}


  ]

  companyArr : Array<Icompany> = [
  {
  cname1: 'Meta',
  location1: 'USA',
  employees1: 86000,
  industry1: 'Technology',
  cid1: 'C201'
},
{
  cname1: 'Netflix',
  location1: 'USA',
  employees1: 13000,
  industry1: 'Entertainment',
  cid1: 'C202'
},
{
  cname1: 'Tesla',
  location1: 'USA',
  employees1: 140000,
  industry1: 'Automobile',
  cid1: 'C203'
},
{
  cname1: 'Adobe',
  location1: 'USA',
  employees1: 29000,
  industry1: 'Software',
  cid1: 'C204'
},
{
  cname1: 'HCL Technologies',
  location1: 'India',
  employees1: 227000,
  industry1: 'IT Services',
  cid1: 'C205'
},
{
  cname1: 'Tech Mahindra',
  location1: 'India',
  employees1: 150000,
  industry1: 'IT Services',
  cid1: 'C206'
},
{
  cname1: 'Adani Group',
  location1: 'India',
  employees1: 23000,
  industry1: 'Conglomerate',
  cid1: 'C207'
},
{
  cname1: 'LG Electronics',
  location1: 'South Korea',
  employees1: 75000,
  industry1: 'Electronics',
  cid1: 'C208'
},
{
  cname1: 'Intel',
  location1: 'USA',
  employees1: 131000,
  industry1: 'Semiconductors',
  cid1: 'C209'
},
{
  cname1: 'SAP',
  location1: 'Germany',
  employees1: 112000,
  industry1: 'Software',
  cid1: 'C210'
}

];

 empArr : Array<Iemp> = [
  {
  ename: 'Amit Kulkarni',
  department: 'Operations',
  salary: 38000,
  experience: 4,
  eid: 'E501'
},
{
  ename: 'Neha Sharma',
  department: 'Quality Assurance',
  salary: 45000,
  experience: 6,
  eid: 'E502'
},
{
  ename: 'Rahul Mehta',
  department: 'Sales',
  salary: 52000,
  experience: 5,
  eid: 'E503'
},
{
  ename: 'Pooja Verma',
  department: 'Customer Support',
  salary: 33000,
  experience: 3,
  eid: 'E504'
}

];

 courseArr : Array<Icourse> = [
  {
  courseName: 'React Development',
  trainer: 'Sanjay Kulkarni',
  duration: '3 Months',
  fees: 27000,
  courseId: 'CR201'
},
{
  courseName: 'Java Spring Boot',
  trainer: 'Pooja Mehta',
  duration: '5 Months',
  fees: 42000,
  courseId: 'CR202'
},
{
  courseName: 'Machine Learning Basics',
  trainer: 'Karan Patel',
  duration: '4 Months',
  fees: 35000,
  courseId: 'CR203'
}

];

teacherArr : Array<Itea> = [
 {
  tname: 'Anil Deshpande',
  subject: 'History',
  salary: 50000,
  experience: 9,
  tid: 'T701'
},
{
  tname: 'Kavita Rao',
  subject: 'Geography',
  salary: 46000,
  experience: 8,
  tid: 'T702'
},
{
  tname: 'Manoj Kulkarni',
  subject: 'Computer Science',
  salary: 58000,
  experience: 11,
  tid: 'T703'
}

];

skills : Array<string> = ["HTML", "CSS", "JS", "ANGULAR", "SASS", "FLEX", "NODE.JS", "REACT"]

languages: Array<string> = [
  "Python",
  "Java",
  "C++",
  "Go",
  "Rust"
];

frameworks: Array<string> = [
  "Vue",
  "Next.js",
  "Spring Boot",
  "Django",
  "Laravel"
];

 ages: Array<number> = [23, 28, 31, 35, 42];

prices: number[] = [1200, 4500, 9999, 18000, 32500];

ratings: Array<number> = [4.1, 4.5, 3.9, 4.8, 4.3];

tools: Array<string> = [
  "Git",
  "Docker",
  "Jenkins",
  "Postman",
  "Webpack"
];

experienceYears: number[] = [1, 3, 5, 7, 10];

ramSizes: Array<number> = [4, 8, 16, 32, 64];
  
}