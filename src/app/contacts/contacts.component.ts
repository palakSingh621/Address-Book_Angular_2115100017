import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  showForm: boolean = false;
  isEditMode: boolean = false;

  personList: any[] = [];
  formData: any = {
    id: null,
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: ''
  };

  constructor() {}

  ngOnInit(): void {
    // Pre-fill some dummy data to test frontend
    this.personList = [
      {
        id: 1,
        fullName: 'John Doe',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        phoneNumber: '123-456-7890'
      },
      {
        id: 2,
        fullName: 'Jane Smith',
        address: '456 Elm St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94101',
        phoneNumber: '987-654-3210'
      }
    ];
  }
  
  // Show form for new contact
  showAddForm(): void {
    this.resetForm();
    this.showForm = true;
    this.isEditMode = false;
  }

  // Save new contact or update existing one
  saveContact(): void {
    if (this.isEditMode) {
      const index = this.personList.findIndex(p => p.id === this.formData.id);
      if (index !== -1) {
        this.personList[index] = { ...this.formData };
      }
    } else {
      const newId = this.personList.length > 0 ? Math.max(...this.personList.map(p => p.id)) + 1 : 1;
      const newPerson = { ...this.formData, id: newId };
      this.personList.push(newPerson);
    }
    this.resetForm();
    this.showForm = false;
  }

  // Populate form for editing
  onEdit(person: any): void {
    this.formData = { ...person };
    this.showForm = true;
    this.isEditMode = true;
  }

  // Delete contact
  onDelete(personId: number): void {
    this.personList = this.personList.filter(p => p.id !== personId);
  }

  // Cancel form
  cancelForm(): void {
    this.resetForm();
    this.showForm = false;
  }

  // Clear form data
  resetForm(): void {
    this.formData = {
      id: null,
      fullName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    };
    this.isEditMode = false;
  }

}
