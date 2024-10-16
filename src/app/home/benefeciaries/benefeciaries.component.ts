import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefeciaries',
  templateUrl: './benefeciaries.component.html',
  styleUrls: ['./benefeciaries.component.css']
})
export class BenefeciariesComponent implements OnInit {
  userName = 'User';  // Replace with dynamic user name when available

  // Steps for creating a campaign
  steps = [
    {
      number: 'Step 1',
      description: 'Sign up on our platform and create your profile. Ensure your details are accurate for transparency with potential supporters.',
      imageUrl: 'https://via.placeholder.com/100'
    },
    {
      number: 'Step 2',
      description: 'Write a compelling story about your situation and why you need support. Include as many details as possible to help supporters connect with your cause.',
      imageUrl: 'https://via.placeholder.com/100'
    },
    // Continue steps 3-6 similarly
  ];

  // Testimonials
  testimonials = [
    {
      name: 'Belli Smith',
      role: 'Designer',
      text: '"Contribute to a cause, knowing your help will make a difference."',
      imageUrl: 'https://via.placeholder.com/60'
    },
    {
      name: 'Sara Taylor',
      role: 'Donor',
      text: '"This platform bridges the gap between those in need and willing donors."',
      imageUrl: 'https://via.placeholder.com/60'
    },
    // Add more testimonials as needed
  ];

  // Statistics
  stats = [
    { value: '200k', label: 'Received Donations From Our People' },
    { value: '99K', label: 'Projects Done With The Help Of Donors' },
    { value: '200k', label: 'People We Helped in 2020' },
    { value: '10.7K', label: 'Volunteers Solving Many Causes' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
