import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageKeys, LocalStorageService } from '../services/local-storage.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    public adminForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.adminForm = this.fb.group({
            csvUrl: [''],
            iconUrl: [''],
            buttonText: ['Start'],
            backgroundColor: ['#0e2b42'],
        });
        if (!LocalStorageService.getItem(LocalStorageKeys.adminForm)) {
            this.saveAdminForm();
        }
    }

    private saveAdminForm() {
        LocalStorageService.setItem(LocalStorageKeys.adminForm, this.adminForm.value);
    }

    public onSubmit() {
        console.log(this.adminForm.value);
        this.saveAdminForm();
    }

}
