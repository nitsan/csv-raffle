import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageKeys, LocalStorageService } from '../services/local-storage.service';
import { LotteryService } from '../services/lottery.service';
import { AdminForm } from '../models/admin.form.model';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public adminForm: FormGroup;
  public file: File | null = null;

  constructor(private fb: FormBuilder, private router: Router, private title: Title, private lotteryService: LotteryService) {
    this.title.setTitle('Admin Lottery');
    const adminFormData: AdminForm = LocalStorageService.getItem(LocalStorageKeys.adminForm) || {};
    this.adminForm = this.fb.group({
      csvFile: [adminFormData.csvUrl],
      logoUrl: [adminFormData.logoUrl],
      buttonText: [adminFormData.buttonText || 'Start', Validators.required],
      backgroundColor: [adminFormData.backgroundColor || '#0e2b42'],
    });
  }

  handleFileInput(target: any) {
    this.file = target.files.item(0);
  }

  public onSubmit() {
    console.log(this.adminForm.value);
    this.saveAdminForm();
    this.router.navigate(['/']);
  }

  private saveAdminForm() {
    LocalStorageService.setItem(LocalStorageKeys.adminForm, this.adminForm.value);
    this.lotteryService.setNames(this.file as Blob);
  }

}
