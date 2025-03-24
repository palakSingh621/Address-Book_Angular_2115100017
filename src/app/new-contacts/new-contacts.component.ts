import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrls: ['./new-contacts.component.scss']
})
export class NewContactsComponent implements OnInit {
  showForm: boolean = false;
  isEditMode: boolean = false;

  contactList: any[] = [];
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
    this.contactList = [
      {
        id: 1,
        fullName: 'Alice Johnson',
        address: '789 Pine Street',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90001',
        phoneNumber: '111-222-3333'
      },
      {
        id: 2,
        fullName: 'Bob Williams',
        address: '321 Oak Avenue',
        city: 'Chicago',
        state: 'IL',
        zipCode: '60601',
        phoneNumber: '444-555-6666'
      }
    ];
  }

  showAddForm(): void {
    this.resetForm();
    this.showForm = true;
    this.isEditMode = false;
  }
  onReset(): void {
    this.resetForm();
  }
  saveContact(): void {
    if (this.isEditMode) {
      const index = this.contactList.findIndex(c => c.id === this.formData.id);
      if (index !== -1) {
        this.contactList[index] = { ...this.formData };
      }
    } else {
      const newId = this.contactList.length > 0 ? Math.max(...this.contactList.map(c => c.id)) + 1 : 1;
      const newContact = { ...this.formData, id: newId };
      this.contactList.push(newContact);
    }
    this.resetForm();
    this.showForm = false;
  }

  onEdit(contact: any): void {
    this.formData = { ...contact };
    this.showForm = true;
    this.isEditMode = true;
  }

  onDelete(contactId: number): void {
    this.contactList = this.contactList.filter(c => c.id !== contactId);
  }

  cancelForm(): void {
    this.resetForm();
    this.showForm = false;
  }

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
