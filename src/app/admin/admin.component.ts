import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageKeys, SessionStorageService } from '../services/session-storage.service';
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
    const adminFormData: AdminForm = SessionStorageService.getItem(SessionStorageKeys.adminForm) || {};
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

  public async onSubmit() {
    console.log(this.adminForm.value);
    await this.saveAdminForm();
    this.router.navigate(['/']);
  }

  private async saveAdminForm() {
    SessionStorageService.setItem(SessionStorageKeys.adminForm, this.adminForm.value);
    await this.lotteryService.setNames(this.file as Blob);
  }

}
