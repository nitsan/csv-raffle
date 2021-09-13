import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageKeys, SessionStorageService } from '../services/session-storage.service';
import { RaffleService } from '../services/raffle.service';
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

  constructor(private fb: FormBuilder, private router: Router, private title: Title, private raffleService: RaffleService) {
    this.title.setTitle('Admin Raffle');
    this.initRaffleNames();
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
    await this.raffleService.setNames(this.file as Blob);
    const raffleNames = this.raffleService.raffleNames;
    this.totalNames = raffleNames.length - 1;
    SessionStorageService.setItem(SessionStorageKeys.AllNames, raffleNames);
    this.isSaveLoading = false;
  }

  public onSubmit() {
    console.log(this.adminForm.value);
    SessionStorageService.setItem(SessionStorageKeys.AdminForm, this.adminForm.value);
    this.router.navigate(['/']);
  }

  private initRaffleNames(): void {
    const raffleNames = SessionStorageService.getItem(SessionStorageKeys.AllNames);
    if (raffleNames) {
      this.totalNames = raffleNames.length - 1;
      this.raffleService.raffleNames = raffleNames;
    }
  }

}
