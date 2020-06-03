import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
  link: string;
}

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  panelOpenState = false;
  folders: Section[] = [
    {
      name: 'Machine Learning for General Ledger using Python',
      updated: new Date('4/28/20'),
      link: ""
    },
    {
      name: 'Machine Learning for General Ledger using Julia Lang',
      updated: new Date('4/28/20'),
      link: ""
    },
    {
      name: 'Deep Learning neural networks for General Ledger using PyTorch',
      updated: new Date('5/31/20'),
      link: ""
    }
  ];
  notes: Section[] = [
    {
      name: 'School Management App',
      updated: new Date('2/20/19'),
      link: "https://github.com/AmitXShukla/Online-School-Management-App-Angular-Firebase"
    },
    {
      name: 'GPS Tracking through Phone',
      updated: new Date('1/18/19'),
      link: "https://github.com/AmitXShukla/GPS-Mobile-Tracking-App"
    },
    {
      name: 'Mobile Tracking, Assets GPS Tracking through Phone',
      updated: new Date('1/18/19'),
      link: "https://github.com/AmitXShukla/Mobile-Picture-GPS-Tracking-Attendance-APP"
    },
    {
      name: 'ERP Apps - CRM Cloud',
      updated: new Date('5/18/20'),
      link: "https://github.com/AmitXShukla/ERP-Apps-CRM-Cloud-Angular_Firebase"
    },
    {
      name: 'Online store - eCommerce',
      updated: new Date('11/18/19'),
      link: "https://github.com/AmitXShukla/Online-Shop-eCommerce-App-Angular-6-Firebase"
    },
    {
      name: 'HCM - Employee Payroll',
      updated: new Date('10/18/19'),
      link: "https://github.com/AmitXShukla/Employee-Payroll-Salary-App-Angular-6-MEAN-Stack"
    },
    {
      name: 'Restaurant Management',
      updated: new Date('12/24/18'),
      link: "https://github.com/AmitXShukla/Flutter-for-Beginners"
    },
    {
      name: 'Visitor Management',
      updated: new Date('12/18/19'),
      link: "https://github.com/AmitXShukla/Visitor-Management-App"
    }
  ];
  tracking: Section[] = [
    {
      name: 'GPS Tracking through Phone',
      updated: new Date('1/18/19'),
      link: "https://github.com/AmitXShukla/GPS-Mobile-Tracking-App"
    },
    {
      name: 'Mobile Tracking, Assets GPS Tracking through Phone',
      updated: new Date('1/18/19'),
      link: "https://github.com/AmitXShukla/Mobile-Picture-GPS-Tracking-Attendance-APP"
    },
    {
      name: 'Visitor Management',
      updated: new Date('12/18/19'),
      link: "https://github.com/AmitXShukla/Visitor-Management-App"
    }
  ];
  erps: Section[] = [
    {
      name: 'School Management App',
      updated: new Date('2/20/19'),
      link: "https://github.com/AmitXShukla/Online-School-Management-App-Angular-Firebase"
    },
    {
      name: 'ERP Apps - CRM Cloud',
      updated: new Date('5/18/20'),
      link: "https://github.com/AmitXShukla/ERP-Apps-CRM-Cloud-Angular_Firebase"
    },
    {
      name: 'Online store - eCommerce',
      updated: new Date('11/18/19'),
      link: "https://github.com/AmitXShukla/Online-Shop-eCommerce-App-Angular-6-Firebase"
    },
    {
      name: 'HCM - Employee Payroll',
      updated: new Date('10/18/19'),
      link: "https://github.com/AmitXShukla/Employee-Payroll-Salary-App-Angular-6-MEAN-Stack"
    }
  ];
  smallbusiness: Section[] = [
    {
      name: 'Online store - eCommerce',
      updated: new Date('11/18/19'),
      link: "https://github.com/AmitXShukla/Online-Shop-eCommerce-App-Angular-6-Firebase"
    },
    {
      name: 'Restaurant Management',
      updated: new Date('12/24/18'),
      link: "https://github.com/AmitXShukla/Flutter-for-Beginners"
    },
    {
      name: 'Visitor Management',
      updated: new Date('12/18/19'),
      link: "https://github.com/AmitXShukla/Visitor-Management-App"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
