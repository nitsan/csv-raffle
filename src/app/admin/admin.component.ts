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
  public isSaveLoading = false;
  public totalNames = 0;

  constructor(private fb: FormBuilder, private router: Router, private title: Title, private lotteryService: LotteryService) {
    this.title.setTitle('Admin Lottery');
    this.initLotteryNames();
    const adminFormData: AdminForm = SessionStorageService.getItem(SessionStorageKeys.AdminForm) || {};
    this.adminForm = this.fb.group({
      csvFile: [],
      logoUrl: [adminFormData.logoUrl],
      buttonText: [adminFormData.buttonText || 'Start', Validators.required],
      backgroundColor: [adminFormData.backgroundColor || '#0e2b42'],
    });
  }

  async handleFileInput(target: any) {
    this.isSaveLoading = true;
    this.file = target.files.item(0);
    await this.lotteryService.setNames(this.file as Blob);
    const lotteryNames = this.lotteryService.lotteryNames;
    this.totalNames = lotteryNames.length - 1;
    SessionStorageService.setItem(SessionStorageKeys.AllNames, lotteryNames);
    this.isSaveLoading = false;
  }

  public onSubmit() {
    console.log(this.adminForm.value);
    SessionStorageService.setItem(SessionStorageKeys.AdminForm, this.adminForm.value);
    this.router.navigate(['/']);
  }

  private initLotteryNames(): void {
    const lotteryNames = SessionStorageService.getItem(SessionStorageKeys.AllNames);
    if (lotteryNames) {
      this.totalNames = lotteryNames.length - 1;
      this.lotteryService.lotteryNames = lotteryNames;
    }
  }

}
